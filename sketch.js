var car, wall, speed, weight;




function setup() {
  createCanvas(1600,400);
  
  //assigning random values 
  speed = random(55, 90); 
  weight = random(400, 1500); 

  car = createSprite(50, 200, 50, 50);

  //car will move at random speed
  car.velocityX=speed; 
  car.shapeColor="white";

  wall= createSprite(1500,200,60, height)
  wall.shapeColor="lightgrey";

}



function draw() {
  background("black");  

  //whenever objects are touching each other then the distance between their x positions is equal to the sum total of half their widths         //Lighting McQueen is Lightning FAST!!!!

  if (wall.x  - car.x < car.width/2+ wall.width/2){

    car.velocityX = 0; 
    var deformation = 0.5 *weight * speed * speed / 22500

    //dangerous car 
    if (deformation>180) {
      car.shapeColor="red"

    }
    //average car 
if (deformation < 180 & deformation > 80){
  car.shapeColor="yellow"
}
  //safe car 
    if (deformation < 80){ 
      car.shapeColor = "green"
    }
  }



  drawSprites();
}