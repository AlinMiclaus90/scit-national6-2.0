console.log("JavaScript - DigitalClock");

let seconds = 00;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 00;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 00;
const hoursParagraphs = document.querySelectorAll(".hours p");


document.getElementById("start-btn").addEventListener("click", startFunction);

document.getElementById("stop-btn").addEventListener("click", stopInterval);

document.getElementById("reset-btn").addEventListener("click", resetClock);

document.getElementById("save-btn").addEventListener("click", function() {
  const savedTime = document.createElement("p");
  savedTime.innerHTML = `${hours}:${minutes}:${seconds}`;
  document.body.appendChild(savedTime);
});

//  function startFunction() { 

// let interval;

  function startFunction() {
  interval = setInterval(function() {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);

  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }
}, 100);
  }

function stopInterval() {
  clearInterval(interval);
};

function resetClock() {
// i can't see anymore the video solution, and i don't know if at reset button the clock keep counting or it is 
// stopped. if it still count i need to comment or delete sto
stopInterval();
seconds = 00;
minutes = 00;
hours = 00;
console.log(seconds,minutes,hours);
renderDigits(seconds, secondsParagraphs);
renderDigits(minutes, minutesParagraphs);
renderDigits(hours, hoursParagraphs);
};



function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}











