var vg_1 = "FIT3179-map.json";
vegaEmbed("#chloropleth", vg_1, { config: { background: "#dadada" } })
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "Line_chart.json";
vegaEmbed("#line_chart", vg_2, {
  config: {
    background: "#dadada",
    axis: { gridColor: "#fafafa" },
  },
})
  .then(function (result) {})
  .catch(console.error);

var vg_3 = "Bar-chart.json";
vegaEmbed("#year_bar", vg_3, {
  config: {
    background: "#dadada",
    axis: { gridColor: "#fafafa" },
  },
})
  .then(function (result) {})
  .catch(console.error);