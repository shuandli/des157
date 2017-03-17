document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

//variables

//index
var kitchenButton = document.getElementById('kitchenButton');

//bathroom
var shower = document.getElementById('shower');
var wash = document.getElementById('wash');
var toilet = document.getElementById('toilet');

//closing variables

//bathroom
var showerClose = document.getElementById('showerClose');
var washClose = document.getElementById('washClose');
var toiletClose = document.getElementById('toiletClose');

//navigation variables
var menu = document.getElementById('menu');

//events
//kitchenButton event
kitchenButton.addEventListener('mouseover', function() {
  kitchenButton.style.opacity = 1;
  kitchenButton.src = 'images/kitchenButton.png';
});

kitchenButton.addEventListener('mouseout', function() {
  kitchenButton.style.opacity = 0.5;
  kitchenButton.src = 'images/kitchenButton.png';
});

//bathButton event
bathButton.addEventListener('mouseover', function() {
  bathButton.style.opacity = 1;
  bathButton.src = 'images/bathButton.png';
});

bathButton.addEventListener('mouseout', function() {
  bathButton.style.opacity = 0.5;
  bathButton.src = 'images/bathButton.png';
});

//livingButton event
livingButton.addEventListener('mouseover', function() {
  livingButton.style.opacity = 1;
  livingButton.src = 'images/livingButton.png';
});

livingButton.addEventListener('mouseout', function() {
  livingButton.style.opacity = 0.5;
  livingButton.src = 'images/livingButton.png';
});

//diningButton event
diningButton.addEventListener('mouseover', function() {
  diningButton.style.opacity = 1;
  diningButton.src = 'images/diningButton.png';
});

diningButton.addEventListener('mouseout', function() {
  diningButton.style.opacity = 0.5;
  diningButton.src = 'images/diningButton.png';
});

//bedButton event
bedButton.addEventListener('mouseover', function() {
  bedButton.style.opacity = 1;
  bedButton.src = 'images/bedButton.png';
});

bedButton.addEventListener('mouseout', function() {
  bedButton.style.opacity = 0.5;
  bedButton.src = 'images/bedButton.png';
});

//bathoom event
// shower hover event listener
shower.addEventListener('mouseover', function() {
    shower.style.opacity = 1;
    shower.src = 'images/theShower.png';
});

showerInfo.addEventListener('mouseout', function() {
    shower.style.opacity = .5;
    shower.src = 'images/theShower.png';
});

//shower click
shower.addEventListener('click', function() {
    showerInfo.style.opacity = 1;
});

showerClose.addEventListener('click', function() {
    showerInfo.style.opacity = 0;
});

});
