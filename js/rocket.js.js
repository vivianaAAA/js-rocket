var timer = null;
var countDownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+
  state;
   clearInterval(timer);
   countDownNumber = 10;
   document.getElementById('countDown').innerHTML = countDownNumber;

   // countDown
  if (state == 2) {
    timer = setInterval(function(){
       countDownNumber = countDownNumber -1;
      document.getElementById('countDown').innerHTML = countDownNumber;
    
    if (countDownNumber <= 0) {
      changeState(3);
    };
    }, 900);
  } else if (state == 3) {
    var success = setTimeout(function ()
    {
          var randomNumber = Math.round(Math.random()*10);

          console.log('randomNumber:', randomNumber)

            // success
          if (randomNumber > 9) {
            changeState(4);
          } else {
            changeState(5); // oh noo
          }
    }, 2000);
  };

}