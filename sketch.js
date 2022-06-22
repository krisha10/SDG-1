var canvas;
var backgroundImage, obs1,obs2, obs3;
var man1, man2 
//var man1Moving

//man1Moving=false

function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  man1Img = loadAnimation("assets/Runner-1.png","assets/Runner-2.png");
  man2Img = loadAnimation("assets/Runner-3.png","assets/Runner-4.png")

  obs1 = loadImage("assets/obs1.png"); 
  obs2 = loadImage("assets/obs2.png"); 

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 // bg = createSprite(windowWidth, windowHeight);
  //bg.addImage("bg",backgroundImage);

  man1 = createSprite(450,500)
  man1.addAnimation("m1",man1Img);
  man1.scale= 0.1

  man2 = createSprite(800,500)
  man2.addAnimation("m2",man2Img);
  man2.scale= 0.3
  

}

function draw() {
  background(0);
  image(backgroundImage, 0, -height * 5, width, height * 6);
 drawSprites()

 if (keyIsDown(UP_ARROW)) {
 // this.man1Moving = true;
   man1.velocityY +=2 
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
    
     
  