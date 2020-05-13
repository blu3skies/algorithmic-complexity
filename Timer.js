function codeTimer() {
  var start = new Date().getTime();
  // code to be timed
  var end = new Date().getTime();
  var time = start - end;
  console.log("exercusion time: " + time + " milliseconds")
}