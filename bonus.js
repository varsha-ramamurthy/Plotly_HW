/**
 * BONUS Solution
 * */
function buildGauge(wfreq) {
  // Enter the washing frequency between 0 and 180
  var level = parseFloat(wfreq) * 20;

  // Trig to calc meter point
  var degrees = 180 - level;
  var radius = 0.5;
  var radians = (degrees * Math.PI) / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);

  // Path: may have to change to create a better triangle
  var mainPath = "M -.0 -0.05 L .0 0.05 L ";
  var pathX = String(x);
  var space = " ";
  var pathY = String(y);
  var pathEnd = " Z";
  var path = mainPath.concat(pathX, space, pathY, pathEnd);

  var data = [
    {
      type: "scatter",
      x: [0],
      y: [0],
      marker: { size: 12, color: "850000" },
      showlegend: false,
      name: "Freq",
      text: level,
      hoverinfo: "text+name"
    },
    {
      values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
      rotation: 90,
      text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      textinfo: "text",
      textposition: "inside",
      marker: {
        colors: [
          "rgba(30, 99, 82, 0.89)",
          "rgba(0, 99, 255, 0.61)",
          "rgba(91, 166, 118, 0.52)",
          "rgba(232, 170, 255, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(48, 24, 112, 1)",
          "rgba(92, 255, 184, 1)",
          "rgba(197, 79, 255, 0.96)",
          "rgba(59, 184, 58, 0.6)",
          "rgba(255, 0, 113, 1)",
          "rgba(99, 107, 229, 0.57)",
          "color: rgba(46, 190, 186, 1)"
        ]
      },
      labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      hoverinfo: "label",
      hole: 0.5,
      type: "pie",
      showlegend: false
    }
  ];

  var layout = {
    shapes: [
      {
        type: "path",
        path: path,
        fillcolor: "850000",
        line: {
          color: "850000"
        }
      }
    ],
    title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
    height: 500,
    width: 500,
    xaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    }
  };

  var GAUGE = document.getElementById("gauge");
  Plotly.newPlot(GAUGE, data, layout);
}
