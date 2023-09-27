let searchBarEl = document.querySelector('#searchBar');
let searchFormEl = document.querySelector('#searchForm');
let searchHistoryEl = document.querySelector('#searchHistory');
let currentSearchEl = document.querySelector('#current-weather');
let forecastContainerEl = document.querySelector('#forecast-container');
let apiKey = process.env.weatherApiKey

function getApi() {
    let city = document.getElementById('search-bar').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let lat = data.coord.lat
            let lon = data.coord.lon
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
// function getForecastData(lat, lon) {
//     // Use the OpenWeatherMap API to fetch forecast data for the city
//     const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//             // Display forecast information (e.g., daily or hourly forecast)
//             const forecast = document.getElementById('forecast');
//             forecast.innerHTML = `
//                 <!-- Display forecast data here -->
//             `;
//         })
//         .catch((error) => {
//             console.error('Error fetching forecast data:', error);
//         });
// }

// function saveToSearchHistory(city) {
//     // Save the searched city to the search history
//     const searchHistory = document.getElementById('searchHistory');
//     const listItem = document.createElement('li');
//     listItem.textContent = city;
//     searchHistory.appendChild(listItem);
// }
submitEl.addEventListener('click', getApi);
