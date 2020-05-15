function timer(methodToTest) {
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

function createArrayAndAdd() {
  var array = randomArray(50000) 
  var sum = array.reduce(function(a, b){
      a + b;
  }, 0);
}

function codeToBeTested(arrSize) {
  var array = randomArray(arrSize) 
  array.pop()
}

