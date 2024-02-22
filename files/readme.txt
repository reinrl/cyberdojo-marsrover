
The instructions for this exercise can be found here
https://code.google.com/archive/p/marsrovertechchallenge/

Mars Rover technical Challenge

The problem below requires some kind of input. You are free to implement any mechanism for feeding input into your solution (for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.

We highly recommend using a unit testing framework such as JUnit or NUnit. Even if you have not used it before, it is simple to learn and incredibly useful.

The code you write should be of production quality, and most importantly, it should be code you are proud of.

MARS ROVERS

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

Output:

The output for each rover should be its final co-ordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E


Product Owner Clarifications:
Q: What happens if the controller is bad and makes the rover run out of bounds?
A: it's a plateau, so I would say the rover falls off altogether and its coordinates are "indeterminate - out of bounds" (as opposed to some sort of vertical lift or sinkhole scenario which would be an "indeterminate - ungrounded" or something)

Q: Can we assume that more than one rover can fit within a single coordinate? If they cannot, should we skip the M action, or make them both "indeterminate - collision", etc.?
A: I say they can co-reside the same quadrant, like some sort of stacked turtle situation

do as many of the following as possible:
Edit the rover code such that the second rover to arrive at an occupied square would revert back to its previous location and skip that instruction.
Edit the rover code such that instead of falling off of the edge, any instruction that would have resulted in falling off would instead be ignored/skipped, and the rover would remain in it's current position/orientation.
Edit the rover code such that instead of falling off of the edge, it makes a 90 degree turn to the right, and do the move in that direction instead of the original orientation.
Edit the rover code such that the rovers are in love, but it's a toxic romance, as soon as they are in adjacent squares they both die to spend the rest of eternity next to each other on the red planet. Neither of them knows where the other rover is at any time (until its too late obviously). One is named Romeo, and the other is named Juliet. There is also a third rover that is evil named Tybalt intent on finding Juliet to return her to orbit - when Tybalt lands on a square adjacent to Juliet they ascend into space and Romeo is left to wander alone.
 
The star-crossed rovers also have special abilities:
Romeo can emit noises from a distance to ascertain Juliet's location. One of his moves can be spent sending a signal in the direction of his orientation to serenade his love, if Juliet is in that direction he can adjust the next move in his instructions.
Juliet can power down and sleep, pretending to be incapacitated, thus causing Tybalt to leave Mars and leave Juliet and Romeo to find each other unencumbered.
If Romeo serenades Juliet while she is asleep, he instantly self-destructs out of grief (fearing her to be incapacitated).
 
You win the simulation if Romeo and Juliet find each other - all other results are failure.