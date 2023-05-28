var socket = io();
let side = 15
var n = 10;
var m = 12;
matrix = [];

function setup() {
    // frameRate(10);
    createCanvas(2000, 1500);
    background('grey');
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < m; j++) {
            var rand = Math.floor(random(2))
            matrix[i].push(rand)
        }
    }
}
socket.on("send matrix", my_draw)
function my_draw(matrix) {

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
            else if (matrix[y][x] == 7) {
                fill("white")
            }
            else if (matrix[y][x] == 8) {
                fill("blue")
            }

            rect(x * 50, y * 50, 50, 50);
        }

    }
}











// socket.on("initial", function(data){
//     matrix = data
//     return matrix 
// })


// socket.io("send matrix", function(matrix){
//     drawing(matrix)
// })