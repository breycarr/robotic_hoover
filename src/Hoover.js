class Room {
    constructor(x, y) {
        this.grid = createRoom(x, y);
    }
}

var createRoom = (x, y) => {
    map = []
    for (var i = 0; i < y; i++) {
        map.push(new Array(x))
    }
    return map
}