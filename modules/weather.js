const LivingCreature = require("./LivingCreature");

module.exports = class weather extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 20;
        return this.random;
    }
     

    
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
   
    eat() {
        let foods = this.chooseCell(4)
        let food = this.random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 7
            this.x = newX
            this.y = newY
            for (var i in weatherArr) {
                if (newX == weatherArr[i].x && newY == weatherArr[i].y) {
                  weatherArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 15) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCells0 = this.chooseCell(0)
        let emptyCells1 = this.chooseCell(1)
        let newCell0= this.random(emptyCells0)
        let newCell1 = this.random(emptyCells1)
        if (newCell0) {
            let newX0 = newCell0[0]
            let newY0 = newCell0[1]
            matrix[this.y][this.x] = 0
            matrix[newY0][newX0] = 7
            this.x = newX0
            this.y = newY0
        }
        if (newCell1) {
            let newX1 = newCell1[0]
            let newY1 = newCell1[1]
            matrix[this.y][this.x] = 1
            matrix[newY1][newX1] = 7
            this.x = newX1
            this.y = newY1
        }
        

        
    }
    mul() {
      this.multiply++;
      var newCell = this.random(this.chooseCell(0));
      if(this.multiply >= 7 && newCell) {
          var newWeather = new weather(newCell[0],newCell[1], this.index);
          weatherArr.push(newWeather);
          matrix[newCell[1]][newCell[0]] = this.index;
          this.multiply = 0;
      }
  }
}


    


      