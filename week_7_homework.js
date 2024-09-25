
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
    
}


function draw() {
  //background(0, 0,0, 50);
  textSize(15);
  //fill(0, 255, 0);
  //text('HELLO', mouseX, moucseY)
} 

function mousePressed(){
  //background (255);
}

function keyTyped(){
  if (key === 'v'){
    fill('#FFC067');
  } else if (key === 'z'){
    fill (0);
  } else {
    fill(random(256), random(256), random(256));
  }
    text(key, mouseX, mouseY);
}
