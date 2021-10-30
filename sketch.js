var guitar , guitar_image , circle_img ,  x, y , circle_0  , string1_fret_1


function preload(){
  guitar_image = loadImage("Background (2).png")
  circle_img = loadImage("circle.png")
  string1_fret_1  = loadSound("string_fret1.mp3")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  guitar = createSprite(windowWidth/2 ,200)
  guitar.addImage("guitar" , guitar_image)
  guitar.scale = 0.5
  
}
  
function draw() {
  // alert("hello  ")
background("rgb(222,219,222)");

  


if(mouseIsPressed){
  var a = World.mouseX
  var b = World.mouseY
    console.log( "x position - "+a + "y position- " + b )
}
if (mouseIsPressed && World.mouseX <571 && World.mouseX > 375 && World.mouseY < 196 && World.mouseY > 185){
    create_circle_0()
    console.log("hi")

}


var msg = "Respected Sir/Ma'am ; this is currently just a prototype so as of now i have only programmed the first fret of the first string"
text(msg ,windowWidth/2-300, windowHeight-50)

drawSprites()  
}

function create_circle_0(){
  // var visibility = true
  string1_fret_1.play()
  var circle_0 = createSprite(610, 200);
  circle_0.addImage("circle" , circle_img)
  circle_0.scale = 0.4 
  circle_0.lifetime = 30
  
  // circle_0.visible = visibility
}