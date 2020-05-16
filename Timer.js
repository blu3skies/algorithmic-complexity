function timer(methodToTest, arrSize) {
  var start = new Date().getTime();
  methodToTest(arrSize)
  var end = new Date().getTime();
  var time = end - start;
  return time
}

function findAverage(methodToTest, arrSize) {
  var arrOfTimes = [];
  var i;
  for (i = 0; i < 50; i++) {
    arrOfTimes.push(timer(methodToTest, arrSize))
  }
  var sum = arrOfTimes.reduce((a, b) => b += a)
  return (sum / arrOfTimes.length)
}

function results(methodToTest) {
  var arrOfResults = []
  var start = 5000
  var i;
  for (i = start; i < 105000; i += 5000) {
    arrOfResults.push(findAverage(methodToTest, i))
  }
  return arrOfResults
}
