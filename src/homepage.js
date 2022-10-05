function homepage()
{
  var gui;
  var menu = [];
  var menuNames = ["Buttons", "Sliders", "Colour Control"];
  var me = this;
  var backButton;
  var menuButton;

  this.setup = function()  
  {
    gui = createGui();

    showHeader(false);

    var buttonstyleMenu = {
        "font": 'gotham',
        "textSize": 12,
        "rounding": 0,
        "strokeWeight": 1,
        "fillBg": color('#4d4d4d'),
        "fillBgHover": color('#4d4d4d'),
        "fillLabel": color(255),
        "fillLabelHover" : color(255)
    }

    var xoffset = 30;
    var yoffset = 80;
    var offset = 120;
    var xwidth = width-60;

    for(var i = 0;i < menuNames.length;i++) {
      menu[i] = createButton(menuNames[i],xoffset,i*yoffset+offset);
      menu[i].index = i;
      menu[i].w = xwidth;
      menu[i].h = yoffset - 15;
      menu[i].setStyle(buttonstyleMenu);
  
      menu[i].onPress = function() 
      {
        if(this.index == 0) {
          me.sceneManager.showScene(buttonsettings);
        }
        if(this.index == 1) {
          me.sceneManager.showScene(slidersettings);
        }
        if(this.index == 2) {
          me.sceneManager.showScene(colourcontrol);
        }                  
      }      
    }
  }
  
  this.enter = function()
  {   
    gui.show();
  }

  this.exit = function()
  {
    gui.hide();
  }

  this.draw = function()
  {
    background('#aaaaaa');

    push();
    showHeader(false);

    let img;
    function preload() {
      img = loadImage('Phormio.JPG');
    }
    function setup() {
      createCanvas(440,800)
      image(img, 20, 100);
    }a
    // var slider;
    let bgsider
    
    function setup() {
      createCanvas(440, 800);
        image(img, 0, 300);
      // label = createDiv('Continue stretches');
      // label.position(30, 125);
      bgslider = createSlider(10, 255, 80);
      bgslider.position(20, 150);
      bgslider.style("width", "400px");
      bgslider.style("height", "50px");
      bgslider.style("accent-color", "#00BCD4");
      // slider.class("extralarge");
    }
      //why is this not working?
    // //Pierre can you please help on this?
    // function draw() {
    //   var val = slider.value();
    //   rect(0, 0, 800);
    //    fill(val);
    //   // background((val = 90));
    //   // background(200);
      
      // function draw() {
      // //get the value of the slider
      // let bg = bgSlider.value(100);
      // //set the background color to the value of the slider on a scale of 0-255
      // //white is 255, black is 0
      // background(bg);
      // console.log(bg);
    
    }
    
    function draw() {
      background(200);
      fill(300);
      rect(0, 0, 440, 70);
    
      let h = hour();
      textSize(12);
      fill(50);
      text("\n" + h, 12, 10);
      let m = minute();
      text("\n" + m, 30, 10);
    
      textSize(18);
      fill(50);
      text("Weekly exercises", 20, 85, 200);
    
      //     fill(0, 0, 200);
      //   stroke(100);
      //   rect(20, 120, 120, 50, 10);
    
      // fill(300);
      // stroke(0, 0, 200);
      //   strokeWeight(2)
      // rect(120, 120, 300, 50, 10);
    
      textSize(16);
      fill(80);
      stroke(100);
      strokeWeight(0);
      text("continue stretches", 175, 136, 200);
    
      textSize(20);
      fill(255);
      text("06:34", 35, 135, 200);
    
      strokeWeight(2);
      line(340, 145, 315, 130);
      stroke(126);
    
      strokeWeight(2);
      line(340, 145, 315, 160);
      stroke(126);
    
      textSize(18);
      strokeWeight(0);
      fill(50);
      text("Prescribed regiment", 20, 240, 200);
    
      //TODO: Place video in here of someone planking
    
      fill(255);
      strokeWeight(0);
      rect(20, 280, 400, 400, 5);
    
      fill(200);
      strokeWeight(0);
      rect(40, 300, 360, 220, 5);
    
      strokeWeight(2);
      line(40, 300, 400, 520);
      stroke(126);
    
      strokeWeight(2);
      line(400, 300, 40, 520);
      stroke(126);
    
      strokeWeight(0);
      textSize(18);
      fill(0);
      text("Planking", 30, 540, 200);
    
      textSize(12);
      fill(100);
      text(
        " The plank is an excellent abdominal and core exercise. To ensure you keep your core strong and stable",
        30,
        570,
        400
      );
    
      fill(255);
      stroke(0, 0, 320);
      strokeWeight(2);
      rect(30, 620, 150, 40, 10);
    
      textSize(16);
      fill(0, 0, 320);
      stroke(100);
      strokeWeight(0);
      text("learn more", 60, 630, 200, 40);
    
      fill(255);
      strokeWeight(0);
      rect(0, 700, 440, 100);
    }
    
    gui.draw();

    pop();

  }
 
}
