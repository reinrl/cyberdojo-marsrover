"use strict";

// scenarios (with input and expected results)
const { expectedResults, testScenario } = require("./scenarios/provided");
const {
  expectedResults: expectedOutOfBoundsResult,
  testScenario: testOutOfBoundsScenario,
} = require("./scenarios/outOfBoundsBottomLeft");
const {
  expectedResults: expectedOutOfBoundsResultTwo,
  testScenario: testOutOfBoundsScenarioTwo,
} = require("./scenarios/outOfBoundsTopRight");
const {
  expectedResults: expectedResultsStacked,
  testScenario: testScenarioStacked,
} = require("./scenarios/sharingACoordinate");
const {
  expectedResults: expectedInvalidOrientationResult,
  testScenario: testInvalidOrientationScenario,
} = require("./scenarios/invalidOrientation");

// object under test
const explore = require("./hiker");

describe("Mars Rover", () => {
  it("should navigate the plateau as expected", () => {
    expect(explore(testScenario)).toEqual(expectedResults);
  });

  it("should fall off the plateau as expected on the low end", () => {
    expect(explore(testOutOfBoundsScenario)).toEqual(expectedOutOfBoundsResult);
  });

  it("should fall off the plateau as expected on the high end", () => {
    expect(explore(testOutOfBoundsScenarioTwo)).toEqual(
      expectedOutOfBoundsResultTwo
    );
  });

  it("should be ok landing in the same place", () => {
    expect(explore(testScenarioStacked)).toEqual(expectedResultsStacked);
  });

  it("should refuse action if the orientation is not one of the understood four compass headings", () => {
    expect(explore(testInvalidOrientationScenario)).toEqual(
      expectedInvalidOrientationResult
    );
  });
});
