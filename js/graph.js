var chart1 = bb.generate({
  bindto: "#StepChart",
  data: {
    columns: [
      ["data1", 30, 200, 100, 170, 150, 250],
      ["data2", 130, 100, 140, 35, 110, 50]
    ],
    types: {
      "data1": "area-step",
      "data2": "area-step"
    },
    "colors": {
      "data1": "#9137D0",
      "data2": "#3376D0"
    },
    "labels": true
  }
});

var chart2 = bb.generate({
  bindto: "#LineChart",
  data: {
    columns: [
      ["data1", 30, 200, 100, 170, 150, 250],
      ["data2", 130, 100, 140, 35, 110, 50]
    ],
    "colors": {
      "data1": "#C54460",
      "data2": "#A4C03C"
    },
    "labels": true
  }
});

var chart3 = bb.generate({
  "data": {
    "columns": [
      ["data1", 30],
      ["data2", 120],
      ["data3", 40],
      ["data4", 60],
      ["data5", 150]
    ],
    "type": "donut",
    "colors": {
      "data1": "#A4C03C",
      "data2": "#C54460",
      "data3": "#EFA351",
      "data4": "#377DD3",
      "data5": "#8E38D0"
    }
  },
  "donut": {
    "title": "Iris Petal Width"
  },
  "bindto": "#DonutChart"
});

bb.generate({
  "data": {
    "columns": [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50],
      ["data3", 40, 120, 110, 520, 10, 20]
    ],
    "colors": {
      "data1": "#A4C03C",
      "data2": "#EFA351",
      "data3": "#8E38D0"
    },
    "type": "bar"
  },
  "bar": {
    "width": {
      "ratio": 0.5
    }
  },
  "bindto": "#BarChart"
});

var chart5 = bb.generate({
  "data": {
    "xs": {
      "data1": "data1_x",
      "data2": "data2_x"
    },
    "columns": [
      ["data1_x", 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3],
      ["data2_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8],
      ["data1", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
      ["data2", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
    ],
    "type": "scatter",
    "colors": {
      "data1": "#8E38D0",
      "data2": "#C54460",
      "data3": "#377DD3"
    }
  },
  "axis": {
    "x": {
      "label": "Sepal.Width",
      "tick": {
        "fit": false
      }
    },
    "y": {
      "label": "Petal.Width"
    }
  },
  "bindto": "#ScatterPlot"
});

var chart = bb.generate({
  "data": {
    "columns": [
      ["data1", -30, 200, 200, 400, -150, 250],
      ["data2", 130, 100, -100, 200, -150, 50],
      ["data3", -230, 200, 200, -300, 250, 250],
      ['data4', 100, -50, 150, 200, -300, -100]
    ],
    "type": "bar",
    "colors": {
      "data1": "#A4C03C",
      "data2": "#EFA351",
      "data3": "#C54460",
      "data4": "#8E38D0"
    },
    "groups": [
      [
        "data1",
        "data2",
        "data3",
        "data4"
      ]
    ],
    "labels": true
  },
  "grid": {
    "y": {
      "lines": [
        {
          "value": 0
        }
      ]
    }
  },
  "bindto": "#StackedBarChart"
});

var chart = bb.generate({
  "data": {
    "columns": [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25]
    ],
    "types": {
      "data1": "bar"
    },
    "colors": {
      "data1": "#C54460",
      "data2": "#EFA351"
    },
    "labels": true
  },
  "axis": {
    "rotated": true
  },
  "bindto": "#RotatedAxis"
});

var chart = bb.generate({
  "data": {
    "columns": [
      ["data", 91.4]
    ],
    "type": "gauge",
    "onclick": function (d, i) { console.log("onclick", d, i); },
    "onover": function (d, i) { console.log("onover", d, i); },
    "onout": function (d, i) { console.log("onout", d, i); }
  },
  "gauge": {
    "fullCircle": true
  },
  "color": {
    "pattern": [
      "#C54460",
      "#EFA351",
      "#377DD3",
      "#A4C03C"
    ],
    "threshold": {
      "values": [
        30,
        60,
        90,
        100
      ]
    }
  },
  "size": {
    "height": 180
  },
  "bindto": "#GaugeChart"
});

bb.generate({
  "data": {
    "columns": [
      ["data1", 30, 20, 50, 40, 60, 50],
      ["data2", 200, 130, 90, 240, 130, 220],
      ["data3", 300, 200, 160, 400, 250, 250],
      ["data4", 200, 130, 90, 240, 130, 220],
      ["data5", 130, 120, 150, 140, 160, 150],
      ["data6", 90, 70, 20, 50, 60, 120]
    ],
    "type": "bar",
    "colors": {
      "data1": "#A4C03C",
      "data2": "#EFA351",
      "data3": "#C54460",
      "data4": "#377DD3",
      "data5": "#8E38D0",
      "data6": "#FFFF7F"
    },
    "types": {
      "data3": "spline",
      "data4": "line",
      "data6": "area",
      "data1": "bar",
      "data2": "bar",
      "data5": "bar"
    },
    "groups": [
      [
        "data1",
        "data2"
      ]
    ]
  },
  "bindto": "#CombinationChart"
});

bb.generate({
  "data": {
    "columns": [
      ["data1", 300, 350, 300, 0, 0, 120],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    "types": {
      "data1": "area-spline",
      "data2": "area-spline"
    },
    "groups": [
      [
        "data1",
        "data2"
      ]
    ],
    "colors": {
      "data1": "#377DD3",
      "data2": "#EFA351"
    }
  },
  "bindto": "#StackedAreaChart"
});

setTimeout(function () {
  chart.load({
    columns: [['data', 10]]
  });
}, 1000);

setTimeout(function () {
  chart.load({
    columns: [['data', 50]]
  });
}, 2000);

setTimeout(function () {
  chart.load({
    columns: [['data', 70]]
  });
}, 3000);

setTimeout(function () {
  chart.load({
    columns: [['data', 0]]
  });
}, 4000);

setTimeout(function () {
  chart.load({
    columns: [['data', 100]]
  });
}, 5000);

setTimeout(function () {
  chart3.unload({
    ids: 'data5'
  });
}, 2500);

setTimeout(function () {
  chart2.load({
    columns: [
      ['data1', 230, 190, 300, 500, 300, 400]
    ]
  });
}, 1000);

setTimeout(function () {
  chart5.load({
    xs: {
      data3: 'data3_x'
    },
    columns: [
      ["data3_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
      ["data3", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
    ]
  });
}, 1000);

setTimeout(function () {
  chart5.unload({
    ids: 'setosa'
  });
}, 2000);

setTimeout(function () {
  chart5.load({
    columns: [
      ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
    ]
  });
}, 3000);