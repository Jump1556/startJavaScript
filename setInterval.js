//Create function countDown to print seconds, instead of 0 print Ring! Ring! 

function countDown(seconds) {
  var timer = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring! Ring!");
      clearInterval(timer);
    }
  }, 1000);
}