document.addEventListener('DOMContentLoaded', function() {
console.log("reading");
});

//variables
var bounce=document.getElementById('bounce');
var bounceHover=document.getElementById('bounceHover');

bounce.addEventListener('mouseover', function(){
  console.log('mouseover on bounce');
  

  function showbounceHover(){
    console.log('show text');
    bounceHover.style.opacity=1;
    bounceHover.style.transition='all .5s';
  };
});

bounce.addEventListener('mouseout', function(){
  console.log('mouseout on bounce');
  clearTimeout(tipTimer);
  bounceHover.style.opacity=0;
});
