var degRight = 0;
var degLeft = 90;
var charge = 0;
var speed = 0;
var speadR = 0; 

$(".downB").click(function(){
  $(".downB").css("display", "none");
  $(".light").addClass("charging-light");
  timeoutCharge();
  timeoutLeft();
  timeoutRight();
});

function timeoutRight() {
  if(charge<100){
  setTimeout(function () {
      degRight = degRight + 1;
      $(".right").css("rotate", degRight + "deg");
      timeoutRight();
  }, 10);
}
else{
console.log("stop");
}
}


function timeoutLeft() {
  if(charge<100){
  setTimeout(function () {
      degLeft = degLeft + 1;
      $(".left").css("rotate", degLeft + "deg");
      timeoutLeft();
  }, 10);
}
else{
  console.log("stop");
}
}

function timeoutCharge() {
  if(charge<=99.9){
    setTimeout(function () {
      charge = charge + randomSpeed(0.5, 0.1);
      $(".charging-bar").css("width", charge + "%");
      var chargePercent = Math.floor(charge*10)/10;
      console.log( chargePercent + "%");
      $(".percent").text(chargePercent + "%");
      timeoutCharge();
  }, 10);

  if(charge > speadR){
    mbps = Math.floor(speed*10000)/10;
    $(".speed").text(mbps + " Mbps");
    speadR = speadR + 0.5;
  }

  }
  else{
      charge = 100; 
    $(".charging-bar").css("width",  charge + "%");
    $(".percent").text(charge + "%");
    $(".charging-bar").css("border-radius", 1 + "ch");
    $(".speed").text(0 + " Mbps");
    $(".light").removeClass("charging-light");
    const downloadLink = document.createElement('a');
    downloadLink.href = "donut.png";
    downloadLink.download = "donut.png";
    document.body.appendChild(downloadLink); 
    downloadLink.click();

    setTimeout(function () {
      charge = 0;
      speadR = 0;
      $(".charging-bar").css("width",  charge + "%");
      $(".percent").text("");
      $(".charging-bar").css("border-radius", "1ch 0 0 1ch");
      $(".speed").text("");
      $(".downB").css("display", "flex");
      console.log(charge + "%");
    },500);
  }
}

function randomSpeed(minSpeed, variation){
  var variatSpeed = (Math.random())*variation; 
  speed = minSpeed + variatSpeed;
  return speed;
}