// declaring our variables
let timer; // stores  the reference to the interval timer that updates the stopwatch display
let time = 0; // stores the counting time in seconds

// we're gonna need a function to actually make the watch start and stop 
// let's call it startStop 
function startStop() {
    // creating a condition to do stuff depending on the current state of the watch
    if (timer) { //if the timer is running:
        clearInterval(timer); // this will stop the watch
        timer = null; // then we nullify the timer variable which stops the watch entirely

 // by accessing the button using its unique ID created in HTML file, we can change it so that the button now says START once the stopwatch isn't running
  document.getElementById("startStop").textContent = "START";

//   this is how we make the watch start. setInterval() is used to create a new timer and update the display every '1000' millisecond, or every second
    } else { 
        timer = setInterval(updateDisplay, 1000); 

//   then, we change the button so it says STOP once it is already running.
document.getElementById("startStop").textContent = "STOP";

// the startStop() function changes the state of the watch between "on" and "off", so now we can affect the watch by clicking the same button
    }
}

// now that we have a function that makes it work, let's make a new function that makes this visible to the user
// how do we make the screen move in real time?

function updateDisplay() {
    time++;  // this will represent each time a second passes
    const hours = Math.floor(time / 3600); // of course, an hour is 3600 seconds
    const minutes = Math.floor(time % 3600 / 60); // once we have enough seconds to make an hour, any remaining are divided by 60 to become minutes
    const seconds = time % 60; // obviously, whatever remains will be represented as a second

    // let's format the display to read as hours:minutes:seconds
    document.getElementById("display").textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // `` represents a template literal
    // ${} is  used to place expressions within template literals
    //  String(hours) essentially converts the value of 'hours' to a string
    // .padStart(2, '0') will pad the string with "0" characters until it reaches a length of 2. for example 5 hours will be padded as 05 hours instead
}

// we also need a function that will cause the watch to reset. how can we do this?

function reset() {
    clearInterval(timer); // this is a method to stop the timer from ticking
    timer = null; // removes all references to the timer
    time = 0;
    document.getElementById("display").textContent = "00:00:00"; // reflect that the watch has been reset
    document.getElementById("startStop").textContent = "START"; 

}

// lastly, we need to add event listeners which make the buttons do stuff when they are clicked.

//this will execute the startStop function whenever the start/stop button is clicked
document.getElementById("startStop").addEventListener("click", startStop);

//this will trigger the reset function when the reset button is clicked
document.getElementById("reset").addEventListener("click", reset);

// trying to make the colors of the buttons change here:

// creating references to each button here:
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

