var x = document.getElementById("slideshowImg");
var previousSlide = document.getElementById("previousSlide");

var images = ['/images/black.png', '/images/red.png', '/images/white.png', '/images/yellow.png'];

var y = 0;

function changeImg() {
    x.src = images[y];
    
    if(y < images.length - 1){
        y++;
    } else {
        y = 0;
    }

    setTimeout("changeImg()", 10000);
}

window.onload = changeImg;

previousSlide.onclick = previousSlideClick;

function previousSlideClick(){
    console.log(y);
    y = y--;
    console.log(y);
}