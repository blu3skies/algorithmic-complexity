function timer(methodToTest) {
  var start = new Date().getTime();
  methodToTest()
  var end = new Date().getTime();
  var time = end - start;
  return time
}

function findAverage(methodToTest) {
  var arrOfTimes = [];
  var i;
  for (i = 0; i < 50; i++) {
    arrOfTimes.push(timer(methodToTest))
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

