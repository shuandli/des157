document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

//variables
var shower = document.getElementById('shower');
var wash = document.getElementById('wash');
var toilet = document.getElementById('toilet');

//closing variables
var showerClose = document.getElementById('showerClose');
var washClose = document.getElementById('washClose');
var toiletClose = document.getElementById('toiletClose');

//navigation variables
var menu = document.getElementById('menu');

//events
//shower hover event listener
shower.addEventListener('mouseover', function() {
    shower.style.opacity = 1;
    shower.src = 'images/theShower.png';
});
//shower mouseout event listener
showerInfo.addEventListener('mouseout', function() {
    shower.style.opacity = .5;
    shower.src = 'images/theShower.png';
});
//shower click
shower.addEventListener('click', function() {
    showerInfo.style.opacity = 1;
});
//close info
showerClose.addEventListener('click', function() {
    showerInfo.style.opacity = 0;
});

//wash hover event listener
wash.addEventListener('mouseover', function() {
    wash.style.opacity = 1;
    wash.src = 'images/theBodywash.png';
});
//wash mouseout event listener
washInfo.addEventListener('mouseout', function() {
    wash.style.opacity = .5;
    wash.src = 'images/theBodywash.png';
});
//wash click
wash.addEventListener('click', function() {
    washInfo.style.opacity = 1;
});
//close info
washClose.addEventListener('click', function() {
    washInfo.style.opacity = 0;
});

//toilet hover event listener
toilet.addEventListener('mouseover', function() {
    toilet.style.opacity = 1;
    toilet.src = 'images/theToilet.png';
});
//toilet mouseout event listener
toiletInfo.addEventListener('mouseout', function() {
    toilet.style.opacity = .5;
    toilet.src = 'images/theToilet.png';
});
//toilet click
toilet.addEventListener('click', function() {
    toiletInfo.style.opacity = 1;
});
//close info
toiletClose.addEventListener('click', function() {
    toiletInfo.style.opacity = 0;
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
