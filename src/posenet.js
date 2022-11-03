function posenet()
{
  // // function setup() {
// //   createCanvas(400, 400);
// // }

// // function draw() {
// //   background(220);
  
//   let capture;

// function setup() {
//   createCanvas(600, 600);
//   capture = createCapture(VIDEO);

// }

// function draw() {
//   image(capture, 0, 0, width, width * capture.height / capture.width);
//   filter(INVERT);
//   // brightness (50)
//   // tint (255,100,200)

// // }
// 

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT<

/* ===
ml5 Example
PoseNet example using p5.js
=== */

var video;
var poseNet;
var poses = [];

this.setup = function(){
  createCanvas(440, 240 );
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

this.modelReady = function() {
  select("#status").html("Model Loaded");
}

this.draw = function() {
  image(video, 0, 0, width/1.1, height/1.1);
  filter(GRAY)

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
this.drawKeypoints = function() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.3) {
        fill(0, 188, 282);
        noStroke();
       // stroke(0,188,282)
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
this.drawSkeleton = function() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    const skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j += 1) {
      const partA = skeleton[j][0];
      const partB = skeleton[j][1];
      stroke(0,188,282);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
//needing to track position of certain x and y positions
//can these keypoints be labelled and a 

// if (keypoint.position.x, keypoint.position,y, )



  }
  this.enter = function()
  {   
    gui.show();
  }
  
  this.exit = function()
  {
    gui.hide();
    print("continue exercises");
 
  }
