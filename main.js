
//selector variables
var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

// Navigation links
var homeLink = document.querySelector("#home-link");
var aboutLink = document.querySelector("#about-link");
var homeSection = document.querySelector("#home");
var aboutSection = document.querySelector("#about");


var apik = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celcius
function convertion(val) {
  return (val - 273).toFixed(2);
}

//fetch weather data and display it
function fetchWeatherData() {
 
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"][0]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];
      var hum = data["main"]["humidity"];

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertion(tempature)} C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
      humidity.innerHTML = `Humidity: ${hum}%`;
    })
    .catch((err) => alert("You entered the wrong city name"));
}

// Event listeners
btn.addEventListener("click", fetchWeatherData);
homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  homeSection.scrollIntoView({ behavior: "smooth" });
});

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
