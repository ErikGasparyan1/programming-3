var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000, function (){
    console.log("Example is runing on port 3000")
});

var side = 15;
matrix = [];
var a = 55;
var b = 70;

function kerparner(qanak, kerpar) {
    var p = 0;
    while (p < qanak) {
        var k = Math.floor(Math.random()*a)
        var l = Math.floor(Math.random()*b)
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


const Grass = require("./modules/class")
const GrassEater = require("./modules/GrassEater")
const Gishatich = require("./modules/gsh")
const Antivirus = require("./modules/antivirus")
const Virus = require("./modules/virus")
const Bomb = require("./modules/bomb")

io.on('connection', function(socket){
    // socket.emit("initial", matrix)
    // socket.emit("send matrix", matrix)
})

function creatObject(){    
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
                else if (matrix[y][x] == 8) {
    
                }
            }
        }
    }
    creatObject()
       
    console.log(grassArr)

    function Game(){
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
            io.sockets.emit("send matrix", matrix)
    }



    setInterval(Game, 1000)
// function drawing() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow")
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("brown")
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("red")
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("cyan")
//             }
//             else if (matrix[y][x] == 6) {
//                 fill("black")
//             }

//             rect(x * side, y * side, side, side);
//         }
//     }
// }

// function createCanvas(){
//     for (let i = 0; i < a; i++) {
//         matrix.push([]);
//         for (let j = 0; j < b; j++) {
//             matrix[i].push(0);

//         }
//     }
// }

// function drawGame(){
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }
//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat();
//     }
//     for (var i in gshArr) {
//         gshArr[i].eat();
//     }
//     for (var i in virusArr) {
//         virusArr[i].eat();
//     }
//     for (var i in antivirusArr) {
//         antivirusArr[i].eat();
//     }
//     for (var i in bombArr) {
//         bombArr[i].start();
//     }
// }


// createCanvas()
// setInterval(function()  {
//     drawGame()
// }, 5000);

