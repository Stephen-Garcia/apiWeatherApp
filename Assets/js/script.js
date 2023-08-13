let searchBarEl = document.querySelector('#searchBar');
let searchFormEl = document.querySelector('#searchForm');
let searchHistoryEl = document.querySelector('#searchHistory');
let currentSearchEl = document.querySelector('#current-weather');
let forecastContainerEl = document.querySelector('#forecast-container');

var apiKey = "a4bf9990bcf9632efd2074e14211ea95"
function getApi() {
    var city = document.getElementById('search-bar').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lat = data.coord.lat
            var lon = data.coord.lon
            searchApi(lat, lon)
        })
};
function searchApi(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
};

submitEl.addEventListener('click', getApi);
