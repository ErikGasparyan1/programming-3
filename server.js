var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);


var grassArr = [];
var grassEaterArr = [];
var gshArr = [];
var virusArr = [];
var antivirusArr = [];
var bombArr = [];

const Class = require("./class")
const GrassEater = require("./GrassEater")
const gsh = require("./gsh")
const antivirus = require("./antivirus")
const virus = require("./virus")


function drawing() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("brown")
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("cyan")
            }
            else if (matrix[y][x] == 6) {
                fill("black")
            }

            rect(x * side, y * side, side, side);
        }
    }
    
    function drawGame(){
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in gshArr) {
        gshArr[i].eat();
    }
    for (var i in virusArr) {
        virusArr[i].eat();
    }
    for (var i in antivirusArr) {
        antivirusArr[i].eat();
    }
    for (var i in bombArr) {
        bombArr[i].start();
    }
}

}

createCanvas()
setInterval(function()  {
    drawGame()
}, 1000);

io.on('connection', function(socket){
    socket.emit("initial", matrix)
    socket.emit("send matrix", matrix)
})
