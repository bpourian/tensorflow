// Configuration
var EPOCHS = 10;

// Variables
var RAW_DATA = null;
var WEIGHTS = null;
var DATA = null;
var UI = null;

function preload() {
  console.log("👉 Preload");
  RAW_DATA = loadTable("data.csv", "csv", "header");
}

function setup() {
  console.log("👉 Setup");
  console.log(RAW_DATA);
  prepareData();

}

function prepareData() {
    console.log("prepareData");
    DATA = new Data(RAW_DATA);
    console.log(DATA.training);
}

function validateModel() {
  log
}

function draw() {}
