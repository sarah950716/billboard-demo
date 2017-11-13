window.onload = () => {
  loadJson();
};

const promiseGenerator = (filename) => {
  return new Promise((resolve, reject) => {
    $.getJSON("data/"+filename, (data) => {
      console.log("data/"+filename, data);
      resolve(data);
    });
  }).catch((err) => {
    console.error(filename, err);
  })
};

const loadJson = () => {
  const linePromise = promiseGenerator('lineChart.json');
  const stepPromise = promiseGenerator('stepChart.json');
  const donutPromise = promiseGenerator('donutChart.json');
  const barPromise = promiseGenerator('barChart.json');
  const piePromise = promiseGenerator('pieChart.json');
  const stackedBarPromise = promiseGenerator('stackedBarChart.json');
  const rotatedAxisPromise = promiseGenerator('rotatedAxisChart.json');
  const combinationPromise = promiseGenerator('combinationChart.json');
  const stackedAreaPromise = promiseGenerator('stackedAreaChart.json');

  Promise.all([linePromise, stepPromise, donutPromise, barPromise,
    piePromise, stackedBarPromise, rotatedAxisPromise,
    combinationPromise, stackedAreaPromise]).then((data) => {
    makeChart(data);
  });
};

const makeChart = (data) => {
  const lineJson = data[0];
  const stepJson = data[1];
  const donutJson = data[2];
  const barJson = data[3];
  const pieJson = data[4];
  const stackedBarJson = data[5];
  const rotatedAxisJson = data[6];
  const combinationJson = data[7];
  const stackedAreaJson = data[8];


  const lineChart = bb.generate({
    bindto: "#LineChart",
    data: lineJson['data'],
    axis: lineJson['axis']
  });

  bb.generate({
    bindto: "#StepChart",
    data: stepJson['data'],
    axis: stepJson['axis']
  });

  const donutChart = bb.generate({
    bindto: "#DonutChart",
    data: donutJson['data'],
    donut: donutJson['donut']
  });

  bb.generate({
    bindto: "#BarChart",
    data: barJson['data'],
    axis: barJson['axis'],
    bar: barJson['bar']
  });

  const pieChart = bb.generate({
    bindto: "#PieChart",
    data: pieJson['data']
  });

  bb.generate({
    bindto: "#StackedBarChart",
    data: stackedBarJson['data'],
    axis: stackedBarJson['axis']
  });

  bb.generate({
    bindto: "#RotatedAxisChart",
    data: rotatedAxisJson['data'],
    axis: rotatedAxisJson['axis']
  });

  bb.generate({
    bindto: "#CombinationChart",
    data: combinationJson['data'],
    axis: combinationJson['axis']
  });

  const stackedAreaChart = bb.generate({
    bindto: "#StackedAreaChart",
    data: stackedAreaJson['data'],
    axis: stackedAreaJson['axis']
  });

  setTimeout(() => {
    lineChart.load({
      columns: [
        ['평균', 0.5, 0.8, 0.8, 0.8, 0.6, 0.7]
      ]
    });
  }, 1000);

  setTimeout(() => {
    donutChart.unload({
      ids: "제2외국어,컴퓨터"
    });
  }, 2500);

  setTimeout(() => {
    pieChart.load({
      columns: [
        ["31~60%", 26.9],
        ["61~80%", 23.1]
      ]
    });
  }, 2000);

  setTimeout(() => {
    stackedAreaChart.load({
      columns: [
        ["남성", 371720, 325496, 360522, 363160, 395421, 421211]
      ]
    });
  }, 2000);
};
