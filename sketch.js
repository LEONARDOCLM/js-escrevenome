function setup() {
    createCanvas(600, 600);
    background("black");
  }
  function draw() {
    
    stroke("orange")
    fill("yellow")
    
  // console.log(mouseIsPressed)
    
    if(mouseIsPressed) {                                       rect(mouseX, mouseY, 20, 35);
    }
    
   
  }