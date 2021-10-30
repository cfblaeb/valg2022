from dash import dcc, html, dependencies, callback_context, Dash
from dash_daq import BooleanSwitch
import plotly.express as px
import pandas as pd
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.decomposition import PCA
import numpy as np
from flask import Flask


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


df = pd.read_feather("kv2021_Lasse_data.feather")
store_partier = ['Det Konservative Folkeparti', 'Dansk Folkeparti', 'Enhedslisten', 'Nye Borgerlige', 'Alternativet', 'Socialistisk Folkeparti', 'Liberal Alliance', 'Socialdemokratiet', 'Kristendemokraterne', 'Venstre', 'Radikale Venstre']
små_partier = ['Slesvigsk Parti', 'Frihedslisten', 'Kommunistisk Parti', 'Danmarks Vision', 'Trafikalt Folkeparti', 'Veganerpartiet', 'Kommunisterne', 'Trivsel og Reel Borgerinddragelse', 'De Grønne', 'Partiet Samfundssind', 'Egalitært Folkeparti', 'De LokalNationale', 'SocialKonservative Assens', 'Partiet Ballerup Listen', 'Lokalpolitisk Forum', 'Bornholmerlisten', 'Borgerlisten', 'Sydamagerlisten', 'Tværpolitisk Forening', 'Anne Grønlund', 'Et Samlet Egedal', 'Lokallisten Ny Egedal', 'Nye bogerlige', 'Borgerlisten i Esbjerg Kommune', 'Esbjerglisten', 'Lokallisten', 'Marie Mynche', 'Borgerligt Fællesskab', 'Hvid-sten', 'Havenisse-partiet', 'Bitten Vivi Jensen', 'Volt', 'Forenet Frederikssund', 'Fjordlandslisten', 'Anja Bisp Pedersen', 'Vi Lokale Demokrater', 'Lokallisten Faaborg-Midtfyn', 'Sahar Aslani', 'Lokallisten Gladsaxe', 'Glostrup Borgerliste', 'Bylisten', 'Party Parti', 'nytgribskov', 'Klimapartiet i Gribskov', 'KultureltFokus', 'Guldborgsundlisten', 'Sammenhæng', 'Det Miljø Radikale Parti', 'Elevatorlisten', 'Bella Listen', 'Herlev Listen', 'Frie Danske', 'Maren Spliid Gruppen', 'Miljølisten Horsens', 'Hvidovrelisten', 'Kommunistisk Liste', 'SocialKonservative', 'Fælleslisten', 'Ishøjlisten', 'Annelise Madsen', 'Lokallisten Jammerbugt', 'Frie Lokale', 'Christiania-Listen', 'Københavnerlisten', 'Danmark for Alle', 'Klimapartiet Momentum', 'Kærlighedspartiet (Regnbuefolket / Befri Christiania)', 'Rolig Revolution', 'Bæredygtigt Samfund', 'Det Demokratiske Parti', 'Lokallisten Levende Landsbyer', 'Din Stemme', 'Vestfronten', 'Lokallisten Lolland', 'Nakskov Listen', 'Lokallisten Vores Kommune - LTK', 'Læsø Borgerliste', 'Mariagerfjordlisten', 'Omsorgsgruppen', 'Tværpolitisk Anstændighed', 'PositivPlus', 'Demokratisk Balance', 'Liberaterne', 'Et Bedre Odense', 'Nyt Odsherred', 'Beboerlisten', 'Østbroen', 'Velfærdslisten', 'Den Sociale Fællesliste - Rebild', 'Fjordlisten', 'Michael Phillip Hansen-listen', 'BorgerFokus', 'Carsten Ørum Skytt', 'Deltagerlisten', 'Hanne Stender Damkjær – Partiliste', 'VoresSolrød', 'Havdruplisten', 'Frigængerne', 'Nyt Stevns', 'Helle Wisbech', 'Den Lunefulde Liste', 'Sydfynslisten', 'Borgersammenslutningen', 'Fælleslisten Sønderborg', 'Sten i Skoen', 'Tønder Listen', 'Tårnby Listen', 'VallensbækListen', 'Lokallisten 2017', 'Liberal Borgerliste', 'Liberal Borgerliste Vejle', 'VesthimmerlandsListen', 'Lokallisten - Viborg', 'Hvad kan gå galt', 'Ærø i Centrum', 'Ærøs Fremtid']

