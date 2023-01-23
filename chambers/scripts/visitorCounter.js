// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage 
let numVisits = Number(window.localStorage.getItem("visits-today"));

visitsDisplay.textContent = numVisits;
// Increment++
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-today", numVisits);


let today = new Date().getDate();
let date = window.localStorage.getItem("date");
var days = window.localStorage.getItem("days");

// If <date> doesn't exist in the storage (isNull) it will create the storage with the current day and count the first visit. 
//Else it will review if the date does not equals to today, if it doesn't it will add a new visit to the counter and the update the storage with the current date.
if (!date) {
    localStorage.setItem("date", today);
    days = days + 1;
} else {
    if (date != today) {
        days = days + 1;
        localStorage.setItem("date", today);
    }
}

localStorage.setItem("days", days);
document.querySelector(".total-visits").textContent = days;


