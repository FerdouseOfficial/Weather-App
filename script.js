let button = document.getElementById("submit");
let input = document.getElementById("userInput");

let cityName = document.getElementById("cityName");
let cityTime = document.getElementById("cityTime");
let cityTemp = document.getElementById("cityTemp");

async function getData(city) {
  let promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8187652ff5d34a8283a123118250810&q=${city}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  let value = input.value;
  let result = await getData(value);
});