color_dict = {parti: px.colors.qualitative.Dark24[i % 24] for i, parti in enumerate([*store_partier, *små_partier])}
sprg_col_names = [x for x in df.columns if x.startswith("kv21-danmark")]
X = df[sprg_col_names]
y = df['parti']
q = pd.concat([df, pd.DataFrame(LinearDiscriminantAnalysis(n_components=2).fit_transform(X, y), columns=["X", "y"]).set_index(df.index)], axis=1)
	# pd.DataFrame(PCA(n_components=2).fit_transform(X), columns=["X", "y"]).set_index(df.index)],

server = Flask(__name__)
app = Dash(server=server)
app.layout = html.Div([
	html.Label([
		"kommune filter:",
		dcc.Dropdown(id='kommune_valg', options=[{'value': 'alle', 'label': 'alle'}, *[{'value': x, 'label': x} for x in df.kommune.unique()]], value=['alle', ], multi=True)
	]),
	html.Label([
		"hurtig vælger af partier. Skift værdi her for hurtigt at sætte parti-listen nedenunder til enten alle partier eller lands partier:",
		dcc.RadioItems(id='parti_valg', value='LP', labelStyle={'display': 'inline-block'}, options=[
				{'label': 'Lands partier', 'value': 'LP'},
				{'label': 'Alle partier', 'value': 'AP'},
				{'label': 'Frit valg', 'value': 'FV'}
			],
		)
	]),
	html.Label([
		"partier:",
		dcc.Dropdown(id='parti_multi_valg', options=[{'value': x, 'label': x} for x in [*store_partier, *små_partier]], value=store_partier, multi=True)
	]),
	BooleanSwitch(id='parti_shadow', on=True, label="Tegn skygge af Landsparti områderne:",	labelPosition="top"),
	dcc.Graph(id='viz'),
])


@app.callback(dependencies.Output('parti_valg', 'value'), dependencies.Output('parti_multi_valg', 'value'),	dependencies.Input('parti_multi_valg', 'value'), dependencies.Input('parti_valg', 'value'))
def styr_hurtig_vælgeren(valgte_partier, parti_vælger_radio):
	ctx = callback_context
	trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
	if trigger_id == 'parti_valg':
		if parti_vælger_radio == 'AP':
			return 'AP', [*store_partier, *små_partier]
		elif parti_vælger_radio == 'LP':
			return 'LP', store_partier
		else:
			return 'FV', ctx.inputs['parti_multi_valg.value']
	else:
		if set(valgte_partier) == set(store_partier):
			return 'LP', store_partier
		elif set(valgte_partier) == set([*store_partier, *små_partier]):
			return 'AP', [*store_partier, *små_partier]
		else:
			return 'FV', ctx.inputs['parti_multi_valg.value']


@app.callback(dependencies.Output('viz', 'figure'), [dependencies.Input('kommune_valg', 'value'), dependencies.Input('parti_multi_valg', 'value'), dependencies.Input('parti_shadow', 'on')])
def update_graph(kom_filter, parti_filter, shadow):
	if 'alle' in kom_filter:
		a = q[q.parti.isin(parti_filter)]
	else:
		a = q[q.parti.isin(parti_filter) & q.kommune.isin(kom_filter)]

	f1 = px.scatter(a, x='X', y='y', color='parti', color_discrete_map=color_dict, hover_data=['navn', 'kommune', 'alder'], height=800, width=1200)
	if shadow:
		for ii, (i, data) in enumerate(q[q.parti.isin(store_partier)].groupby('parti')):
			f1.add_shape(
				type='path',
				path=confidence_ellipse(data.X, data.y),
				line_color='rgb(0,0,0,1)',
				fillcolor=color_dict[i],
				opacity=.2,
			)

	return f1


if __name__ == '__main__':
	app.run_server()
