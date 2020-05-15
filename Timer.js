function timer() {
  var start = new Date().getTime();

  // code to test here
  var array = randomArray(50000) 
  var sum = array.reduce(function(a, b){
      a + b;
  }, 0);
  // 

  var end = new Date().getTime();
  var time = end - start;
  return time
}

function findAverage() {
  var arrOfTimes = [];
  var i;
  for (i = 0; i < 50; i++) {
    arrOfTimes.push(timer())
  }
  var sum = arrOfTimes.reduce((a, b) => b += a)
  return (sum / arrOfTimes.length)
}
