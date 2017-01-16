//andrew li | design 157 | interactive banner for portal

function setup() {
	var myCanvas = createCanvas(800, 250);
	//parent the myCanvas variable to the html element titled “mySketch”
	myCanvas.parent('mySketch');
}

function draw() {
	background(0); //black

	line(mouseX,mouseY,mouseX,mouseY);
  stroke("#fffff"); //top lines
  line(100,50,mouseX,mouseY);
  line(200,50,mouseX,mouseY);
  line(300,50,mouseX,mouseY);
  line(400,50,mouseX,mouseY);
  line(500,50,mouseX,mouseY);
  line(600,50,mouseX,mouseY);
  line(700,50,mouseX,mouseY);

	//bottom lines
  line(100,250,mouseX,mouseY);
  line(200,250,mouseX,mouseY);
  line(300,250,mouseX,mouseY);
  line(400,250,mouseX,mouseY);
  line(500,250,mouseX,mouseY);
  line(600,250,mouseX,mouseY);
  line(700,250,mouseX,mouseY);

  stroke("#66ffff"); //left lines
  line(0,50,mouseX,mouseY);
  line(0,100,mouseX,mouseY);
  line(0,150,mouseX,mouseY);
  line(0,200,mouseX,mouseY);
  line(0,250,mouseX,mouseY);

	//right lines
  line(mouseX,mouseY,800,50);
  line(mouseX,mouseY,800,100);
  line(mouseX,mouseY,800,150);
  line(mouseX,mouseY,800,200);
  line(mouseX,mouseY,800,250);
}
