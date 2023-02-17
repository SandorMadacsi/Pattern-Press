// Generative Logo maker system by Sandor Madacsi
// 12_2022


const UNIT_SIZE = 350;
const SIDES = 4;
let PALETTE = [];
let layers = [];
let UNITS = [];

function setup() {

  createCanvas(UNIT_SIZE+100, UNIT_SIZE+100, SVG);
  background("#e43f3f");

  // while(background)
  // {
  //   document.getElementById("save").onclick="javascript: void(0)";
  // }

  PALETTE = [
  color("#fffffa"),
  color("#515052"),
  color("#000103"),
  color("#333138"),
  color("#ff312e")
 ]

//  PALETTE = [
//   color("#2b59c3"),
//   color("#253c78"),
//   color("#d36582"),
//   color("#ffeecf"),
//   color("#c9a690")]

 
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Logo comes here', width/2, height/2);

  fill(0, 102, 153);
  noLoop();
  noFill();
  angleMode(DEGREES);
  rectMode(CENTER);

}
