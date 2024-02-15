const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondsHand = document.getElementById('secondHand')
const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timerElement = document.getElementById('timer');
const result=document.getElementById('result');
const clock=document.querySelector('.timer');
let intervalId;
let quoteEl=document.getElementById('quote');
const quotes=[
'On the Way',
'Never disrespect yourself',
'Never Give Up',
'Look for yourself',
'No Pain No Gain',
'Trust Your Journey',
'Trust the process',
'Failing means not to give up, it means learn to stand up',
'Try again anf again one day you will used to it',
'never regret anything'
];


function resetTimer(){
    clearInterval(intervalId);
    hoursEl.textContent='00';
    minutesEl.textContent='00';
    secondsEl.textContent='00';
}


function setDate() {
    const date = new Date();
    let seconds = date.getSeconds();
    let seecondDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${seecondDegrees}deg)`;
    let minute = date.getMinutes();
    let minuteDegrees = (minute / 60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    let hours = date.getHours();
    let hourdegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourdegrees}deg)`
}
setInterval(setDate, 1000);
function updateTimer(hours, minutes, seconds) {
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}
function setTimer(event) {
    quoteEl.textContent=quotes[Math.floor(Math.random()*10)]
    let timerString = timerElement.value;
    console.log((timerString))
    let [hours, minutes, seconds] = timerString.split(':');
    clearInterval(intervalId);
    result.textContent='';

     intervalId = setInterval(() => {
        let mins = parseInt(minutes);
        let secs = parseInt(seconds);
        let hous = parseInt(hours);
        if(secs==10){
            result.classList.add('warning');
            clock.classList.add('warning');
            
            result.textContent='Hurry!!!';
        }
        if (secs === 0 && mins == 0 && hous == 0) {
            clearInterval(intervalId);
            result.classList.remove('warning')
            clock.classList.remove('warning');
            result.textContent='Time is UP!!!';
        }
        else {
            if (secs === 0 && mins!==0) {
                mins=mins-1;
                secs=60;
            }
           else if(secs===0 && hous!==0 && mins===0){
                secs=60;
                mins=59;
                hous=hous-1;
            }
            secs -= 1;
            if (secs === 0 && mins != 0) {
                mins -= 1;
            }
            if (mins == 0 && hous != 0) {
                hous -= 1;
            }
            seconds = secs;
            minutes = mins;
            hours = hous;
            updateTimer(hours, minutes, seconds);
        }
    }, 1000)
    timerElement.value='00:00:00';
}
startBtn.addEventListener('click', setTimer);
function stopTimer(){
    clearInterval(intervalId);
   
}
resetBtn.addEventListener('click',resetTimer)