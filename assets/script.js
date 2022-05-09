var weatherAPIURL = "https://api.openweathermap.org";
var weatherAPIKey = "1e79202b86812f5f0356dc3a96059c6f";

var citySearch = document.querySelector("#city-search");
var textInput = document.querySelector("#text-input");

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
    event.preventDefault()
    var textTrim = textInput.value.trim();
    console.log(textTrim)
    let APIURL = `${weatherAPIURL}/geo/1.0/direct?q=${textTrim}&limit=5&appid=${weatherAPIKey}`

    fetch(APIURL)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            callWeatherAPI(data[0])
            console.log("data", data)
        })

}



citySearch.addEventListener("submit", callWeatherAPICords)