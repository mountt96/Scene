// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

// Animation Varibles
let cloud1X = 45;
let cloud2X = 175;
let cloud3X = 300;

let sunWidth = 50;

let birdMove = 45;
let birdX1 = 120;
let birdY1 = 200;

let birdX2 = 70;
let birdY2 = 150;

// Block variables
let gVal = 100;
let bVal = 200;

// line 1
let lineY = 100;
let lineYSpeed = 1;

let lineX = 270;
let lineXSpeed = 1;
// line2
let lineX1 = 245;
let lineY1 = 200;

let lineX2 = 140;
let lineY2top = 200;
let lineY2down = 230;

//line 3
let lineX3 = 235;
let lineY3top = 200;
let lineY3down = 216;
requestAnimationFrame(draw);
function draw() {
  // Sky
  ctx.fillStyle = `rgb(70,${gVal},${bVal})`;
  ctx.fillRect(0, 0, 400, 500);

  // Block color change
  gVal += 0.5; // 0 > 255
  if (gVal == 100) {
    gVal = 100;
  }

  bVal += 0.5; // 255 > 0
  if (bVal == 100) {
    bVal = 100;
  }

  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, 50, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1X, 30, 100, 65);
  ctx.drawImage(cloud, cloud2X, 1, 100, 65);
  ctx.drawImage(cloud, cloud3X, 25, 100, 65);

  //body falling animation
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(lineX2, lineY2top);
  ctx.lineTo(lineX2, lineY2down);
  ctx.stroke();

  //make first line down
  lineY2top -= 4;
  lineY2down -= 4;
  lineY -= 4;

  // line3
  lineY3down -= 4;
  lineY3top -= 4;
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(lineX, lineY);
  ctx.lineTo(lineX, lineY1);
  ctx.stroke();
  lineY1 -= 10;
  //line2
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(lineX3, lineY3top);
  ctx.lineTo(lineX3, lineY3down);
  ctx.stroke();

  //  resetting y values
  if (lineY <= 0) {
    lineY = 90;
  }
  if (lineY3down <= 0) {
    lineY3down = 40;
    lineY3top = 140;
  }
  if (lineY2top <= 0) {
    lineY2top = 40;
    lineY2down = 100;
  }
  //legR
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.lineTo(275, 220);
  ctx.stroke();

  // legL
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.lineTo(245, 240);
  ctx.stroke();

  //body
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.lineTo(225, 145);
  ctx.stroke();

  //head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(215, 130, 20, 0, 2 * Math.PI);
  ctx.stroke();

  //armL
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(235, 170);
  ctx.lineTo(270, 150);
  ctx.stroke();

  //armR
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(235, 170);
  ctx.lineTo(195, 190);
  ctx.stroke();

  //birds
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(170, 100, 20, 0, Math.PI, true);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(130, 100, 20, 0, Math.PI, true);
  ctx.stroke();

  //small bird
  drawsmallBird(birdX1, birdY1);

  //bird
  drawthinBird(birdX2, birdY2);
  // Animation
  cloud1X = cloud1X + 0.2;
  cloud2X = cloud2X + 0.3;
  cloud3X = cloud3X - 0.4;

  //sun animation
  sunWidth += 1;
  if (sunWidth >= 39) {
    sunWidth = 27;
  }

  // Cloud reapperas on the left side
  if (cloud1X >= 400) {
    cloud1X = -85;
  } else if (cloud2X >= 400) {
    cloud2X = -85;
  } else if (cloud3X <= 0) {
    cloud3X = 485;
  }

  birdX1 = birdX1 + 0.5;
  birdX2 = birdX2 + 0.5;

  if (birdX1 >= 120) {
    birdX1 = 117;
  } else if (birdX2 >= 160) {
    birdX2 = 150;
  }

  requestAnimationFrame(draw);
}

//background

function drawsmallBird(x, y) {
  //small bird
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI, true);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x + 20, y, 10, 0, Math.PI, true);
  ctx.stroke();
}

function drawthinBird(x, y) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI, true);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x + 20, y, 10, 0, Math.PI, true);
  ctx.stroke();
}
