let focalPoint, focalPoint2
function setup() {
  createCanvas(600, 600);
  
  h = height / 2
  k = width / 2
  
  focalPoint = createVector(h, k)
  focalPoint2 = createVector(h, k)
}

function mouseDragged() {
  focalPoint.x = mouseX
  focalPoint2.x = width - mouseX
}

function draw() {
  background(220);

  let color1 = color(255, 204, 0);
  let color2 = color(0, 204, 0);
  
  centro = createVector(h, k)
  
  c = focalPoint.dist(centro)
  
  altura = 400
  
  pontoB = createVector(h, altura)
  
  pontoB.y = centro.y - centro.dist(pontoB)
  
  pontoA = createVector(0,k)
  
  pontoA.x = sqrt(pow(pontoB.y, 2) + pow(c, 2)) * 2
  
  tamElipse = pontoA.dist(centro) * 2
  
  fill(color2);
  noStroke();
  circle(focalPoint.x, focalPoint.y, 10)
  
  fill(color2);
  noStroke();
  circle(focalPoint2.x, focalPoint2.y, 10)
  
  noFill();
  stroke(2);
  ellipse(h, k, tamElipse, pontoB.y)
}

function drawLine(v1, v2) {
  stroke(1)
  line(v1.x, v1.y, v2.x, v2.y)
}