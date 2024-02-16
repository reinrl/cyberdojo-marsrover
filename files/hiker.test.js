'use strict';

const explore = require('./hiker');

/*
Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E
*/
const testScenario = {
  gridSize: {
    xMax: 5,
    yMax: 5
  },
  roverList: [
    {
      position: {
        x: 1,
        y: 2,
        orientation: "N"
      },
      instructions: "LMLMLMLMM"
    },
    {
      position: {
        x: 3,
        y: 3,
        orientation: "E"
      },
      instructions: "MMRMMRMRRM"
    }
  ]
};

const expectedResults = [
  {
    position: {
      x: 1,
      y: 3,
      orientation: "N"
    },
    instructions: ""
  },
  {
    position: {
      x: 5,
      y: 1,
      orientation: "E"
    },
    instructions: ""
  }
];

const testOutOfBoundsScenario = {
  gridSize: {
    xMax: 5,
    yMax: 5
  },
  roverList: [
    {
      position: {
        x: 0,
        y: 0,
        orientation: "S"
      },
      instructions: "M"
    }
  ]
};

const expectedOutOfBoundsResult = [{
  position: "indeterminate - out of bounds",
  instructions: ""
}];

const testOutOfBoundsScenarioTwo = {
  gridSize: {
    xMax: 5,
    yMax: 5
  },
  roverList: [
    {
      position: {
        x: 5,
        y: 5,
        orientation: "N"
      },
      instructions: "M"
    }
  ]
};

const expectedOutOfBoundsResultTwo = [{
  position: "indeterminate - out of bounds",
  instructions: ""
}];


const testScenarioStacked = {
  gridSize: {
    xMax: 5,
    yMax: 5
  },
  roverList: [
    {
      position: {
        x: 1,
        y: 2,
        orientation: "N"
      },
      instructions: "MRMML"
    },
    {
      position: {
        x: 3,
        y: 3,
        orientation: "E"
      },
      instructions: "RRRRL"
    }
  ]
};

const expectedResultsStacked = [
  {
    position: {
      x: 3,
      y: 3,
      orientation: "N"
    },
    instructions: ""
  },
  {
    position: {
      x: 3,
      y: 3,
      orientation: "N"
    },
    instructions: ""
  }
];


const testInvalidOrientationScenario = {
  gridSize: {
    xMax: 5,
    yMax: 5
  },
  roverList: [
    {
      position: {
        x: 0,
        y: 0,
        orientation: "U"
      },
      instructions: "M"
    }
  ]
};

const expectedInvalidOrientationResult = [{
  position: "indeterminate - invalid orientation",
  instructions: ""
}];

describe('Mars Rover', () => {
  it('should navigate the plateau as expected', () => {
    expect(explore(testScenario)).toEqual(expectedResults);
  });
  
  it('should fall off the plateau as expected on the low end', () => {
    expect(explore(testOutOfBoundsScenario)).toEqual(expectedOutOfBoundsResult);
  });
  
  it('should fall off the plateau as expected on the high end', () => {
    expect(explore(testOutOfBoundsScenarioTwo)).toEqual(expectedOutOfBoundsResultTwo);
  });
  
  it('should be ok landing in the same place', () => {
    expect(explore(testScenarioStacked)).toEqual(expectedResultsStacked);
  });
  
  it('should refuse action if the orientation is not one of the understood four compass headings', () => {
    expect(explore(testInvalidOrientationScenario)).toEqual(expectedInvalidOrientationResult);
  });
});
