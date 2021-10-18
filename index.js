
let minutes = 00;
let seconds = 00;
let tens = 00;
const apendMinutes = document.querySelector("#minutes");
const apendSeconds = document.querySelector("#seconds")
const apendTens = document.querySelector("#tens")
const startButton = document.querySelector("#button-start");
const stopButton = document.querySelector("#button-stop");
const resetButton = document.querySelector("#button-reset")
let Interval;





const startTimer = () =>{
    tens++;
    if(tens <= 9){
        apendTens.innerHTML = "0" + tens
    }
    if(tens > 9){
        apendTens.innerHTML = tens
    }
    if(tens > 99){
        seconds++;
        apendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        apendTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        apendSeconds.innerHTML = seconds
    }
    if(seconds > 59){
        minutes = minutes + 1;
        apendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        tens = 0;
        apendSeconds.innerHTML = "0"  + seconds;
        apendTens.innerHTML = "0" + tens;
    }
}
const reset = () =>{
    clearInterval(Interval)
    tens = "00";
    seconds = "00";
    minutes = "00"
    apendTens.innerHTML = tens;
    apendSeconds.innerHTML = seconds
    apendMinutes.innerHTML = minutes;
}
const stop = () =>{
  if(Interval){
      clearInterval(Interval);
      Interval = null;
  }
}
startButton.addEventListener("click", function (){
    Interval = setInterval(startTimer,10)
}    
);
resetButton.addEventListener("click",reset)
stopButton.addEventListener("click",stop)