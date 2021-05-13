//Create variables here
var dog, happyDog, database, foodS, foodStock


function preload()
{
	//load images here
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  datatbase = firebase.database();
  foodStock = datatbase.ref("food");
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg.png);
 dogscale = 0.4
 
}


function draw() {  

  background("teal");
  if(foodS!== undefined){
    textSize(20);
    fill(255);
    text("Tip: use the up arrow to feed Drago")
    text("Food Remaining: "+foods, 150,150)

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happDogImg.png)
    }

    if(keyWentDown(UP_ARROW)){
      
      dog.addImage(dogImg.png)
    }

    if(foodS === 0){
      foodS = 20;
    }
      
    drawSprites();

  }

}

function readStock(data){
  foodS = data.val();
}

