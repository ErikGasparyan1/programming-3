var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log("Example is runing on port 3000")
});

var side = 15;
matrix = [];
var a = 55;
var b = 70;
var grassCount = 10;
var grassEaterCount = 20;

function kerparner(qanak, kerpar) {
    var p = 0;
    while (p < qanak) {
        var k = Math.floor(Math.random() * a)
        var l = Math.floor(Math.random() * b)
        if (matrix[k][l] == 0) {
            matrix[k][l] = kerpar
        }
        p++;
    }
}
for (let i = 0; i < a; i++) {
    matrix.push([]);
    for (let j = 0; j < b; j++) {
        matrix[i].push(0);

    }
}

kerparner(30, 2);
kerparner(300, 1);
kerparner(40, 3);
kerparner(40, 4);
kerparner(25, 5);
kerparner(12, 6);



grassArr = [];
grassEaterArr = [];
gshArr = [];
virusArr = [];
antivirusArr = [];
bombArr = [];
weatherArr = [];
waterArr = [];

const Grass = require("./modules/class")
const GrassEater = require("./modules/GrassEater")
const Gishatich = require("./modules/gsh")
const Antivirus = require("./modules/antivirus")
const Virus = require("./modules/virus")
const Bomb = require("./modules/bomb")
const weather = require("./modules/weather");
const water = require("./modules/water");

io.on('connection', function (socket) {
    // socket.emit("initial", matrix)
    // socket.emit("send matrix", matrix)
})

function creatObject() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y, 3)
                gshArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var virus = new Virus(x, y, 4)
                virusArr.push(virus)
            }
            else if (matrix[y][x] == 5) {
                var antivirus = new Antivirus(x, y, 5)
                antivirusArr.push(antivirus)
            }
            else if (matrix[y][x] == 6) {
                var bomb = new Bomb(x, y, 6)
                bombArr.push(bomb)
            }
            else if (matrix[y][x] == 7) {
                var weather = new weather(x, y, 7)
                weatherArr.push(weather)
            }
            else if (matrix[y][x] == 7) {
                var waer = new water(x, y, 7)
                waterArr.push(water)
            }
        }
    }
}
creatObject()


function Game() {
    console.log(bombArr);
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
        antivirusArr[i].die();
    }
    for (var i in bombArr) {
        bombArr[i].start();
    }
    for (var i in weatherArr ) {
        weatherArr[i].move();
    }
    for (var i in waterArr ) {
        waterArr[i].move();
    }
    io.sockets.emit("send matrix", matrix)
}



setInterval(Game, 500)

// function createCanvas(){
//     canvas.width = 1000;
//     canvas.height = 1000;
// }






// createCanvas()
// setInterval(function()  {
//     drawGame()
// }, 5000);

