document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

    //variables
    var food = document.getElementById('food');
    var chair = document.getElementById('chair');

    //closing variables
    var foodClose = document.getElementById('foodClose');
    var chairClose = document.getElementById('chairClose');

    //navigation variables
    var menu = document.getElementById('menu');

    //events

    //menu hover event listener
    menu.addEventListener('mouseover', function() {
        menu.style.opacity = 1;
    });
    //menu mouseout event listener
    menu.addEventListener('mouseout', function() {
        menu.style.opacity = .25;
    });

    //food hover event listener
    food.addEventListener('mouseover', function() {
        food.style.opacity = 1;
        food.src = 'images/theFood.png';
    });
    //food mouseout event listener
    food.addEventListener('mouseout', function() {
        food.style.opacity = .5;
        food.src = 'images/theFood.png';
    });
    //food click
    food.addEventListener('click', function() {
        foodInfo.style.opacity = 1;
    });
    //close info
    foodClose.addEventListener('click', function() {
        foodInfo.style.opacity = 0;
    });
});
