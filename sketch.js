let treeCount = 0;
let treeDimension = 450;
let treeX = 225;
let treeY = 225;
let tree_img;
let clickSound;


function preload() {
  tree_img = loadImage('img/tree_img.png');
  clickSound = loadSound('click.mp3');
}

function setup() {
  createCanvas(900, 950);
  textSize(40);
}

function draw() {
  background(100,160,200);

fill(15, 100, 10);
rect(0, 630, 900);

fill(0, 0, 0);
text(round(treeCount), 425, 100);
text(("Trees Grown"), 320, 150);
text(("Click on the tree"), 300, 800);
text(("to grow more!"),       330, 845);

image(tree_img, treeX, treeY, treeDimension, treeDimension);
}


function mousePressed() {
  if (
    mouseX > treeX 
    && 
    mouseX < treeX + treeDimension 
    && 
    mouseY > treeY 
    && 
    mouseY < treeY + treeDimension)
  
{
treeCount=(treeCount+1);
  treeDimension=(425);
  treeX = (treeX+12.5);
  treeY = (treeY+12.5);
  clickSound.play();
}

else
{
  background(255,0,0);
}
}

function mouseReleased() {
  treeDimension = 450;
  treeX = (225);
  treeY = (225);
}


