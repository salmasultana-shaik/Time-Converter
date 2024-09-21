let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");



let convertHoursToseconds = function() {
    let hoursInputVal = hoursInputEl.value;
    let minutesInputVal = minutesInputEl.value;

    let result = ((parseInt(hoursInputVal) * 3600) + (parseInt(minutesInputVal) * 60))

    timeInSecondsEl.textContent = result + "s";
    timeInSecondsEl.classList.add("time-in-seconds");

    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please Enter a valid number of  hours"
        timeInSecondsEl.textContent = ""
        timeInSecondsEl.classList.remove("time-in-seconds");
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please Enter a valid number of  minutes"
        timeInSecondsEl.textContent = ""
        timeInSecondsEl.classList.remove("time-in-seconds");
    } else {
        timeInSecondsEl.textContent = result + "s";
        timeInSecondsEl.classList.add("time-in-seconds");
        errorMsgEl.textContent = ""
    }

}

convertBtnEl.addEventListener("click", convertHoursToseconds);
