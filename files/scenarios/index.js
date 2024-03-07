const provided = require("./provided");
const sharingACoordinate = require("./sharingACoordinate");
const invalidOrientation = require("./invalidOrientation");
const guardrailsAdded = require("./guardrailsAdded");

const scenarios = [
  provided,
  sharingACoordinate,
  invalidOrientation,
  guardrailsAdded,
];

module.exports = scenarios;
