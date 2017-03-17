document.addEventListener('DOMContentLoaded', function() {
    console.log("reading");

//variables
var rack = document.getElementById('rack');
var sink = document.getElementById('sink');
var washer = document.getElementById('washer');
var containers = document.getElementById('containers');
var bottles = document.getElementById('bottles');

//closing variables
var rackClose = document.getElementById('rackClose');
var sinkClose = document.getElementById('sinkClose');
var washerClose = document.getElementById('washerClose');
var containersClose = document.getElementById('containersClose');
var bottlesClose = document.getElementById('bottlesClose');

//navigation variables
var menu = document.getElementById('menu');

//events
//rack hover event listener
rack.addEventListener('mouseover', function() {
    rack.style.opacity = 1;
    rack.src = 'images/theRack.png';
});
//rack mouseout event listener
rack.addEventListener('mouseout', function() {
    rack.style.opacity = .5;
    rack.src = 'images/theRack.png';
});
//rack click
rack.addEventListener('click', function() {
    rackInfo.style.opacity = 1;
});
//close info
rackClose.addEventListener('click', function() {
    rackInfo.style.opacity = 0;
});

//sink hover event listener
sink.addEventListener('mouseover', function() {
    sink.style.opacity = 1;
    sink.src = 'images/theSink.png';
});
//sink mouseout event listener
sink.addEventListener('mouseout', function() {
    sink.style.opacity = .5;
    sink.src = 'images/theSink.png';
});
//sink click
sink.addEventListener('click', function() {
    sinkInfo.style.opacity = 1;
});
//close info
sinkClose.addEventListener('click', function() {
    sinkInfo.style.opacity = 0;
});

//washer hover event listener
washer.addEventListener('mouseover', function() {
    washer.style.opacity = 1;
    washer.src = 'images/theWasher.png';
});
//washer mouseout event listener
washerInfo.addEventListener('mouseout', function() {
    washer.style.opacity = .5;
    washer.src = 'images/theWasher.png';
});
//wash click
washer.addEventListener('click', function() {
    washerInfo.style.opacity = 1;
});
//close info
washerClose.addEventListener('click', function() {
    washerInfo.style.opacity = 0;
});

//containers hover event listener
containers.addEventListener('mouseover', function() {
    containers.style.opacity = 1;
    containers.src = 'images/theContainers.png';
});
//containers mouseout event listener
containersInfo.addEventListener('mouseout', function() {
    containers.style.opacity = .5;
    containers.src = 'images/theContainers.png';
});
//containers click
containers.addEventListener('click', function() {
    containersInfo.style.opacity = 1;
});
//containers info
containersClose.addEventListener('click', function() {
    containersInfo.style.opacity = 0;
});

//bottles hover event listener
bottles.addEventListener('mouseover', function() {
    bottles.style.opacity = 1;
    bottles.src = 'images/theBottles.png';
});
//bottles mouseout event listener
bottlesInfo.addEventListener('mouseout', function() {
    bottles.style.opacity = .5;
    bottles.src = 'images/theBottles.png';
});
//bottles click
bottles.addEventListener('click', function() {
    bottlesInfo.style.opacity = 1;
});
//bottles info
bottlesClose.addEventListener('click', function() {
    bottlesInfo.style.opacity = 0;
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
