const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
var boy,question,answer,count=0,mark=0

function preload(){
doorimage=loadImage("image/closed door.png")
boy1=loadAnimation("image/front 1.png","image/front 2.png")
boy2=loadAnimation("image/left 1.png","image/left 2.png")
boy3=loadAnimation("image/Untitled.png","image/right 2.png")



}
function setup() {
  
  createCanvas(displayWidth,displayHeight);
  door1=new Door(displayWidth/4-100,100)
  door2=new Door(displayWidth/2-80,100)
  door3=new Door(3*displayWidth/4,100)
  boy=createSprite(800,500)
  boy.addAnimation("front",boy1)
  boy.addAnimation("left",boy2)
  boy.addAnimation("right",boy3)
 
  question=[]
  count=0
  mark=0
}

function draw() {
  background("green");  
  console.log(count)
  door1.display()
  door2.display()
  door3.display()
  if(keyDown("Up_arrow")){
    boy.y=boy.y-3
    boy.changeAnimation("front",boy1)
  }
  if(keyDown("Left_arrow")){
    boy.x=boy.x-3
    boy.changeAnimation("left",boy2)
  }
  if(keyDown("Right_arrow")){
    boy.x=boy.x+3
    boy.changeAnimation("right",boy3)
  }
  

question.push("Who is the current President of America?")
question.push("How many letters are there in the English Alphabet?")
question.push("Which month of the year has the least number of days?")
question.push("Which virus became a pandemic and caused deaths in 2020?")
question.push("How much water is present of Earth") 
answer=[["1.Donal Trump","2.Joe Biden","3.George Washington"],["26","23","30"],["April","November","February"],["SARS","H1N1","Coronavirus"],["71%","76%","68%"]]

 for(var q in question)
{
  if(count===mark)
  {
    textSize(20)
    var pos=250
    text(question[count],600,50)
    
    
    for(var i=0;i<3;i++)
    {
    text(answer[count][i],pos,250) 
    pos+=420
    }
console.log(boy.x)
console.log(boy.y)
    if((boy.x>displayWidth/2-60 && boy.x<displayWidth/2+10)&& (boy.y>100 && boy.y<200)&& count===0)
    {
     
    textSize(20)
    text("Correct Answer",750,500)
    mark=1
    }
    if((boy.x>250 && boy.x<350)&& (boy.y>100 && boy.y<200)&& count===1)
    {
     
    textSize(20)
    text("Correct Answer",750,500)
    mark=2
    }
    if((boy.x>1100 && boy.x<1200)&& (boy.y>100 && boy.y<200)&& count===2)
    {
     
    textSize(20)
    text("Correct Answer",750,500)
    mark=3
    }
    if((boy.x>1100 && boy.x<1200)&& (boy.y>100 && boy.y<200)&& count===3)
    {
     
    textSize(20)
    text("Correct Answer",750,500)
    mark=4
    }
    
    
  }
  count=mark
}
/*if(count===1)
{
  textSize(20)
  var pos=250
  text(question)
}*/
  drawSprites();
}


/* 
1.Donal Trump
2.Joe Biden
3.George Washington

*/
//opt 3 1172 x axis