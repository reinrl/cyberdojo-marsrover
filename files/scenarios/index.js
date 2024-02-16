const provided = require("./provided");
const outOfBoundsBottomLeft = require("./outOfBoundsBottomLeft");
const outOfBoundsTopRight = require("./outOfBoundsTopRight");
const sharingACoordinate = require("./sharingACoordinate");
const invalidOrientation = require("./invalidOrientation");

const scenarios = [
  provided,
  outOfBoundsBottomLeft,
  outOfBoundsTopRight,
  sharingACoordinate,
  invalidOrientation,
];

module.exports = scenarios;
