document.addEventListener('DOMContentLoaded', function() {
console.log("reading");
});

//variables
var bounce=document.getElementById('bounce');
var bounceText=document.getElementById('bounceText');

bounce.addEventListener('mouseover', function(){
  console.log('mouseover on bounce');

  function bounceText(){
    console.log('show text');
    bounceHover.style.opacity=1;
  };
});

bounce.addEventListener('mouseout', function(){
  console.log('mouseout on bounce');
  clearTimeout(tipTimer);
  bounceHover.style.opacity=0;
});
