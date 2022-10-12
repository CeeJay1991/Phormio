
function login() {

var textinput1, textinput2, textinput3, textinput4;
var name;
var gui;
var b;
var img;

// function preload() {
//   img = loadImage('Phormio.JPG');

this.setup = function()
{

  gui = createGui();
  b = createButton("Log In", width/4.2, height/1.35, width/2, height/14);
  // b = fill (100)

  textinput1 = createInput('');
  textinput1.position(width/7, height/4);
  textinput1.size(width/3.5,height/14);
  textinput1.value('First name');
  //textinput.input(myInputEvent);
  
  textinput2 = createInput('');
  textinput2.position(width/1.9, height/4);
  textinput2.size(width/3.5,height/14);
  textinput2.value('Last name');
  //textinput.input(myInputEvent);
  
  textinput3 = createInput('');
  textinput3.position(width/7, height/2.7);
  textinput3.size(width/1.5,height/14);
  textinput3.value('Username');
  // textinput3.input(myInputEvent);
  
  textinput4 = createInput('');
  textinput4.position(width/7, height/2.05);
  textinput4.size(width/1.5,height/14);
  textinput4.value('Email Address');
  // textinput.input(myInputEvent);
  
  textinput5 = createInput('');
  textinput5.position(width/7, height/1.65);
  textinput5.size(width/1.5,height/14);
  textinput5.value('Password');
  // textinput.input()  = function() 
  // {        
  //   console.log('you are typing: ', this.value());
  // }
}

this.draw = function() {
  background(255);

  //top banner
  fill(220);
  strokeWeight(0);
  rect(0, 0, 440, height/8);

  //footer
  fill(220);
  strokeWeight(0);
  rect(0, height/1.1, 440, height/8);

  //middle
  fill(220);
  strokeWeight(0);
  rect(20, height/5, width/1.2, height/1.55, 10);


  textSize(10);
  fill(80);
  stroke(100);
  strokeWeight(1);
  text("Sign up for a free account", width/10, height/6, width, 10);
 

  /*fill(255);
  strokeWeight(1);
  rect(40, 280, 170, 40);

  textSize(18);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("First name", 55, 290, 200);

  fill(255);
  strokeWeight(1);
  rect(230, 280, 170, 40);
  textSize(18);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("Last name", 245, 290, 200);

  fill(255);
  strokeWeight(1);
  rect(40, 340, 360, 40);

  textSize(18);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("Username", 55, 350, 200);

  fill(255);
  strokeWeight(1);
  rect(40, 400, 360, 40);

  textSize(18);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("Email Address", 55, 410, 200);

  fill(255);
  strokeWeight(1);
  rect(40, 460, 360, 40);

  textSize(18);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("Password", 55, 470, 200);
  */

  gui.draw();

  if (b.isPressed) {
    print(b.label + " is pressed.");
    me.sceneManager.showScene(homepage);
  }
}


//     name = textinput.value();
//   print("input text = "+v);

}
