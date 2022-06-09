const timeer=document.getElementById("time");

const start_btn=document.getElementById("Start");
const stop_btn=document.getElementById("Stop");
const reset_btn=document.getElementById("Reset");

var secs=0;
var interval=null;
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);
function timer(){
    secs++;
    var hours=Math.floor(secs/3600);
    var mins=Math.floor((secs-(3600*hours))/60);
    var seconds=secs%60;
    if(seconds<10) seconds='0'+seconds;
    if(mins<10) mins='0'+mins;
    if(hours<10) hours='0'+hours;
    timeer.innerHTML=hours+':'+mins+':'+seconds;
}

function start(){
    if(interval) return

    interval=setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    secs=0;
    timeer.innerHTML='00:00:00';
}



