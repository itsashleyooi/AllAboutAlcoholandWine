var vg_1 = "https://raw.githubusercontent.com/itsashleyooi/AllAboutWineVisualisation/main/js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/itsashleyooi/AllAboutWineVisualisation/main/js/rank.vg.json";
vegaEmbed("#rank_chart", vg_2)
  .then(function (result) {})
  .catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/itsashleyooi/AllAboutWineVisualisation/main/js/isotype_wineproduction.json";
vegaEmbed("#isotype_chart", vg_3)
  .then(function (result) {})
  .catch(console.error);
