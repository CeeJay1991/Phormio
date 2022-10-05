
function login() {

var textinput1, textinput2;
var name;
var gui;
var b;
var img;

// function preload() {
//   img = loadImage('Phormio.JPG');

this.setup = function()
{

  gui = createGui();
  b = createButton("Log In", 50, 550);
  // b = fill (100)

  textinput1 = createInput('');
  textinput1.position(45, 287);
  textinput1.size(170,40);
  textinput1.value('First name');
  //textinput.input(myInputEvent);
  
    textinput2 = createInput('');
  textinput2.position(230, 287);
  textinput2.size(170,40);
  textinput2.value('Last name');
  //textinput.input(myInputEvent);
  
  //     textinput = createInput('');
  // textinput.position(45, 345);
  // textinput.size(355,40);
  // textinput.value('Username');
  // textinput.input(myInputEvent);
  
  //       textinput = createInput('');
  // textinput.position(45, 400);
  // textinput.size(355,40);
  // textinput.value('Email Address');
  // textinput.input(myInputEvent);
  
  //         textinput = createInput('');
  // textinput.position(45, 460);
  // textinput.size(355,40);
  // textinput.value('Password');
  // textinput.input()  = function() 
  // {        
  //   console.log('you are typing: ', this.value());
  // }
}

this.draw = function() {
  background(220);

  //top banner
  fill(255);
  strokeWeight(0);
  rect(0, 0, 440, 120);

  //footer
  fill(255);
  strokeWeight(0);
  rect(0, 680, 440, 120);

  //middle
  fill(255);
  strokeWeight(0);
  rect(20, 150, 400, 500, 10);

  textSize(24);
  fill(80);
  stroke(100);
  strokeWeight(0);
  text("Sign up for a free account", 55, 190, 200);

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
  }
}


//     name = textinput.value();
//   print("input text = "+v);

}