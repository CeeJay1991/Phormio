
function login() {

var textinput1, textinput2, textinput3, textinput4;
var name;
var gui;
var b;
var img;
var me = this;

// function preload() {
//   img = loadImage('Phormio.JPG');

this.setup = function()
{

  gui = createGui();
  b = createButton("Log In", width/4.2, height/1.35, width/2, height/14);
  // b.style('font-size', '30px');
  // b = fill (100)

  textinput1 = createInput('');
  textinput1.style('font-size', '20px');
  textinput1.position(width/7, height/4);
  textinput1.size(width/3.5, height/14);
  textinput1.value('First name');
  //textinput.input(myInputEvent);
  
  textinput2 = createInput('');
  textinput2.style('font-size', '20px');
  textinput2.position(width/1.9, height/4);
  textinput2.size(width/3.5, height/14);
  textinput2.value('Last name');
  //textinput.input(myInputEvent);
  
  textinput3 = createInput('');
  textinput3.style('font-size', '20px');
  textinput3.position(width/7, height/2.7);
  textinput3.size(width/1.5,height/14);
  textinput3.value('Username');
  // textinput3.input(myInputEvent);
  
  textinput4 = createInput('');
  textinput4.style('font-size', '20px');
  textinput4.position(width/7, height/2.05);
  textinput4.size(width/1.5,height/14);
  textinput4.value('Email Address');
  // textinput.input(myInputEvent);
  
  textinput5 = createInput('');
  textinput5.style('font-size', '20px');
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
  rect(0, 0, width/1, height/8);

  //footer
  fill(220);
  strokeWeight(0);
  rect(0, height/1.1, width/1, height/8);

  //middle
  fill(220);
  strokeWeight(0);
  rect(20, height/5, width/1.1, height/1.55, 10);


  textSize(width/20);
  fill(80);
  stroke(100);
  strokeWeight(1);
  text("Sign up for a free account", width/10, height/6.3, width, height/3);
 

  /*fill(255);
  strokeWeight(1);
  rect(40, 280, 170, 40);

  textSize(18);
  fill(80)
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
    this.sceneManager.showScene(homepage);
  }
}

this.enter = function()
{   
  gui.show();
}

this.exit = function()
{
  gui.hide();
  print("exit login!");

  textinput1.hide();
  textinput2.hide();
  textinput3.hide();
  textinput4.hide();
  textinput5.hide();
  
}

}
 // end of
