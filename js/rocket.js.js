var timer = null;
var countDownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+
  state;

  if (state == 2) {
    timer = setInterval(function(){
      document.getElementById('countDown').innerHTML = countDownNumber;
    countDownNumber = 9;
    }, 1000);
  };

}