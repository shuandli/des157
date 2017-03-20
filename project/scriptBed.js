document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

    //variables
    var mattress = document.getElementById('mattress');
    var heater = document.getElementById('heater');
    var lamp = document.getElementById('lamp');
    var window = document.getElementById('window');

    //closing variables
    var mattressClose = document.getElementById('mattressClose');
    var heaterClose = document.getElementById('heaterClose');
    var lampClose = document.getElementById('lampClose');
    var windowClose = document.getElementById('windowClose');

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

    //mattress hover event listener
    mattress.addEventListener('mouseover', function() {
        mattress.style.opacity = 1;
        mattress.src = 'images/theMattress.png';
    });
    //mattress mouseout event listener
    mattress.addEventListener('mouseout', function() {
        mattress.style.opacity = .5;
        mattress.src = 'images/theMattress.png';
    });
    //mattress click
    mattress.addEventListener('click', function() {
        mattressInfo.style.opacity = 1;
    });
    //close info
    mattressClose.addEventListener('click', function() {
        mattressInfo.style.opacity = 0;
    });

    //heater hover event listener
    heater.addEventListener('mouseover', function() {
        heater.style.opacity = 1;
        heater.src = 'images/theHeater.png';
    });
    //heater mouseout event listener
    heater.addEventListener('mouseout', function() {
        heater.style.opacity = .5;
        heater.src = 'images/theHeater.png';
    });
    //heater click
    heater.addEventListener('click', function() {
        heaterInfo.style.opacity = 1;
    });
    //close info
    heaterClose.addEventListener('click', function() {
        heaterInfo.style.opacity = 0;
    });

        //lamp hover event listener
        lamp.addEventListener('mouseover', function() {
            lamp.style.opacity = 1;
            lamp.src = 'images/theLamp.png';
        });
        //lamp mouseout event listener
        lamp.addEventListener('mouseout', function() {
            lamp.style.opacity = .5;
            lamp.src = 'images/theLamp.png';
        });
        //lamp click
        lamp.addEventListener('click', function() {
            lampInfo.style.opacity = 1;
        });
        //close info
        lampClose.addEventListener('click', function() {
            lampInfo.style.opacity = 0;
        });

    //window hover event listener
    window.addEventListener('mouseover', function() {
        window.style.opacity = 1;
        window.src = 'images/theWindow.png';
    });
    //window mouseout event listener
    window.addEventListener('mouseout', function() {
        window.style.opacity = .5;
        window.src = 'images/theWindow.png';
    });
    //window click
    window.addEventListener('click', function() {
        windowInfo.style.opacity = 1;
    });
    //window info
    windowClose.addEventListener('click', function() {
        windowInfo.style.opacity = 0;
    });
});
