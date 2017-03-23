//Ryan Rusiecki - rr1402@bard.edu - February 19th, 2017 - I created this avatar independently.

function setup() {
    createCanvas(1000,1000);
    img = loadImage ("assests/avatargif.gif");//load gif
}

function draw() {   
    image(img, 450,850);
    background(100,70,200);
    if (mouseIsPressed && mouseX > 450 && mouseX < 550 && mouseY > 100 && mouseY < 200) {
        background (200, 50, 66);
    }
   

  //3-D Square Head
    stroke(250);  //set stroke to black
    strokeWeight (10)
    rect (450,100,100,100); //first square
    rect (400,150,100,100); //second square
    line (450,100,400,150); //line 
    line (500,150,550,100);
    line (500,250,550,200);
    
    //eyes
    ellipse ()
    
    //neck
    line (425,250,425,300);
    line (475, 250, 475, 300);
    line (425, 300, 475, 300);
    
    //t-shirt
     if (keyIsPressed === true) {
        fill (50,100,20);
        } else {
        fill (20,100,100);
        }
    beginShape();
    stroke(250);
      strokeWeight (10);
    vertex (425,300);//corner with left neck
    vertex (325, 300);//end of left sleeve on top
    vertex (350, 350);//bottom of left sleeve
    vertex (375,340);//left armpit
    vertex (375,500);//bottom left corner of shirt
    vertex (515,500);//bottom right corner of shirt
    vertex (515,340);//right arm pit
    vertex (550,350);//bottom of right sleeve
    vertex (575,300);//end of right sleeve on top
    vertex (425,300);//corner with right neck
    endShape();
    
    //arms
    strokeCap(ROUND);//left arm
    stroke (random [0,250], random [0,250],random [0,250]);
    line (340,330,240,400);
    fill (0,200,0);
     strokeWeight(9);
    line (560,330,660,400);  
    
   //legs
    strokeCap(ROUND);
        strokeWeight (20);
    line (380,505,380,700);
    line (510,505,510,700);
    
    //feet
    ellipse(380,700,50,50);
    ellipse(510,700,50,50);
    fill (0,0,255);
    strokeWeight(15);
    
    //hands
    ellipse(240,400,35,35);
    ellipse(660,400,35,35);
        fill (255,248,230);
        strokeWeight(1);
    
    //t shirt design
    ellipse (450,400,100,100);
        fill (255,0,0);
    ellipse (450,400,75,75);
        fill (0,255,0);
    ellipse (450,400,50,50);
        fill (0,0,255);
    
    //face
        fill (100,100,100);
    ellipse (450,200,50,50);
        fill (200,200,200);
    ellipse (450,200,25,25);
    
    //measuring coordinates
    text (mouseX + " , " +mouseY, mouseX, mouseY);
    
    //biographical details about avatar
    if (mouseIsPressed && mouseX > 800 && mouseX < 900 && mouseY >200 && mouseY < 300) {
        background (50);
        text (Here are few things to know about me: I like apples, water, walking, and being playful. Do you want to play with me?);
        
        else
            text(click here for more information about me!)
    }
    rect(800,200,100,100);
    
}
//Using code to create graphics is an interesting approach versus drawing or illustrating in real life on paper. It seems inefficient at first but can eventually have more capabilities than free hand. 
