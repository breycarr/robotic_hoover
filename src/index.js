var fs = require("fs");
var Room = require('../lib/Room')

fs.readFile('./src/input.txt', (err, data) => { 
    if (err) throw err; 
  
    var input, directions, roomDimensions, hoover, dirt, cleaned

    data = data.toString().split("\n")
    directions = data.pop().split("")
    roomDimensions = data[0].split(" ").map(Number)
    hoover = data[1].split(" ").map(Number)
    dirt = data.slice(2)

    // create the room as a grid
    room = new Room(roomDimensions[0], roomDimensions[1])

    // for each element in the dirt array, add that dirt to the coordinates
    for (i = 0; i < dirt.length; i++) {
        position = dirt[i].split(" ").map(Number)
        room.grid[position[0]][position[1]] = "d"
    }

    // Add the hoover to it's starting coordinates
    room.grid[hoover[0]][hoover[1]] = "h"

    // set a variable for number of cleaned pieces of dirt
    cleaned = 0
    
    // implement the direction by altering the hoover coordinates
    directions.forEach(element => {
        if (element === "N") {
            if (hoover[0] > 0) {
                hoover[0] -= 1
            }
        } else if (element === "S") {
            if (hoover[0] < 5) {
                hoover[0] += 1
            }
        } else if (element === "W") {
            if (hoover[1] > 0) {
                hoover[1] -= 1
            }
        } else if (element === "E") {
            if (hoover[1] < 5) {
                hoover[1] += 1
            }
        }
        if (room.grid[hoover[0]][hoover[1]] === "d") {
            cleaned += 1
        }
        room.grid[hoover[0]][hoover[1]] = "h"

    });

    // The final position of the hoover and number of spaces cleaned is logged to the console
    console.log(hoover[0] + " " + hoover[1])
    console.log(cleaned)
}) 

