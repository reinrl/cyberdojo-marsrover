"use strict";

/*
 gridSize = { xMax: , yMax: }
 roverPosition = { x: , y: }
*/
function isOnTheMap(gridSize, roverPosition) {
  // CHAINING WHAT??!?!?!?!
  //return 0 <= roverPosition.x <= gridSize.xMax && 0 <= roverPosition.y <= gridSize.yMax;

  if (roverPosition.x < 0 || roverPosition.x > gridSize.xMax) {
    return false;
  } else if (roverPosition.y < 0 || roverPosition.y > gridSize.yMax) {
    return false;
  } else {
    return true;
  }
}

function moveRover(roverPosition) {
  let newRoverPosition = Object.assign({}, roverPosition);

  switch (roverPosition.orientation) {
    case "N":
      newRoverPosition.y++;
      break;
    case "E":
      newRoverPosition.x++;
      break;
    case "S":
      newRoverPosition.y--;
      break;
    case "W":
      newRoverPosition.x--;
      break;
    default:
      newRoverPosition = "indeterminate - invalid orientation";
      break;
  }

  return newRoverPosition;
}

function turnRover(roverPosition, instruction) {
  const possibleOrientations = ["N", "E", "S", "W"];

  // find our current orientation in the list
  const currentOrientationIndex = possibleOrientations.findIndex(
    (orientation) => orientation === roverPosition.orientation
  );

  let newOrientation = currentOrientationIndex;
  switch (instruction) {
    case "L":
      newOrientation = currentOrientationIndex - 1;
      break;
    case "R":
      newOrientation = currentOrientationIndex + 1;
      break;
    default:
      break;
  }

  return {
    x: roverPosition.x,
    y: roverPosition.y,
    // adjust for wrapping our trip through the possible orientations (in either direction)
    orientation: possibleOrientations[(newOrientation + 4) % 4],
  };
}

function processInstruction(roverPosition, instruction) {
  if (instruction === "M") {
    return moveRover(roverPosition);
  }

  return turnRover(roverPosition, instruction);
}

function explore(mission) {
  const numberOfSteps = mission.roverList[0].instructions.length;
  // one small step for rover kind...
  for (let i = 0; i < numberOfSteps; i++) {
    // loop through the roverList, moving them based on their provided instructions one at a time
    mission.roverList.forEach((rover, roverIdx) => {
      if (rover.position !== "indeterminate - out of bounds") {
        // do the instruction per Space Force direction
        const proposedPos = processInstruction(
          rover.position,
          rover.instructions.substring(0, 1)
        );

        const isOccupied = mission.roverList.some(
          (thatRover, thatRoverIdx) =>
            thatRover.position.x === proposedPos.x &&
            thatRover.position.y === proposedPos.y &&
            roverIdx !== thatRoverIdx
        );

        // we can only move to empty spaces
        if (!isOccupied) {
          rover.position = proposedPos;
        }
      }

      // this instruction has been processed, so remove it
      rover.instructions = rover.instructions.substring(1);

      // check the out of bounds and short-circuit if we are
      if (!isOnTheMap(mission.gridSize, rover.position)) {
        rover.position = "indeterminate - out of bounds";
      }
    });
  }

  return mission.roverList;
}

module.exports = explore;
