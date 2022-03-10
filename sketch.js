
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1= loadAnimation("ship-1.png");
  shipImg2= loadAnimation("ship-2.png");
  shipImg3= loadAnimation("ship-3.png");
  shipImg4= loadAnimation("ship-4.png");
}

   
function setup(){
  createCanvas(1200,600);
  var oceano = createSprite(0,0,400,400);
  oceano.addImage(seaImg);

  var navio1 = createSprite(200,200,50,50);
  navio1.addImage(navio1);
   
  var navio2 = createSprite(200,200,50,50);
  navio2.addImage(navio2); 
   
  var navio3 = createSprite(200,200,50,50);
  navio2.addImage(navio3);
   
  var navio4 = createSprite(200,200,50,50);
  /navio3.addImage(navio4);
}

function draw() {
  background("blue");
  drawSprites();
  
  if(sea.x< 0){
  sea.x= sea.whidth/2;
  } 
}
