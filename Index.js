//Counter value from localstorage
let counter = localStorage.getItem("counter");
document.getElementById("visitorsCount").innerHTML = counter;

if (counter === null) {
  counter = 0;
  localStorage.setItem("counter", counter);
}

document.getElementById("visitors").addEventListener("click", incrementNum);

function incrementNum() {
  counter = ++counter;
  localStorage.setItem("counter", counter);

  document.getElementById("visitorsCount").innerHTML = counter;
}

//Getting date and time
let date = new Date();
let day = date.getDate();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let todaysMonth = months[date.getMonth()];

let todaysYear = date.getFullYear();

document.getElementById("todaysDate").innerHTML =
  day + " " + todaysMonth + " " + todaysYear;
