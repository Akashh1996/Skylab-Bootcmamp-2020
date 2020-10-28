const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const defaultSizeWidth = 1000;
const sizeWidth = defaultSizeWidth;
const defaultSizeHeight = 1000;
const sizeHeight = defaultSizeHeight;
const defaultScale = 1;
let scale = defaultScale;
const spaceBetween = 10;
const resolution = 100;
let isPaused = false;
const defaultStarRadius = 2;
let starRadius = defaultStarRadius;
const defaultVelocity = 500;
let velocity = defaultVelocity;

let stars;