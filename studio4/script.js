console.log ("reading");

//break components down into variables

//elementary school
var elementary=document.getElementById('elementary');
var elementaryTip=document.getElementById('elementaryTip');
//middle school
var middle=document.getElementById('middle');
var middleTip=document.getElementById('middleTip');
//high school
var high=document.getElementById('high');
var highTip=document.getElementById('highTip');
//set interval button
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var meme=document.getElementById('meme');
var memeInterval;

var tipTimer;

//add events

//elementary school
elementary.addEventListener('mouseover', function(){
  console.log('mouseover on ')
});

//button interval
start.addEventListener('click', function(){
  memeInterval=setInterval(moveDiv, 100);
});

stop.addEventListener('click', function(){
  clearInterval(memeInterval);
});

function moveDiv(){
  var w=window.innerWidth;
  var h=window.innerHeight;

  var newLeft=(Math.floor(Math.random()*w)) + 'px';
  var newTop=(Math.floor(Math.random()*h)) + 'px';
}
