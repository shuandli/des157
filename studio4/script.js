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
  console.log('mouseover on elementary school');
  tipTimer=setTimeout(showelementarySelect,500);

  function showelementarySelect(){
    console.log('show msg');
    elementarySelect.style.opacity=1;
    elementarySelect.style.transition='all .5s';
  };
});

elementary.addEventListener('mouseout', function(){
  console.log('mouseout on middle school');
  clearTimeout(tipTimer);
  elementarySelect.style.opacity=0;
});

//middle
middle.addEventListener('mouseover', function(){
  console.log('mouseover on middle school');
  tipTimer=setTimeout(showmiddleSelect,500);

  function showmiddleSelect(){
    console.log('show msg');
    middleSelect.style.opacity=1;
    middleSelect.style.transition='all .5s';
  };
});
middle.addEventListener('mouseout', function(){
  console.log('mouseout on high school');
  clearTimeout(tipTimer);
  middleSelect.style.opacity=0;
});

//high
high.addEventListener('mouseover', function(){
  console.log('mouseover on middle school');
  tipTimer=setTimeout(showhighSelect,500);

  function showhighSelect(){
    console.log('show msg');
    highSelect.style.opacity=1;
    highSelect.style.transition='all .5s';
  };
});
high.addEventListener('mouseout', function(){
  console.log('mouseout on college');
  clearTimeout(tipTimer);
  highSelect.style.opacity=0;
});

//college
college.addEventListener('mouseover', function(){
  console.log('mouseover on college');
  tipTimer=setTimeout(showcollegeSelect,500);

  function showcollegeSelect(){
    console.log('show msg');
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

  var w = window.innerWidth;
  var h = window.innerHeight;

  //random movement
  var newLeft = (Math.floor(Math.random() * w)) + 'px';
  var newTop = (Math.floor(Math.random() * h)) + 'px';

  pixel.style.left = newLeft;
  pixel.style.top = newTop;
}
});
