var posx = 0;
var posy = 0;
var posz = 0;

var time = 0;

var speed = 5;

var rot = 0;
var bonusrot = 0;

var rank = 0;

var light1 = 100;
var light2 = 0;

function preload(){
	floor = loadImage("3D sprites/floor.png");
	pine = loadImage("3D sprites/pine.png");
	trunk = loadImage("3D sprites/trunk.png");
	shadow = loadImage("3D sprites/shadow.png");
	day = loadImage("3D sprites/day.jpg");
	night = loadImage("3D sprites/night.png");
	bonus = loadImage("3D sprites/bonus.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvasadapt();
  cam = createCamera();
  cam.setPosition(0, -200, 1056);
  oldmousex = mouseX;
  oldmousey = mouseY;
  outside = night;
}

//adaptive resizing
window.addEventListener('resize', canvasadapt, false);
function canvasadapt(){
	canvas.elt.style.width = "100vw";
	canvas.elt.style.height = "100vh";
}

function draw() {
//background
 background(light1/4+light2/3,light1/4+light2/2,light1/4+light2);

//light
specularMaterial(255);
directionalLight(light1, light1, light1*2, 0, 1000, -1000);
ambientLight(light2, light2, light2);
pointLight(255, 255, 255, 0, 5000, 100);

	if (keyDown('a')) {
		light1 = 100;
		light2 = 0;
		outside = night;

	}
	if (keyDown('e')) {
		light1 = 0;
		light2 = 255;
		outside = day;
	}

//password
	if (keyDown('p') && rank == 0) {
		rank = 1;
	}
	if (keyDown('l') && rank == 1) {
		rank = 2;
	}
	if (keyDown('o') && rank == 2) {
		rank = 3;
	}
	if (keyDown('u') && rank == 3) {
		rank = 4;
	}
	if (keyDown('c') && rank == 4) {
		rank = 5;
	}
	if (keyDown('v') && rank == 5) {
		rank = 6;
	}
	if (keyDown('i') && rank == 6) {
		rank = 7;
	}
	if (keyDown('l') && rank == 7) {
		rank = 8;
	}
	if (keyDown('l') && rank == 8) {
		rank = 9;
	}
	if (keyDown('e') && rank == 9) {
		rank = 10;
	}
	if (keyDown('p') && rank == 10) {
		floor = loadImage("3D sprites/floor.png");
		pine = loadImage("3D sprites/pine.png");
		trunk = loadImage("3D sprites/trunk.png");
		shadow = loadImage("3D sprites/shadow.png");
		bonus = loadImage("3D sprites/bonus.png");
		rank = 0;
	}

//bonus visualization
if (rank == 10){
	floor = bonus;
	pine = bonus;
	trunk = bonus;
	shadow = bonus;
	bonus = bonus;
	texture(bonus);
	bonusrot = rot;
	background(255, 255, 0);
	rotateY(bonusrot);
	sphere(3000);
	rotateY(-bonusrot);
}

//camera view
if (time/2 == Math.floor(time/2)){
	oldmousex = mouseX;
  	oldmousey = mouseY;
}
time += 1;

if (mouseIsPressed){
 	cam.pan(((oldmousex - mouseX))/200);
 	cam.tilt(((mouseY - oldmousey))/100);
}

texture(outside);
sphere(3000);

//floor
push();
rotateX(Math.PI/2);
texture(floor);
plane(1920, 1056);
translate(0, 0, 75);
rotateX(-Math.PI/2);

//trees
translate(-1920/2+96/2, 0, -528+96/2);
xrow();
translate(-1920, 0, 1056-96);
xrow();
translate(-1920, 0, -1056+96*2);
zrow();
translate(1920-96, 0, -1056+96*2);
zrow();
pop();

//bonus trees
	push();
	translate(-96*1.5, -75, -96);
	tree();
	pop();
	push();
	translate(96*1.5, -75, -96);
	tree();
	pop();
	push();
	translate(-96*1.5, -75, 96);
	tree();
	pop();
	push();
	translate(96*1.5, -75, 96);
	tree();
	pop();

//bonus
translate(0, 15, 0);
texture(bonus);
rotateY(rot);
sphere(15);
rot+=1;

//camera control
	if (keyDown(' ')) {
		speed = 15;
	} else {
		speed = 5;
	}

	if (keyDown('z')) {
		cam.move(posx, 0, posz);
		posz = -speed*1.5;
	}
	if (keyDown('q')) {
		cam.move(posx, 0, posz);
		posx = -speed;
	}
	if (keyDown('s')) {
		cam.move(posx, 0, posz);
		posz = speed*1.5;
	}
	if (keyDown('d')) {
		cam.move(posx, 0, posz);
		posx = speed;
	}
}

//tree row on x
function xrow(){
	for (var row = 0; row < 20; row++){
		if (row != 9 && row != 10){
			tree();
			translate(96, -74, 0);
		} else {
			translate(96, 0, 0);
		}
	}
}

//tree row on z
function zrow(){
	for (var row = 0; row < 9; row++){
		if (row != 4){
			tree();
			translate(0, -74, 96);
		} else {
			translate(0, 0, 96);
		}
	}
}

function tree(){
	rotateY(bonusrot);
	rotateZ(-Math.PI);
	texture(pine);
	cone(48, 100); 
	translate(0,-62.5, 0);
	rotateZ(Math.PI);
	texture(trunk);
	cylinder(15, 25);
	translate(0, 11.5, 0);
	rotateX(Math.PI/2);
	texture(shadow);
	plane(96, 96);
	rotateX(-Math.PI/2);
	rotateY(-bonusrot);
}