const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var playerbase,playerbaseImg;


function preload(
  {
    playerbaseImg = loadImage('assets/base1.ong')
  }
)
function setup() {
 createCanvas(windowsWidth, windowsHeight);
  
   //Initialising Engine
  myEngine = Engine.create();
  myWorld = myEngine.world;
	
   //Create Player Base and Computer Base Object
  playerbase = new Playerbase(300,Math.round(random(450,width-300)),180,150);

 }

function draw() {

  background(180);

  Engine.update(myEngine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerbase.display();

   //display Player and computerplayer


}
