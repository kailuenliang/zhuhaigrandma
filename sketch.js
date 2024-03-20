// our program

// create a drawing program with a list of words or symbols
// mouse pressed draw released, nothing is drawn
// eraser
// clear() 
// we want to store our symbols or words.
// introduce text fonts



let lora, lora_italic;

let erase = false;

let opacity = 0;

let l1, l2, l3, l4, l5,l6;

let t_size = 36;
let realWidth;

l1 = "I am ZZ. Sometimes ZZZ";
l2 = "Sometimes I am a cat";
l3 = "Sometimes I am a grandma";
l4 = "Sometimes I am a grandma cat.";
l5 = "But...";
l6 = "I am always...a wonderful amazing person.";

let word_list = [l1, l2, l3, l4, l5, l6];

let count = 0;

// word_list[count]
// count += 1; count = count + 1;



function preload() {
  lora = loadFont('lora.ttf');
  lora_italic = loadFont('lora_italic.ttf');
  myImg = loadImage('assets/z.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  imageRatio = myImg.height/myImg.width;
print(imageRatio);
  realWidth=windowWidth
  
  let imgWidth;
  let imgHeight;
  imgWidth = myImg.width;
  imgHeight= myImg.height;
  
  if (windowWidth < realWidth) {
		moonWidth = windowWidth;
  	imgHeight= imgWidth*imageRatio;
		//print("w: "+moonWidth+", h: "+moonHeight);
  }
  tint(255, 170); // Display at half opacity
  image(myImg,0,0,imgWidth,imgHeight);

  
  
  
}

function draw() {
  
  textFont(lora);
  textSize(t_size);
  

  
  if(erase == false){
    fill(0 , opacity);
    text(word_list[count], mouseX, mouseY);  
    //print("DRAWING MODE");
  }else{
    if(mouseIsPressed == true){
      fill(255,100);
      noStroke();
      rect(mouseX, mouseY, 30, 30);
    }
    
    //print("ERASING MODE")
  }

}

function mousePressed(){
  //change opacity variable to 255
  opacity = 255;
  counter();
  
  
}

function mouseReleased(){
// change opacity variable to 0
  opacity = 0;
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    clear();
    setup();

  }
  if(keyCode == DOWN_ARROW){
    
  counter();
    
    t_size = random(20,50);
    
    // print(count);
    // print(word_list[count]);
    

  }
  // turns on off eraser
  if((keyCode == RIGHT_ARROW)){
    erase = !erase ;
    if(erase == true){
      print("ERASING MODE")
    }else{
      print("DRAWING MODE")
    }
  }
}


function windowResized(){
  clear();
  setup();
}

function counter(){
      if(count >= word_list.length - 1){
      count = 0;
    }else{
      count++;
    }
}