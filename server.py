from dash import dcc, html, callback_context, Dash
from dash.dependencies import Input, Output
from dash_daq import BooleanSwitch
import plotly.express as px
import pandas as pd
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.decomposition import PCA
import numpy as np
from flask import Flask
from json import load


def confidence_ellipse(x, y, n_std=1.96, size=100):
	if x.size != y.size:
		raise ValueError("x and y must be the same size")

	cov = np.cov(x, y)
	pearson = cov[0, 1] / np.sqrt(cov[0, 0] * cov[1, 1])
	ell_radius_x = np.sqrt(1 + pearson)
	ell_radius_y = np.sqrt(1 - pearson)
	theta = np.linspace(0, 2 * np.pi, size)
	ellipse_coords = np.column_stack([ell_radius_x * np.cos(theta), ell_radius_y * np.sin(theta)])
	x_scale = np.sqrt(cov[0, 0]) * n_std
	x_mean = np.mean(x)
	y_scale = np.sqrt(cov[1, 1]) * n_std
	y_mean = np.mean(y)
	translation_matrix = np.tile([x_mean, y_mean], (ellipse_coords.shape[0], 1))
	rotation_matrix = np.array([[np.cos(np.pi / 4), np.sin(np.pi / 4)], [-np.sin(np.pi / 4), np.cos(np.pi / 4)]])
	scale_matrix = np.array([[x_scale, 0], [0, y_scale]])
	ellipse_coords = ellipse_coords.dot(rotation_matrix).dot(scale_matrix) + translation_matrix

	path = f'M {ellipse_coords[0, 0]}, {ellipse_coords[0, 1]}'
	for k in range(1, len(ellipse_coords)):
		path += f'L{ellipse_coords[k, 0]}, {ellipse_coords[k, 1]}'
	path += ' Z'
	return path


df = pd.read_feather("2022_Lasse_data.feather")
color_dict = {parti: px.colors.qualitative.Dark24[i] for i, parti in enumerate(df.parti.unique())}
dk_spg = df.columns[1:-4]
X = df[dk_spg]
y = df['parti']
lda = LinearDiscriminantAnalysis(n_components=2).fit(X, y)
q = pd.concat([df, pd.DataFrame(PCA(n_components=2).fit_transform(X), columns=["X", "y"]).set_index(df.index)], axis=1)

fv2022 = load(open('fv2022.json'))
spgs = [spg for spg in fv2022 if spg['id'] in dk_spg]
svar_muligheder = ['helt uenig', 'uenig', 'neutral', 'enig', 'helt enig']

server = Flask(__name__)
app = Dash(server=server)
app.layout = html.Div([
	html.Label([
		"storkreds filter:",
		dcc.Dropdown(id='storkreds_valg', options=[{'value': 'alle', 'label': 'alle'}, *[{'value': x, 'label': x} for x in df.storkreds.unique()]], value=['alle', ], multi=True)
	]),
	BooleanSwitch(id='parti_shadow', on=True, label="Tegn skygge af parti områderne:", labelPosition="top"),
	dcc.Graph(id='viz'),
	html.Div(id="svar_res", children=["(her kommer forudsigelser om hvilket parti en 'klikket' politiker burde være i)"]),
	dcc.Markdown('''
	# SVAR
	### Tryk på politiker for at se hans svar eller svar selv for at se hvor DU ligger
	helt uenig  --  uenig  --  neutral  --  enig  --  helt enig
	'''),
	html.Div([
		dcc.RadioItems(id=spg['id'], options=[{'label': '' if x < 4 else spg['question'], 'value': x - 2} for x in range(5)], value=0, labelStyle={'display': 'inline-block'}) for spg in spgs
	]),
])


@app.callback(Output('viz', 'figure'), [Input('storkreds_valg', 'value'), Input('parti_shadow', 'on')])
def update_graph(storkreds_filter, shadow):
	if 'alle' in storkreds_filter:
		a = q
	else:
		a = q[q.storkreds.isin(storkreds_filter)]

	f1 = px.scatter(a, x='X', y='y', color='parti', color_discrete_map=color_dict, hover_data=['navn', 'storkreds', 'alder'], custom_data=['index'], height=800, width=1200)
	if shadow:
		for ii, (i, data) in enumerate(q.groupby('parti')):
			f1.add_shape(type='path', path=confidence_ellipse(data.X, data.y), line_color='rgb(0,0,0,1)', fillcolor=color_dict[i], opacity=.2,)
	return f1


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
		return [*[row[x].iloc[0] for x in dk_spg],
				f"Du har klikket på {navn}, {parti}. Vedkomne burde overveje {nyt_parti}"]
	else:
		print(spg_in)
		a = np.array(spg_in).reshape(1, -1)
		b = lda.transform(a)[0]
		return [*[x for x in spg_in], f"Dine koordinater er {b[0]:.1f}, {b[1]:.1f}. Du burde overveje {lda.predict(a)[0]}"]


if __name__ == '__main__':
	app.run_server()
