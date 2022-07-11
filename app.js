// First, grabbing the first bunch of stitches we need to animate:

const rd_01 = document.getElementsByClassName("rd_first");
const rd_02 = document.getElementsByClassName("rd_second");
const rd_03 = document.getElementsByClassName("rd_third");
const rd_04 = document.getElementsByClassName("rd_fourth");
const rd_05 = document.getElementsByClassName("rd_fifth");
const blck_06 = document.getElementsByClassName("blck_sixth");
const blck_07 = document.getElementsByClassName("blck_seventh");
const blck_08 = document.getElementsByClassName("blck_eighth");

// The idea is to set this animation to stitches we need:

function setStyle1(element) {
  element.style =
    "animation-name: ani1; animation-duration: 300ms; animation-delay: 1000ms; animation-iteration-count: 1; animation-fill-mode: forwards;";
}

function setStyle2(element) {
  element.style =
    "animation-name: ani2; animation-duration: 300ms; animation-delay: 1000ms; animation-iteration-count: 1; animation-fill-mode: forwards;";
}

// The animation is divided into several steps, so lets store the
// items we need into a bunch of arrays:

// Fitst - Fourth parts of animation arrays:

const step1 = [6, 7, 11, 12, 19, 20, 24, 25];
const step2 = [4, 5, 10, 13, 18, 21, 26, 27];
const step3 = [2, 3, 9, 14, 17, 22, 28, 29];
const step4 = [0, 1, 8, 15, 16, 23, 30, 31];

// Fifth part animation array:

const step5 = [0, 1, 2, 3];
const step6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const step8 = [0];

// Function that does the magic :)

function colorStitches(array, element, styleFunction) {
  for (let i = 0; i < array.length; i++) {
    styleFunction(element[array[i]].children[0]);
    styleFunction(element[array[i]].children[1]);
  }
}

// First part:

colorStitches(step1, rd_01, setStyle1);

setTimeout(() => {
  colorStitches(step2, rd_01, setStyle1);
}, 150);

setTimeout(() => {
  colorStitches(step3, rd_01, setStyle1);
}, 300);

setTimeout(() => {
  colorStitches(step4, rd_01, setStyle1);
}, 450);

// Second part:

setTimeout(() => {
  colorStitches(step1, rd_02, setStyle1);
}, 450);

setTimeout(() => {
  colorStitches(step2, rd_02, setStyle1);
}, 600);

setTimeout(() => {
  colorStitches(step3, rd_02, setStyle1);
}, 750);

setTimeout(() => {
  colorStitches(step4, rd_02, setStyle1);
}, 900);

// Third part:

setTimeout(() => {
  colorStitches(step1, rd_03, setStyle1);
}, 900);

setTimeout(() => {
  colorStitches(step2, rd_03, setStyle1);
}, 1050);

setTimeout(() => {
  colorStitches(step3, rd_03, setStyle1);
}, 1200);

setTimeout(() => {
  colorStitches(step4, rd_03, setStyle1);
}, 1350);

// Fourth part:

setTimeout(() => {
  colorStitches(step1, rd_04, setStyle1);
}, 1350);

setTimeout(() => {
  colorStitches(step2, rd_04, setStyle1);
}, 1500);

setTimeout(() => {
  colorStitches(step3, rd_04, setStyle1);
}, 1650);

setTimeout(() => {
  colorStitches(step4, rd_04, setStyle1);
}, 1800);

// Fifth part:

setTimeout(() => {
  colorStitches(step5, rd_05, setStyle1);
}, 1000);

// Sixth part:

setTimeout(() => {
  colorStitches(step6, blck_06, setStyle2);
}, 2200);

// Seveth part:

// Part Five and part Seven share the same number of elements,
// so we're gonna use the step5 array:

setTimeout(() => {
  colorStitches(step5, blck_07, setStyle2);
}, 2600);

// Eighth part, the last:

setTimeout(() => {
  colorStitches(step8, blck_08, setStyle1);
}, 2850);
