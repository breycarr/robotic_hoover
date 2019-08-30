describe("Room", function() {
    it("creates a grid based on x y coordinates", function() {
        room = new Room(2, 2);
        expect(room.grid).toContain(Array(2), Array[2])
    });
});
