class Room{
    constructor(x, y) {
        this.grid = createRoom(x, y);
    }
}

var createRoom = (x, y) => {
    map = []
    for (var i = 0; i < y + 1; i++) {
        map.push(new Array(x + 1))
    }
    return map
}

module.exports = Room