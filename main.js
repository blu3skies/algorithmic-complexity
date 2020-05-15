const CHART = document.getElementById("myChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: 'line',
  data:  {
    labels: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
    datasets: [{ 
      data: [0.52, 0.8, 1.14, 1.52, 1.9, 2.28, 2.72, 3.08, 3.48, 3.82, 4.44, 4.7, 5.02, 5.38, 5.84, 6.1, 6.48, 6.9, 7.22],
      label: ".pop",
      borderColor: "#3e95cd",
      fill: false
    }, { 
      data: [0.52, 1.16, 1.4, 1.88, 2.32, 2.78, 3.26, 3.68, 4.14, 4.7, 5.14, 5.6, 6.18, 6.72, 7.08, 7.56, 8, 8.54, 9.04],
      label: ".sum",
      borderColor: "#8e5ea2",
      fill: false
    } , { 
      data: [0.74, 1.3, 1.94, 2.54, 3.14, 3.84, 4.54, 5.12, 5.78, 6.42, 7.02, 7.74, 8.3, 9, 9.62, 10.2, 10.92, 11.48, 12.28],
      label: ".reverse",
      borderColor: "#3cba9f",
      fill: false
    }]
  }
})