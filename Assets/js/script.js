let searchBarEl = document.querySelector('#searchBar');
let searchFormEl = document.querySelector('#searchForm');
let searchHistoryEl = document.querySelector('#searchHistory');
let currentSearchEl = document.querySelector('#current-weather');
let forecastContainerEl = document.querySelector('#forecast-container');
let apiKey = "7670742b1c1eef7da9a58716d6ae2f97"

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

submitEl.addEventListener('click', getApi);




// document.getElementById('recipe-search-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const query = searchNutritionEl.value;
//     const dietaryPreference = document.getElementById('dietary-preference').value;

//     getRecipes(query, dietaryPreference);
// });


// submitEl.addEventListener('click', getRecipes);

// function getApi(city) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             var lat = data.coord.lat;
//             var lon = data.coord.lon;
//             searchApi(lat, lon, city);
//         });
// }


// function searchApi(lat, lon, city) {
//     fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             displayWeather(data, city);
//         });
// }


// function displayWeather(data, city) {
//     var currentWeather = data.list[0];
//     currentWeatherEl.innerHTML = `
//         <h2>${city} (${new Date().toLocaleDateString()}) <img src="https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png" alt="${currentWeather.weather[0].description}"></h2>
//         <p>Temperature: ${(currentWeather.main.temp - 273.15).toFixed(2)} °C</p>
//         <p>Humidity: ${currentWeather.main.humidity}%</p>
//         <p>Wind Speed: ${currentWeather.wind.speed} m/s</p>
//     `;

   
//     forecastContainerEl.innerHTML = '';
//     for (var i = 0; i < data.list.length; i += 8) {
//         var forecast = data.list[i];
//         var forecastDate = new Date(forecast.dt * 1000);
//         forecastContainerEl.innerHTML += `
//             <div class="forecast-card">
//                 <p>${forecastDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
//                 <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
//                 <p>Temperature: ${(forecast.main.temp - 273.15).toFixed(2)} °C</p>
//                 <p>Humidity: ${forecast.main.humidity}%</p>
//                 <p>Wind Speed: ${forecast.wind.speed} m/s</p>
//             </div>
//         `;
//     }
// }


// function handleSearchFormSubmit(event) {
//     event.preventDefault();
//     var city = searchBarEl.value.trim();
//     if (city) {
//         getApi(city);
//         searchBarEl.value = '';
//     }
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);