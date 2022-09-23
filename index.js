var bTop = 0;
var bLeft = 0;
var aTop = Math.random();
var aLeft = Math.random();

var X = 1;
var Y = 1;
var ball = document.getElementsByClassName("tron")[0];
var box = document.getElementsByClassName("box")[0];
var apple = document.getElementsByClassName("apple")[0];
var anh = document.getElementsByClassName("imgMa")[0];

var thoiGian;
var count = 0;

function play() {

    if(bLeft + ball.offsetWidth >= box.offsetWidth || bLeft<0){
    X = -X;
    }else if(bTop + ball.offsetHeight >= box.offsetHeight || bTop<0) 
    {
    Y = -Y;
    }

    bTop += Y;
    bLeft += X;

if (bTop + ball.offsetHeight == aTop || bLeft + ball.offsetWidth == aLeft){
    apple.style.top = (Y + Math.random())*10; 
    apple.style.left = (X + Math.random())*10;             
}
    ball.style.top = bTop;
    ball.style.left = bLeft;

    thoiGian = setTimeout("play()",1);
    // anhma();
}

function anhma() {
    count++;
    if(count<5){
        document.getElementById("vungChua").innerHTML = '<div>'+"Tốc độ đã được tăng lên x"+count+'</div>'
    }
    else if(count>=5){
        anh.src = "./image/1.jpg";
        anh.style.display = "block";

    }
}

function stop() {
    clearTimeout(thoiGian);
}

function reset() {
    bTop = 0;
    bLeft = 0;
    ball.style.top = bTop;
    ball.style.left = bLeft;
}