let altura
let focalPoint, focalPoint2, centro, pontoB, pontoB2, pontoA
let larguraElipse, c, h ,k
function setup() {
  createCanvas(700, 700);
  
  h = height / 2
  k = width / 2
  
  altura = height / 3
  
  focalPoint = createVector(h, k)
  focalPoint2 = createVector(h, k)
}

function mouseDragged(event) {
  focalPoint.x = mouseX
  focalPoint2.x = width - mouseX
}

function draw() {
  background(252, 252, 252);

  let focalPointCor = color(239, 71, 111);
  let pontoACor = color(38, 84, 124);
  let pontoBCor = color(255, 209, 102)
  let centroCor = color(28, 2, 33)
      
  setLineDash([])
  drawEllipse()
   
  setLineDash([10, 5]);
  drawLine(focalPoint, centro)
  drawLine(focalPoint2, centro)
  
  drawLine(pontoB, focalPoint)
  drawLine(pontoB, focalPoint2)
  drawLine(pontoB, pontoB2)
  drawLine(pontoB2, focalPoint)
  drawLine(pontoB2, focalPoint2)
  
  drawLine(pontoA, focalPoint)
  drawLine(pontoA2, focalPoint2)
  setLineDash([])
  
  drawDot(focalPoint, focalPointCor)
  
  drawDot(focalPoint2, focalPointCor)
  
  drawDot(pontoA, pontoACor)
  drawDot(pontoA2, pontoACor)
  
  drawDot(pontoB, pontoBCor)
  drawDot(pontoB2, pontoBCor)
  
  drawDot(centro, centroCor)
}


function drawEllipse() {
  centro = createVector(h, k)
  
  c = focalPoint.dist(centro)

  pontoB = createVector(h, altura)
  pontoB.y = centro.y - centro.dist(pontoB)
  
  pontoB2 = createVector(h, altura)
  pontoB2.y = centro.y + centro.dist(pontoB2)
  
  pontoA = createVector(0,k)
  pontoA.x = sqrt(pow(pontoB.y, 2) + pow(c, 2)) * 2
  
  pontoA2 = createVector(width - pontoA.x, k)
  
  if(pontoA.x > width) {
    pontoA.x = width
    pontoA2.x = 0
  }
  
  larguraElipse = pontoA.dist(centro) * 2
  alturaElipse = pontoB.y
  
  noFill();
  stroke(20);
  ellipse(h, k, larguraElipse, alturaElipse)
}

function drawLine(v1, v2) {
  stroke(28, 2, 33);
  strokeWeight(2);
  line(v1.x, v1.y, v2.x, v2.y)
}

function drawDot(v, cor) {
  fill(cor);
  noStroke();
  circle(v.x, v.y, 15)
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
