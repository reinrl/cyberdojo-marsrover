"use strict";

// scenarios (with input and expected results)
const scenarios = require("./scenarios");

// object under test
const explore = require("./hiker");

describe("Mars Rover", () => {
  scenarios.forEach((scenario) => {
    it(scenario.description, () => {
      expect(explore(scenario.providedInput)).toEqual(scenario.expectedResults);
    });
  });
});
