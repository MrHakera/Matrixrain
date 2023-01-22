var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let y=50

let ctx = canvas.getContext("2d");
function drow() {
 if (y>canvas.height){
    y=0;
 }
 
    y += 50;
    blackTush()
    writeAsSymbol();
}

function blackTush() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function writeAsSymbol() {
    ctx.fillStyle = "#0F0";
    ctx.front = "50px serif";
    ctx.fillText(randomMatrixSymbol(), 30, y);
}
setInterval(drow, 100);

function randomMatrixSymbol() {
    const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  