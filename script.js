var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
 
 function hitval(){
     hitrn = Math.floor(Math.random()*10);

    document.querySelector("#hitvalue").textContent = hitrn;
 }

function makeBubble(){
var clutter ="";

for(var i=1; i<=152;i++){
    var v = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${v}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runtimer(){
     var timerint = setInterval(() => {
        if(timer>0){
        timer--;
    document.querySelector("#timerun").textContent= timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Well Done Game Over ! <br> Your Score is : ${score} </h1>`
        }
     }, 1000);
}
  
document.querySelector("#pbtm").addEventListener("click",function(detail){
    var clickednum = Number(detail.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        hitval();
        makeBubble();
    }
});

hitval();
runtimer();
makeBubble();