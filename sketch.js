function setup() {
    createCanvas(600, 600);
    background("whithe");
  }
  function draw() {
    
    stroke("orange")
    fill("yellow")
    
  // console.log(mouseIsPressed)
    
    if(mouseIsPressed) {                                       rect(mouseX, mouseY, 20, 35);
    }
    
   
  }