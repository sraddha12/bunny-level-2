var player;
var target;
var snakeGroup;
function setup() {
  createCanvas(600,600);
 player= createSprite(50,560,30,30);
 target= createSprite(560,50,30,30);
 player.shapeColor="white";
 target.shapeColor="pink";
 obstacle1= createSprite(70,200,100,20);
 obstacle2= createSprite(560,360,100,20);
 obstacle3= createSprite(200,70,100,20);
 obstacle4= createSprite(360,5300,100,20);
 obstacle1.shapeColor="orange";
 obstacle2.shapeColor="orange";
 obstacle3.shapeColor="orange";
 obstacle4.shapeColor="orange";
 
 obstacle1.velocityX=3;
 obstacle2.velocityX=-3;
 obstacle3.velocityX=3;
 obstacle4.velocityX=-3;
 edges=createEdgeSprites();
 snakeGroup= new Group

}

function draw() {
  background("midnightblue");  
  drawSprites();
  obstacle1.bounceOff(edges[1]);
  obstacle1.bounceOff(edges[0]);
  obstacle2.bounceOff(edges[1]);
  obstacle2.bounceOff(edges[0]);
  obstacle3.bounceOff(edges[1]);
  obstacle3.bounceOff(edges[0]);
  obstacle4.bounceOff(edges[1]);
  obstacle4.bounceOff(edges[0]);

  if(keyDown("up"))
  {
    player.y=player.y-3;
  }

  if(keyDown("down"))
  {
    player.y=player.y+3;
  }
  if(keyDown("right"))
  {
    player.x=player.x+3;
  }

  if(keyDown("left"))
  {
    player.x=player.x-3;
  }
  if(player.isTouching(target))
  {
    text("you win",300,300)
    player.x=50
    player.y=560
  }
  if(player.isTouching(obstacle1))
  {
    text("you lose",300,300)
    player.x=50
    player.y=560
  }
  if(player.isTouching(obstacle2))
  {
    text("you lose",300,300)
    player.x=50
    player.y=560
  }
  generateSnake()
  for( i=0;i<snakeGroup.length;i++)
    {
        var tem=snakeGroup.get(i);
        if(player.isTouching(tem))
        {
          player.x=50
          player.y=560
        }
    }

}
function generateSnake()
 {
  if(frameCount%30==0){
    snake=createSprite(700,random(70,520),random(30,120),5);
    snake.shapeColor="yellow";
    snake.velocityX=random(-4,4);
    snake.velocityY=random(-4,4) ;
    snakeGroup.add(snake);
 }
}