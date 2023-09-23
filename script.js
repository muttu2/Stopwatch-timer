let btn = document.getElementsByTagName('button');
let h1Element = document.getElementsByTagName('h1')
console.log(btn.text)
console.log(h1Element[0].innerHTML)

let h = 0;
let m = 0;
let s = 0;
let time;
let isTimer = false;
let isTimerSet = false;

function stopWatch(){
    stop();
    h1Element[0].innerHTML = "00:00:00";
    isTimerSet=false;
}


function timer(){
    stop();
    h1Element[0].innerHTML = "5m 00s";
    isTimerSet=true;
}

function clickStartStop() {
    if(isTimerSet){
        console.log("timer Started");
        if (isTimer) {
            stop();
            btn[2].innerHTML = "Start";
        } else {
            startTimer();
            btn[2].innerHTML = "Stop";
        }
        isTimer = !isTimer;
    }else{
        console.log("stopwatch started")
        if (isTimer) {
            stop();
            btn[2].innerHTML = "Start";
        } else {
            startWatch();
            btn[2].innerHTML = "Stop";
        }
        isTimer = !isTimer;
    }
}

function reStart(){
    clearInterval(time);
    h=0;
    m=0;
    s=0;
    if(isTimerSet){
        h1Element[0].innerHTML = "5m 00s";
    }else{
        h1Element[0].innerHTML = "00:00:00";
    }
    
}

function watch(){
    s=s-0;
    m=m-0;
    h=h-0;
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
        }
    }

    if(s<10){
        s="0" + s;
    }
    if(m<10){
        m="0"+m;
    }
    if(h<10){
        h="0"+h;
    }
    h1Element[0].innerHTML = h +":"+ m +":"+ s;
}

function countdown() {
    h=h-0;
    m=m-0;
    s=s-0;
    s--;

    if (s < 0) {
        s = 59;
        m--;

        if (m < 0) {
            m = 4;
            
            }
        }
    
    h1Element[0].innerHTML = m +"m "+ s+"s";
    
}

function startWatch(){
    time = setInterval("watch()", 1000)
}

function stop(){
    clearInterval(time);
}

function startTimer(){
    time = setInterval("countdown()", 1000)
}

btn[3].addEventListener('click', function(){
    isTimer=false;
    btn[2].innerHTML = "Start";     
})









