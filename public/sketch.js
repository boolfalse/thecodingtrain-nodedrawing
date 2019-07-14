
var socket;

function setup() {
    socket = io.connect('http://localhost:3000');

    createCanvas(600, 400);
    background(51);
}

function draw() {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}
