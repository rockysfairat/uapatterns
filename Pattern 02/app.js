const blackStitches = document.getElementsByClassName("blck");
const redStitches = document.getElementsByClassName("rd");

// Saving the animation names into array:

const aniNames = ["stitchesAppearInOneStep", "stitchesBlink"];

// Applying two different animations to selected elements:

function applyAnimation(element, array, animationName) {
  for (let i = 0; i < array.length; i++) {
    // First stitch:
    element[
      array[i]
    ].children[0].style = `animation-name: ${animationName}; animation-duration: 300ms; animation-delay: 1000ms; animation-iteration-count: 1; animation-fill-mode: forwards;`;
    // Second stitch:
    element[
      array[i]
    ].children[1].style = `animation-name: ${animationName}; animation-duration: 300ms; animation-delay: 1000ms; animation-iteration-count: 1; animation-fill-mode: forwards;`;
  }
}

// Dividing animation into different steps.
// Gonna store positions of elements in need into arrays:

const black_step1 = [34, 35, 36, 37, 43, 44, 63, 64, 70, 71, 72, 73];
const black_step2 = [22, 51, 56, 85];
const black_step3 = [25, 52, 55, 82];
const black_step4 = [29, 53, 54, 78];
const red_step5 = [
  22, 23, 26, 27, 32, 33, 38, 39, 80, 81, 86, 87, 92, 93, 96, 97,
];
const red_step6 = [12, 57, 62, 107];
const red_step7 = [0, 56, 63, 119];
const red_step8 = [2, 49, 70, 117];
const red_step9 = [4, 42, 77, 115];
const red_step10 = [6, 30, 89, 113];
const red_step11 = [8, 20, 99, 111];
const red_step12 = [10, 14, 105, 109];
const red_step13 = [11, 13, 106, 108];
const black_step13 = [9, 13, 28, 30, 77, 79, 94, 98];
const black_step14 = [15, 20, 21, 23, 84, 86, 87, 92];
const red_step14 = [9, 19, 100, 110];
const black_step15 = [8, 14, 24, 26, 81, 83, 93, 99];
const red_step15 = [7, 29, 90, 112];
const black_step16 = [5, 7, 27, 31, 76, 80, 100, 102];
const red_step16 = [5, 41, 78, 114];
const black_step17 = [3, 4, 32, 39, 68, 75, 103, 104];
const red_step17 = [3, 48, 71, 116];
const black_step18 = [1, 2, 40, 47, 60, 67, 105, 106];
const red_step18 = [1, 55, 64, 118];
const black_step19 = [0, 48, 59, 107];
const black_step20 = [
  6, 10, 11, 12, 16, 17, 18, 19, 33, 38, 41, 42, 45, 46, 49, 50, 57, 58, 61, 62,
  65, 66, 69, 74, 88, 89, 90, 91, 95, 96, 97, 101,
];
const red_step21 = [15, 18, 21, 28, 91, 98, 101, 104];
const red_step22 = [16, 17, 31, 40, 79, 88, 102, 103];
const red_step23 = [24, 25, 43, 47, 72, 76, 94, 95];
const red_step24 = [34, 37, 44, 46, 73, 75, 82, 85];
const red_step25 = [35, 36, 50, 54, 65, 69, 83, 84];
const red_step26 = [45, 58, 61, 74];
const red_step27 = [51, 53, 66, 68];
const red_step28 = [52, 59, 60, 67];

setTimeout(() => {
  applyAnimation(blackStitches, black_step1, aniNames[0]);
}, 1000);

setTimeout(() => {
  applyAnimation(blackStitches, black_step2, aniNames[0]);
}, 2500);

setTimeout(() => {
  applyAnimation(blackStitches, black_step3, aniNames[0]);
}, 2700);

setTimeout(() => {
  applyAnimation(blackStitches, black_step4, aniNames[0]);
}, 2900);

setTimeout(() => {
  applyAnimation(redStitches, red_step5, aniNames[1]);
}, 4800);

setTimeout(() => {
  applyAnimation(redStitches, red_step6, aniNames[1]);
}, 5200);

setTimeout(() => {
  applyAnimation(redStitches, red_step7, aniNames[0]);
}, 5500);

setTimeout(() => {
  applyAnimation(redStitches, red_step8, aniNames[0]);
}, 5600);

setTimeout(() => {
  applyAnimation(redStitches, red_step9, aniNames[0]);
}, 5700);

setTimeout(() => {
  applyAnimation(redStitches, red_step10, aniNames[0]);
}, 5800);

setTimeout(() => {
  applyAnimation(redStitches, red_step11, aniNames[0]);
}, 5900);

setTimeout(() => {
  applyAnimation(redStitches, red_step12, aniNames[0]);
}, 6000);

setTimeout(() => {
  applyAnimation(redStitches, red_step13, aniNames[0]);
  applyAnimation(blackStitches, black_step13, aniNames[1]);
}, 6100);

setTimeout(() => {
  applyAnimation(redStitches, red_step14, aniNames[0]);
  applyAnimation(blackStitches, black_step14, aniNames[0]);
}, 6200);

setTimeout(() => {
  applyAnimation(redStitches, red_step15, aniNames[0]);
  applyAnimation(blackStitches, black_step15, aniNames[0]);
}, 6300);

setTimeout(() => {
  applyAnimation(redStitches, red_step16, aniNames[0]);
  applyAnimation(blackStitches, black_step16, aniNames[0]);
}, 6400);

setTimeout(() => {
  applyAnimation(redStitches, red_step17, aniNames[0]);
  applyAnimation(blackStitches, black_step17, aniNames[0]);
}, 6500);

setTimeout(() => {
  applyAnimation(redStitches, red_step18, aniNames[0]);
  applyAnimation(blackStitches, black_step18, aniNames[0]);
}, 6600);

setTimeout(() => {
  applyAnimation(blackStitches, black_step19, aniNames[0]);
}, 6700);

setTimeout(() => {
  applyAnimation(blackStitches, black_step20, aniNames[1]);
}, 7100);

setTimeout(() => {
  applyAnimation(redStitches, red_step21, aniNames[0]);
}, 7500);

setTimeout(() => {
  applyAnimation(redStitches, red_step22, aniNames[0]);
}, 7600);

setTimeout(() => {
  applyAnimation(redStitches, red_step23, aniNames[0]);
}, 7700);

setTimeout(() => {
  applyAnimation(redStitches, red_step24, aniNames[0]);
}, 7800);

setTimeout(() => {
  applyAnimation(redStitches, red_step25, aniNames[0]);
}, 7900);

setTimeout(() => {
  applyAnimation(redStitches, red_step26, aniNames[1]);
}, 7400);

setTimeout(() => {
  applyAnimation(redStitches, red_step27, aniNames[0]);
}, 8300);

setTimeout(() => {
  applyAnimation(redStitches, red_step28, aniNames[0]);
}, 8400);

// Mmmmmmm, something is missing...
// Let's give the wrapper a nice rotation animation :)

const wrapper = document.getElementsByTagName("section");

console.log(wrapper);

function rotateWrapper(element) {
  element.style =
    " animation-name: rotateWrapper; animation-duration: 3000ms; animation-iteration-count: 1;animation-fill-mode: forwards;";
}

setTimeout(() => {
  rotateWrapper(wrapper[0]);
}, 2500);
