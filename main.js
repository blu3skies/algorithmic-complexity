const CHART = document.getElementById("myChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: 'line',
  data:  {
    labels: [5000, 1000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000],
    datasets: [{ 
      data: [86,114,106,106,107,111,133,221,783,2478],
      label: "example",
      borderColor: "#3e95cd",
      fill: false
    }]
  }
})