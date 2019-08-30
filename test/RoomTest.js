var assert = require('chai').assert
var Room = require('./Room');


describe("Room", function() {
    it("creates a grid based on x y coordinates", function() {
        room = new Room(2, 2);
        assert.isArray(room.grid, "does not return an array")
        assert(room.grid.length === 2)
        assert(room.grid[0].length === 2)
    });
});

// describe("Hoover", function() {
//     it("spawns a hoover", function() {
//     // room = new Room(5, 5, 1, 2)
//     // expect(room.grid[1][2]).toEqual("H")
//     // console.log(room.grid)
//     })
// })
