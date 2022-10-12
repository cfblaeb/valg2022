import dash_bootstrap_components as dbc
import numpy as np
import pandas as pd
import plotly.express as px
from dash import Dash, dcc, html, callback_context
from dash.dependencies import Input, Output
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis


# load data
df = pd.read_feather("2022_Lasse_data.feather").reset_index()
color_dict = pd.read_json("various.json").set_index('bogstav_leg')['farver'].to_dict()
fv2022 = pd.read_json('fv2022.json')
dr_sprgs = pd.read_json('questions.json')

dk_spg = [
	'530', '531', '533', '534', '535', '537', '538', '540', '541', '543', '544', '545', '546', '547', '548', '550',
	'551', '552', '553', '555', '556', '557', '559', '561', '563', '1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b', '5a',
	'5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b', '10a', '10b', '11a', '11b', '12a', '12b'
]

# do calcs
X = df[dk_spg]
y = df['parti']
lda = LinearDiscriminantAnalysis(n_components=2).fit(X, y)
q = pd.concat([df, pd.DataFrame(lda.transform(df[dk_spg]), columns=["X", "y"]).set_index(df.index)], axis=1)

dr_sprgs.columns = dr_sprgs.columns.str.lower()
sprgs = pd.concat([fv2022, dr_sprgs])[['id', 'question']].set_index('id')
sprgs.index = sprgs.index.astype('str')
sprgs = sprgs.loc[dk_spg]
svar_muligheder = ['helt uenig', 'uenig', 'neutral', 'enig', 'helt enig']


def confidence_ellipse(xs, ys, n_std=1.96, size=100):
	if len(xs) != 1:
		cov = np.cov(xs, ys)
		pearson = cov[0, 1] / np.sqrt(cov[0, 0] * cov[1, 1])
		ell_radius_x = np.sqrt(1 + pearson)
		ell_radius_y = np.sqrt(1 - pearson)
		theta = np.linspace(0, 2 * np.pi, size)
		ellipse_coords = np.column_stack([ell_radius_x * np.cos(theta), ell_radius_y * np.sin(theta)])
		x_scale = np.sqrt(cov[0, 0]) * n_std
		x_mean = np.mean(xs)
		y_scale = np.sqrt(cov[1, 1]) * n_std
		y_mean = np.mean(ys)
		translation_matrix = np.tile([x_mean, y_mean], (ellipse_coords.shape[0], 1))
		rotation_matrix = np.array([[np.cos(np.pi / 4), np.sin(np.pi / 4)], [-np.sin(np.pi / 4), np.cos(np.pi / 4)]])
		scale_matrix = np.array([[x_scale, 0], [0, y_scale]])
		ellipse_coords = ellipse_coords.dot(rotation_matrix).dot(scale_matrix) + translation_matrix

		path = f'M {ellipse_coords[0, 0]}, {ellipse_coords[0, 1]}'
		for k in range(1, len(ellipse_coords)):
			path += f'L{ellipse_coords[k, 0]}, {ellipse_coords[k, 1]}'
		path += ' Z'
		return path


app = Dash(
	title="F2022 DumData analyse",
	external_stylesheets=[dbc.themes.SOLAR, dbc.icons.BOOTSTRAP],
	meta_tags=[{"name": "viewport", "content": "width=1000, initial-scale=1"}, ],
)
server = app.server

app.layout = dbc.Container([
	dbc.Card(
		dbc.Container(
			[
				html.H2("Folketingsvalg 2022"),
				html.P("Analyse af hvor de enkelte kandidater står i forhold til hinanden og deres partier", className="lead",),
			], #fluid=True,
		), body=True
	),
	dbc.Card(
		[
			dbc.Card([
				html.H4("Begræns til valgte storkredse:", className="card-title"),
				dcc.Dropdown(id='storkreds_valg', options=[{'value': 'alle', 'label': 'alle'}, *[{'value': x, 'label': x} for x in df.storkreds.unique()]], value=['alle', ], multi=True),
			], body=True),
			dbc.Card([dbc.Switch(id='parti_shadow', value=True, label="Tegn cirkler om partierne"), ], body=True)
		],
	),

	dbc.Card(dcc.Graph(id='viz')),
	dbc.Card(html.P("(her kommer forudsigelser om hvilket parti en 'klikket' politiker burde være i)", id="svar_res")),
	dbc.Card([
		dcc.Markdown('''
		# SVAR
		### Tryk på politiker for at se hans svar eller svar selv for at se hvor DU ligger
		helt uenig  --  uenig  --  neutral  --  enig  --  helt enig
		'''),
		dbc.ListGroup([
			dbc.ListGroupItem([
				html.P(sprgs.loc[spg]['question']),
				dcc.RadioItems(id=sprgs.loc[spg].name, options=[{'label': '', 'value': x / 4} for x in range(5)], value=0, labelStyle={'display': 'inline-block'})
			]) for spg in dk_spg
		], flush=True)
	], body=True)
	, ], #fluid=True
)


# %%
@app.callback([Output('viz', 'figure'), Output('storkreds_valg', 'value')], [Input('storkreds_valg', 'value'), Input('parti_shadow', 'value')])
def update_graph(storkreds_filter, shadow):
	if 'alle' in storkreds_filter and len(storkreds_filter) != 1:
		storkreds_filter = [x for x in storkreds_filter if x != 'alle']
	elif len(storkreds_filter) == 0:
		storkreds_filter = ['alle', ]
	if 'alle' in storkreds_filter:
		a = q
	else:
		a = q[q.storkreds.isin(storkreds_filter)]

	f1 = px.scatter(
		a, x='X', y='y', color='parti', color_discrete_map=color_dict, hover_data=['navn', 'storkreds', 'alder'],
		custom_data=['index'], template="plotly_dark", width=1000  # , marginal_x='box'
	)
	f1.layout.xaxis.fixedrange = True
	f1.layout.yaxis.fixedrange = True
	f1.update_layout(modebar_remove=['zoom', 'pan', 'select', 'lasso2d'])

	if shadow:
		for ii, (i, data) in enumerate(q.groupby('parti')):
			if len(data.X) != 1:
				f1.add_shape(type='path', path=confidence_ellipse(data.X, data.y), line_color='rgb(255,255,255,1)', fillcolor=color_dict[i], opacity=.4,)

	return f1, storkreds_filter


@app.callback([*[Output(x, 'value') for x in dk_spg], Output('svar_res', 'children')], {'clickData': Input('viz', 'clickData'), 'spg_in': [Input(x, 'value') for x in dk_spg]})
def display_click_data(clickData, spg_in):
	ctx = callback_context
	trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
	if trigger_id == 'viz':
		if clickData and len(clickData['points']) != 0:
			idx = clickData['points'][0]['customdata'][0]
			navn = clickData['points'][0]['customdata'][1]
		else:
			idx = 1350
			navn = "(klik på nogen)"
		row = q[q['index'] == idx]
		parti = row['parti'].iloc[0]
		nyt_parti = lda.predict(row[dk_spg])[0]
		return [*[row[x].iloc[0] for x in dk_spg], f"Du har klikket på {navn}, {parti}. Vedkomne burde overveje {nyt_parti}"]
	else:
		a = pd.DataFrame(spg_in, index=dk_spg).T
		b = lda.transform(a)[0]
		return [*[x for x in spg_in], f"Dine koordinater er {b[0]:.1f}, {b[1]:.1f}. Du burde overveje {lda.predict(a)[0]}"]


if __name__ == "__main__":
	app.run_server()
	#app.run_server(debug=True)
