# Robotic Hoover
> A test program that navigates an imaginary robotic hoover through an imaginary room

## Specifications

* Room dimensions are given as x and y coordinates, forming a grid with these maximum dimensions
    * ie the bottom left corner will be (0, 0) and the top right corner with be (x, y)
    * All rooms are regular quadrilaterals that contain no obstacles
* Initial hoover position is given as X and Y coordinates
    * The hoover is always on with no need to enable it
    * The robot will skid in place if it hits a wall
* Dirt positions are given as X and Y coordinates
    * The room is considred clean except for patches of dirt
    * Dirt is removed if the hoover arrives at the coordinates of the dirt
* Driving instructions will be given as the initial letters of the cardinal directions (N, E, S, W)

## Test cases
Input | Output
-|-
5 5 | 1 3
1 2 | 1
1 0 |  
2 2 | 
2 3 | 
NNESEESWNWW | 
* Input
    * All X Y coordinates will be given as 2 integers with a separated by a single space
    * First line of input is Grid dimensions
    * Second line of input is the hoover starting position
    * Subsequent lines contain zero or more dirt positions
    * Final line always contains one or more driving instructions

* Output
    * Should be logged to the browser console with `console.log()`
    * First line of output is the X Y coordinates of the hoover after processing all commands
    * Second line of the program displays how many patches of dirt were cleaned
## Installation

## Usage