const LivingCreature = require("./LivingCreature");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 15;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        var newCell = this.random(this.chooseCell(2));
        if (newCell) {
            var newGSH = new Gishatich(newCell[0], newCell[1], this.index);
            gshArr.push(newGSH);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 15;
        }

    }

    eat() {
        let foods = this.chooseCell(2)
        let food = this.random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 20) {
                this.mul()
            }
        }
        else {
            this.move()
        }
        return this.random;
    }

    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = this.random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gshArr) {
            if (this.x == gshArr[i].x && this.y == gshArr[i].y) {
                gshArr.splice(i, 1);
                break;
            }
        }
    }
}