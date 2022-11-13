// graph width
const W = 5000;
const H = 5000;
var mode = 0;
var theme = 0;
var riddle = 0;
var outerDiam = 0;
var center_x;
var center_y;
var radius = 1500;
var centx = 2500;
var centy = 2500;
var rx;
var ry;

// if point x,y is in circle
function isInCircle(x, y, cx, cy, r) {
    return (Math.pow(cx - x, 2) + Math.pow(cy - y, 2)) < Math.pow(r, 2);
}

function setup() {
    createCanvas(W, H);
    frameRate(15);
    document.querySelector('canvas').style = 'background:linear-gradient(225deg, rgba(0,100,250,0) 5%, rgba(0,0,0,0.4) 75%, rgba(250,250,153,0.4)), linear-gradient(135deg, rgba(160,50,0,0) 5%, rgba(0,0,0,0.7) 75%, rgba(0,250,250,0.5)), linear-gradient(315deg, rgba(160,50,0,0) 5%, rgba(0,0,0,0.7) 75%, rgba(160,50,0,0.6)), linear-gradient(45deg, rgba(160,50,0,0) 5%, rgba(0,0,0,0.7) 75%, rgba(0,100,250,0.9));width:90%;height:90%;margin:auto auto;';
    //noLoop();
    textSize(400);
    textAlign(700, 700);
}

function draw() {
  clear();
  colorMode(HSL);
  const BASE_COLOR = 163;//~~(Math.random() * 360);
  console.log(BASE_COLOR);
  const BASE_COLOR2 = 50;//~~(Math.random() * 360);
  const BASE_COLOR3 = 10;
  const BASE_COLOR4 = 200;
  console.log(mode);
  if(mouseX < 200 && mouseY < 200){
    mode = 1;
  }
  else if(mouseX < 200 && mouseY > 4800){
    mode = 2;
  }
  else if(mouseX > 4800 && mouseY < 200){
    mode = 3;
  }
  else if(mouseX > 4800 && mouseY > 4800){
    mode = 4;
  }
  if(riddle == 1){
    for (var i = 0; i < 4; i++){
		var diam = outerDiam - 1000 * i;    
        if (diam > 0){
        
        //var fade = map(diam, 0, width, 0, 255);
        if(theme == 2){
            stroke('rgba(100%,100%,60%,0.5)');
        }
        else if(theme == 3){
            stroke('rgba(0%,60%,100%,0.5)');
        }
        else if(theme == 4){
            stroke('rgba(0%,100%,100%,0.5)');
        }
        else{
            stroke('rgba(80%,40%,0%,0.5)');
        }
        strokeWeight(10);
        noFill();
        ellipse(center_x,center_y, diam);
        }
    }
    
    console.log(outerDiam);
    
    outerDiam = outerDiam + 270;
        
    if(outerDiam > 15000){
        riddle = 0;
        outerDiam = 0;
    }
  }
  if(mode != 0){
    fillWithMode(BASE_COLOR, BASE_COLOR2, BASE_COLOR3,BASE_COLOR4, ADD, W / 6 - abs(mouseX-2500)/6 - abs(mouseY-2500)/6 - 100);
    let time = millis();
    //rotateX(time / 1000);
    if(mouseX < 3500 && mouseX > 1500 && mouseY > 1500 && mouseY < 3500 && theme == 0){
        if(mode == 2){
            text('Classic', 1800, 2500);
        }
        else if (mode == 1){
            text('Rock', 2000, 2500);
        }
        else if (mode == 3){
            text('Electronic', 1550, 2500);
        }
        else if (mode == 4){
            text('R&B', 2050, 2500);
        }
    }
  }
    if(theme == 2){
        text('Classic', 1800, 2500);
    }
    else if (theme == 1){
        text('Rock', 2000, 2500);
    }
    else if (theme == 3){
        text('Electronic', 1550, 2500);
    }
    else if (theme == 4){
        text('R&B', 2050, 2500);
    }

    strokeWeight(20);
    var x, y;

    for (var ang = 0; ang < 360; ang += 3) {
        var rad = radians(ang);
        //console.log('​setup -> rad', rad);
        x = centx + (radius * cos(rad));
        y = centy + (radius * sin(rad));
        rx = (centx+8*x)/9;
        ry = (centy+8*y)/9;
        var k = random();
        x = rx + (radius * cos(rad)) * k / 8;
        y = ry + (radius * sin(rad)) * k / 8;
        line(rx, ry, x, y);
    }
}

function fillWithMode(BASE_COLOR, BASE_COLOR2, BASE_COLOR3, BASE_COLOR4,BLEND_MODE, COUNT) {
  
  if (BLEND_MODE !== undefined) {
    blendMode(BLEND_MODE);
  }
  
  const cx = W / 2;
  const cy = H / 2;
  const r = Math.min(W, H) * 0.6 / 2 + abs(mouseX-2500)/3 + abs(mouseY-2500)/3;
  const d = r * 2;
  const padding = 100;
  const cxp = cx - padding / 2;
  const cyp = cy - padding / 2;
  const rp = r - padding;
  const density = COUNT / 2;
  
  for (let i = 0; i < density; i++) {
    let x = Math.random() * W;
    let y = Math.random() * H;
    while (!isInCircle(x, y, mouseX - padding / 2, mouseY - padding / 2, r - padding)) {
      x = Math.random() * W;
      y = Math.random() * H;
    }
    const distX = Math.abs(cx - x) / (d / 2);
    const distY = Math.abs(cy - y) / (d / 2);
    const distF = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    noStroke();
    if(mode == 2){
      fill(BASE_COLOR2 + ((Math.random() - 0.5) * 200) * (1 - distF), 40 + distF * 50, 20 + distF * 10);
    }
    else if(mode == 1){
      fill(BASE_COLOR3 + ((Math.random() - 0.5) * 200) * (1 - distF), 40 + distF * 50, 20 + distF * 10);
    }
    else if(mode == 3){
      fill(BASE_COLOR4 + ((Math.random() - 0.5) * 200) * (1 - distF), 40 + distF * 50, 20 + distF * 10);
    }
    else if(mode == 4){
      fill(BASE_COLOR + ((Math.random() - 0.5) * 200) * (1 - distF), 40 + distF * 50, 20 + distF * 10);
    }
    const size = 30 + (75 * distF);
    triangle(x, y, x + size, y, x + size / 2, y + (Math.random() < 0.5 ? size : -size));
  }
  
}

function drawHalo(cx, cy, d) {
  strokeWeight(30);
  stroke(255);
  noFill();
  circle(mousex, mousey, d - 50);
}

function mouseClicked() {
    if(mode != 0){
        riddle = 1;
        center_x = mouseX;
        center_y = mouseY;
        theme = mode;
        mode = 0;
    }
}

