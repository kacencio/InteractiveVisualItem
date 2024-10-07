let cookieCount = 0;
let cookieDimension = 450;
let cookieX = 225;
let cookieY = 225;
let cookie_img;
let clickSound;


function preload() {
  cookie_img = loadImage('../img/cookie_img.png');
  clickSound = loadSound('click.mp3');
}

function setup() {
  createCanvas(900, 950);
  textSize(40);
}

function draw() {
  background(110,70,50);
text(round(cookieCount), 425, 100);
text(("Click on the cookie"), 280, 800);
text(("to gain more!"),       330, 845);
image(cookie_img, cookieX, cookieY, cookieDimension, cookieDimension);
}

function mousePressed() {
  if (
    mousePressed 
  && 
    mouseX > cookieX && mouseX < cookieX + cookieDimension
    /*WITHIN the X coordinate range of cookie*/
  &&
    mouseY > cookieY && mouseY < cookieY + cookieDimension) 
      /*WITHIN the Y coordinate range of cookie*/
  
{
cookieCount=(cookieCount+1);
  cookieDimension=(425);
  cookieX = (cookieX+12.5);
  cookieY = (cookieY+12.5);
  clickSound.play();
}

else
{
  background(255,0,0);
}
}

function mouseReleased() {
  cookieDimension = 450;
  cookieX = (225);
  cookieY = (225);
}


