function homepage()
{


  var gui;
  var s;
  // var bgsider
  // var img;
  
  
  // function preload() {
  //   img = loadImage('Phormio.JPG');
  // }
  
  this.setup = function(){


    // gui = createGui();
    // s = createSlider("Slider", width/14, height/4.8, width/1.2, height/22, width/12, height/5);
    gui = createGui();
    b = createButton("Start stretching", width/14, height/4.8, width/1.2, height/22, width/12, height/5);
    
  
    //   image(img, 0, 300);
    // label = createDiv('');
    // label.position(30, 125);
    // bgslider = createSlider(10, 255, 80);
    // bgslider.position(20, 150);
    // bgslider.style("width", "400px");
    // bgslider.style("height", "50px");
    // bgslider.style("accent-color", "#00BCD4");
    // slider.class("extralarge");
  }
  
  this.draw = function() {
    background(200);
    fill(300);
    rect(0, 0, width/1, height/10);
  
    let h = hour();
    textSize(12);
    fill(50);
    text("\n" + h, 12, 10);
    let m = minute();
    text("\n" + m, 30, 10);
  
    textSize(width/27);
    fill(50);
    text("Weekly exercises", width/10, height/7, 200);
  
    //     fill(0, 0, 200);
    //   stroke(100);
    //   rect(20, 120, 120, 50, 10);
  
    // fill(300);
    // stroke(0, 0, 200);
    //   strokeWeight(2)
    // rect(120, 120, 300, 50, 10);
  
    // textSize(width/22);
    // fill(80);
    // stroke(100);
    // strokeWeight(0);
    // text("continue stretches", width/2, height/3.5, 200);
  
    textSize(width/20);
    fill(255);
    text("06:34", width/10, height/3.5, 200);
  
    // strokeWeight(2);
    // line(340, 145, 315, 130);
    // stroke(126);
  
    // strokeWeight(2);
    // line(340, 145, 315, 160);
    // stroke(126);
  
    textSize(width/26);
    strokeWeight(0);
    fill(50);
    text("Prescribed regiment", width/15, height/3.2, width/1);
  
    //TODO: Place video in here of someone planking
  
    //main background
    fill(255);
    strokeWeight(0);
    rect(width/18, height/3, width/1.15, height/1.8, 5);
  
    //inner rectangle
    fill(200);
    strokeWeight(0);
    rect(width/10, height/2.7, width/1.3, height/4, 5);
  
    // strokeWeight(2);
    // line(40, 300, 400, 520);
    // stroke(126);
  
    // strokeWeight(2);
    // line(400, 300, 40, 520);
    // stroke(126);
  
    strokeWeight(0);
    textSize(width/26);
    fill(0);
    text("Planking", width/10, height/1.59, 200);
  
    textSize(width/26);
    fill(100);
    text(
      " The plank is an excellent abdominal and core exercise. To ensure you keep your core strong and stable",
      width/10, height/1.45, width/1.2
    );
  
    //faux button
    fill(255);
    stroke(0, 0, 320);
    strokeWeight(2);
    rect(width/10, height/1.25, width/3, height/20, 10);
  
    textSize(width/20);
    fill(0, 0, 320);
    stroke(100);
    strokeWeight(0);
    text("learn more", width/8.5, height/1.24, 200, 40);
  
    // fill(255);
    // strokeWeight(0);
    // rect(0, 700, 440, 100);
    
      drawGui();

      if (b.isPressed) {
        print(b.label + " is pressed.");
        this.sceneManager.showScene(posenet);
  
    // console.log(bg);
    
    // if (s.isChanged) {
    //   // Print a message when Slider is changed
    //   // that displays its value.
    //   print(s.label + " = " + s.val);
    }
  }
    
    /// Add these lines below sketch to prevent scrolling on mobile
  // this.touchMoved = funtion() 
  //   // do some stuff
  //   return false;
  }

  this.enter = function()
{   
  gui.show();
}

this.exit = function()
{
  gui.hide();
  print("continue exercises");

  // textinput1.hide();
  // textinput2.hide();
  // textinput3.hide();
  // textinput4.hide();
  // textinput5.hide();
  
}
