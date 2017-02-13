<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function(){
console.log("reading");

//variables
//button
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var pixel = document.getElementById('pixel');
var pixelInterval;
//elementary
var elementary=document.getElementById('elementary');
var elementarySelect=document.getElementById('elementarySelect');
//middle
var middle=document.getElementById('middle');
var middleSelect=document.getElementById('middleSelect');
//high
var high=document.getElementById('high');
var highSelect=document.getElementById('highSelect');
//college
var college=document.getElementById('college');
var collegeSelect=document.getElementById('collegeSelect');

var tipTimer;

//timer events
//elementary
elementary.addEventListener('mouseover', function(){
  console.log('mouseover on elementary');
  tipTimer=setTimeout(showelementarySelect,500);

  function showelementarySelect(){
    console.log('show img');
    elementarySelect.style.opacity=1;
    elementarySelect.style.transition='all .5s';
  };
});

elementary.addEventListener('mouseout', function(){
  console.log('mouseout on elementary');
  clearTimeout(tipTimer);
  elementarySelect.style.opacity=0;
});

//middle
middle.addEventListener('mouseover', function(){
  console.log('mouseover on middle');
  tipTimer=setTimeout(showmiddleSelect,500);

  function showmiddleSelect(){
    console.log('show img');
    middleSelect.style.opacity=1;
    middleSelect.style.transition='all .5s';
  };
});
middle.addEventListener('mouseout', function(){
  console.log('mouseout on middle');
  clearTimeout(tipTimer);
  middleSelect.style.opacity=0;
});

//high
high.addEventListener('mouseover', function(){
  console.log('mouseover on middle');
  tipTimer=setTimeout(showhighSelect,500);

  function showhighSelect(){
    console.log('show img');
    highSelect.style.opacity=1;
    highSelect.style.transition='all .5s';
  };
});
high.addEventListener('mouseout', function(){
  console.log('mouseout on high');
  clearTimeout(tipTimer);
  highSelect.style.opacity=0;
});

//college
college.addEventListener('mouseover', function(){
  console.log('mouseover on college');
  tipTimer=setTimeout(showcollegeSelect,500);

  function showcollegeSelect(){
    console.log('show img');
    collegeSelect.style.opacity=1;
    collegeSelect.style.transition='all .5s';
  };
});
college.addEventListener('mouseout', function(){
  console.log('mouseout on college');
  clearTimeout(tipTimer);
  collegeSelect.style.opacity=0;
});

//button events
start.addEventListener ('click', function(){
  pixelInterval = setInterval(moveDiv, 100);
});

stop.addEventListener ('click', function(){
 clearInterval(pixelInterval);
});


function moveDiv(){

  // get the innerWidth and innerHeight of window
  // body has overflow:hidden so that scroll bars
  // don't appear if pixel gets close to the edge
  var w = window.innerWidth;
  var h = window.innerHeight;
  //console.log ('w: ' + w + ', h: ' + h);

  var newLeft = (Math.floor(Math.random() * w)) + 'px';
  var newTop = (Math.floor(Math.random() * h)) + 'px';
  //console.log ('newLeft: ' + newLeft);

  pixel.style.left = newLeft;
  pixel.style.top = newTop;
}
});
=======
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
>>>>>>> origin/gh-pages
