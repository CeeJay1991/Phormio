function calendar()
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


    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta charset="utf-8" />
    
      </head>
      <body>
        <h1>Google calendar iframe guide</h1>
        <a href="https://support.google.com/calendar/answer/41207/" target="_blank">https://support.google.com/calendar/answer/41207/</a>
        <h1>Google calendar iframe example</h1>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FMexico_City&amp;src=aGNtdXMuZWR1LnZuX2VkaG92YjdpYmxoZm00MWpnM3RoMjJvN3JjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dmkudmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300&amp;color=%237986CB&amp;color=%230B8043" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        <script src="sketch.js"></script>
      </body>
    </html>
    
    
    gui.draw();

    pop();

  }
 
}
