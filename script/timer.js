let hour = 0;
let min = 0;
let sec = 0;
let interval;

export function twoDigits(digit) {
    if (digit < 10){
        return ("0" + digit);
    }
    else {
        return (digit);
    }
};

export function start () {
    timer();
    interval = setInterval(timer, 1000);
};

export function pause () {
    clearInterval(interval);
};
document.getElementById('btnFinish').addEventListener('click', timer);

export function timer (){
    sec++;
    if (sec == 60){
        min ++;
        sec = 0;
        if (min == 60) {
            hour ++;
            min = 0;
        }
    }
    document.querySelector("#timer").innerText = twoDigts(hour) + ":" + twoDigits(min)+ ":" + twoDigits(sec);
};
document.getElementById('btnStart').addEventListener('click', timer);