var weatherAPIURL = "https://api.openweathermap.org";
var weatherAPIKey = "1e79202b86812f5f0356dc3a96059c6f";

var citySearch = document.querySelector("#city-search");
var textInput = document.querySelector("#text-input");
var currentWeather = document.querySelector("#city-display");
var fiveDay = document.querySelector("#five-day");

function weatherToday(data) {
    console.log(data)
    var uvi = data.current.uvi
    var cityName = document.createElement("h1")
    var currentTemp = document.createElement("p")
    var windSpeed = document.createElement("p")
    var currentHumidity = document.createElement("p")
    var uvButton = document.createElement("btn")
    var uvIndex = document.createElement("p")
    cityName.textContent = textInput.value.trim();
    currentTemp.textContent = `Temp: ${data.current.temp}°F`
    windSpeed.textContent = `Wind: ${data.current.wind_speed} MPH`
    currentHumidity.textContent = `Humidity: ${data.current.humidity} %`
    currentWeather.append(cityName, currentTemp, windSpeed, currentHumidity)
    uvIndex.textContent = `UV Index: `
    
    if (uvi < 3){
        uvButton.classList.add("btn-success")
    }
    else if (uvi < 7){
        uvButton.classList.add("btn-warning")
    }
    else{
        uvButton.classList.add("btn-danger")
    }

    uvButton.textContent = uvi
    uvIndex.append(uvButton)
    currentWeather.append(uvIndex)

function fDayForcast(data) {
    var uvi = data.current.uvi
    var cityName = document.createElement("h1")
    var fiveTemp = document.createElement("p")
    var fiveWindSpeed = document.createElement("p")
    var fiveHumidity = document.createElement("p")
    var uvButton = document.createElement("btn")
    var uvIndex = document.createElement("p")
    cityName.textContent = textInput.value.trim();
    fiveTemp.textContent = `Temp: ${data.daily.temp.day}°F`
    fiveWindSpeed.textContent = `Wind: ${data.daily.wind_speed} MPH`
    fiveHumidity.textContent = `Humidity: ${data.daily.humidity} %`
    fiveDay.append(cityName, currentTemp, windSpeed, currentHumidity)
    uvIndex.textContent = `UV Index: `
    
    if (uvi < 3){
        uvButton.classList.add("btn-success")
    }
    else if (uvi < 7){
        uvButton.classList.add("btn-warning")
    }
    else{
        uvButton.classList.add("btn-danger")
    }

    uvButton.textContent = uvi
    uvIndex.append(uvButton)
    fiveDay.append(uvIndex)
}

}

function callWeatherAPI(info) {
    var lat = info.lat
    console.log("info", info)
    var lon = info.lon
    console.log("info.lon", info.lon)
    var city = info.name
    let APIURL = `${weatherAPIURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherAPIKey}`;
    fetch(APIURL)
        .then(function (res) {
            console.log (res.json())
        })
}

function callWeatherAPICords(event) {
    let APIURL = `${weatherAPIURL}/geo/1.0/direct?q=${textTrim}&limit=5&appid=${weatherAPIKey}`

    fetch(APIURL)
        .then(function (res) {
            if (response.ok) {

            
            return res.json()
        .then(function (data) {
            callWeatherAPI(data[0])
            console.log("data", data)
        })
} else {
    alert ("No Results")
}


//recent search history section

var saveHistory = function(city) {

}

var loadHistory = function(city) {
    localStorage.setItem("city", city);
}

$(document).ready(loadHistory);

citySearch.addEventListener("submit", callWeatherAPICords);
document 
    .querySelector("#history")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let city = event.target.dataset.search;
        callWeatherAPICords(city);
    })})};