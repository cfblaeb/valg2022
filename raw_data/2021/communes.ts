// source https://candidatetest-backend-is.stage.kube.tv2net.dk/candidatetest-backend/api/v1/valg/5/kommune
// ID's are fixed for all KV elections
const communes = [
  {
    value: 580,
    label: 'Aabenraa',
  },
  {
    value: 851,
    label: 'Aalborg',
  },
  {
    value: 751,
    label: 'Aarhus',
  },
  {
    value: 165,
    label: 'Albertslund',
  },
  {
    value: 201,
    label: 'Allerød',
  },
  {
    value: 420,
    label: 'Assens',
  },
  {
    value: 151,
    label: 'Ballerup',
  },
  {
    value: 530,
    label: 'Billund',
  },
  {
    value: 400,
    label: 'Bornholm',
  },
  {
    value: 153,
    label: 'Brøndby',
  },
  {
    value: 810,
    label: 'Brønderslev',
  },
  {
    value: 155,
    label: 'Dragør',
  },
  {
    value: 240,
    label: 'Egedal',
  },
  {
    value: 561,
    label: 'Esbjerg',
  },
  {
    value: 563,
    label: 'Fanø',
  },
  {
    value: 710,
    label: 'Favrskov',
  },
  {
    value: 320,
    label: 'Faxe',
  },
  {
    value: 210,
    label: 'Fredensborg',
  },
  {
    value: 607,
    label: 'Fredericia',
  },
  {
    value: 147,
    label: 'Frederiksberg',
  },
  {
    value: 813,
    label: 'Frederikshavn',
  },
  {
    value: 250,
    label: 'Frederikssund',
  },
  {
    value: 190,
    label: 'Furesø',
  },
  {
    value: 430,
    label: 'Faaborg-Midtfyn',
  },
  {
    value: 157,
    label: 'Gentofte',
  },
  {
    value: 159,
    label: 'Gladsaxe',
  },
  {
    value: 161,
    label: 'Glostrup',
  },
  {
    value: 253,
    label: 'Greve',
  },
  {
    value: 270,
    label: 'Gribskov',
  },
  {
    value: 376,
    label: 'Guldborgsund',
  },
  {
    value: 510,
    label: 'Haderslev',
  },
  {
    value: 260,
    label: 'Halsnæs',
  },
  {
    value: 766,
    label: 'Hedensted',
  },
  {
    value: 217,
    label: 'Helsingør',
  },
  {
    value: 163,
    label: 'Herlev',
  },
  {
    value: 657,
    label: 'Herning',
  },
  {
    value: 219,
    label: 'Hillerød',
  },
  {
    value: 860,
    label: 'Hjørring',
  },
  {
    value: 316,
    label: 'Holbæk',
  },
  {
    value: 661,
    label: 'Holstebro',
  },
  {
    value: 615,
    label: 'Horsens',
  },
  {
    value: 167,
    label: 'Hvidovre',
  },
  {
    value: 169,
    label: 'Høje-Taastrup',
  },
  {
    value: 223,
    label: 'Hørsholm',
  },
  {
    value: 756,
    label: 'Ikast-Brande',
  },
  {
    value: 183,
    label: 'Ishøj',
  },
  {
    value: 849,
    label: 'Jammerbugt',
  },
  {
    value: 326,
    label: 'Kalundborg',
  },
  {
    value: 440,
    label: 'Kerteminde',
  },
  {
    value: 621,
    label: 'Kolding',
  },
  {
    value: 101,
    label: 'København',
  },
  {
    value: 259,
    label: 'Køge',
  },
  {
    value: 482,
    label: 'Langeland',
  },
  {
    value: 350,
    label: 'Lejre',
  },
  {
    value: 665,
    label: 'Lemvig',
  },
  {
    value: 360,
    label: 'Lolland',
  },
  {
    value: 173,
    label: 'Lyngby-Taarbæk',
  },
  {
    value: 825,
    label: 'Læsø',
  },
  {
    value: 846,
    label: 'Mariagerfjord',
  },
  {
    value: 410,
    label: 'Middelfart',
  },
  {
    value: 773,
    label: 'Morsø',
  },
  {
    value: 707,
    label: 'Norddjurs',
  },
  {
    value: 480,
    label: 'Nordfyns',
  },
  {
    value: 450,
    label: 'Nyborg',
  },
  {
    value: 370,
    label: 'Næstved',
  },
  {
    value: 727,
    label: 'Odder',
  },
  {
    value: 461,
    label: 'Odense',
  },
  {
    value: 306,
    label: 'Odsherred',
  },
  {
    value: 730,
    label: 'Randers',
  },
  {
    value: 840,
    label: 'Rebild',
  },
  {
    value: 760,
    label: 'Ringkøbing-Skjern',
  },
  {
    value: 329,
    label: 'Ringsted',
  },
  {
    value: 265,
    label: 'Roskilde',
  },
  {
    value: 230,
    label: 'Rudersdal',
  },
  {
    value: 175,
    label: 'Rødovre',
  },
  {
    value: 741,
    label: 'Samsø',
  },
  {
    value: 740,
    label: 'Silkeborg',
  },
  {
    value: 746,
    label: 'Skanderborg',
  },
  {
    value: 779,
    label: 'Skive',
  },
  {
    value: 330,
    label: 'Slagelse',
  },
  {
    value: 269,
    label: 'Solrød',
  },
  {
    value: 340,
    label: 'Sorø',
  },
  {
    value: 336,
    label: 'Stevns',
  },
  {
    value: 671,
    label: 'Struer',
  },
  {
    value: 479,
    label: 'Svendborg',
  },
  {
    value: 706,
    label: 'Syddjurs',
  },
  {
    value: 540,
    label: 'Sønderborg',
  },
  {
    value: 787,
    label: 'Thisted',
  },
  {
    value: 550,
    label: 'Tønder',
  },
  {
    value: 185,
    label: 'Tårnby',
  },
  {
    value: 187,
    label: 'Vallensbæk',
  },
  {
    value: 573,
    label: 'Varde',
  },
  {
    value: 575,
    label: 'Vejen',
  },
  {
    value: 630,
    label: 'Vejle',
  },
  {
    value: 820,
    label: 'Vesthimmerlands',
  },
  {
    value: 791,
    label: 'Viborg',
  },
  {
    value: 390,
    label: 'Vordingborg',
  },
  {
    value: 492,
    label: 'Ærø',
  },
];

export default communes;
