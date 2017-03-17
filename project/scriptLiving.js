document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

//variables
var fan = document.getElementById('fan');
var tv = document.getElementById('tv');
var plant = document.getElementById('plant');

//closing variables
var fanClose = document.getElementById('fanClose');
var tvClose = document.getElementById('tvClose');
var plantClose = document.getElementById('plantClose');

//navigation variables
var menu = document.getElementById('menu');

//events
//fan hover event listener
fan.addEventListener('mouseover', function() {
    fan.style.opacity = 1;
    fan.src = 'images/theFan.png';
});
//fan mouseout event listener
fan.addEventListener('mouseout', function() {
    fan.style.opacity = .5;
    fan.src = 'images/theFan.png';
});
//fan click
fan.addEventListener('click', function() {
    fanInfo.style.opacity = 1;
});
//close info
fanClose.addEventListener('click', function() {
    fanInfo.style.opacity = 0;
});

//tv hover event listener
tv.addEventListener('mouseover', function() {
    tv.style.opacity = 1;
    tv.src = 'images/theTV.png';
});
//tv mouseout event listener
tv.addEventListener('mouseout', function() {
    tv.style.opacity = .5;
    tv.src = 'images/theTV.png';
});
//tv click
tv.addEventListener('click', function() {
    tvInfo.style.opacity = 1;
});
//close info
tvClose.addEventListener('click', function() {
    tvInfo.style.opacity = 0;
});

//plant hover event listener
plant.addEventListener('mouseover', function() {
    plant.style.opacity = 1;
    plant.src = 'images/thePlant.png';
});
//plant mouseout event listener
plantInfo.addEventListener('mouseout', function() {
    plant.style.opacity = .5;
    plant.src = 'images/thePlant.png';
});
//wash click
plant.addEventListener('click', function() {
    plantInfo.style.opacity = 1;
});
//close info
plantClose.addEventListener('click', function() {
    plantInfo.style.opacity = 0;
});

//menu hover event listener
menu.addEventListener('mouseover', function() {
    menu.style.opacity = 1;
});
//menu mouseout event listener
menu.addEventListener('mouseout', function() {
    menu.style.opacity = .25;
});
});
