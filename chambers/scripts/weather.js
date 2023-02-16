const url = "https://api.openweathermap.org/data/2.5/weather?q=Lecheria&units=imperial&appid=2ececfa9592136e3df2f803a0a10d7be";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Lecheria&units=imperial&cnt=25&appid=2ececfa9592136e3df2f803a0a10d7be"
// select HTML elements in the document
const currentTemp = document.querySelector('#temp-today');
const weather = document.querySelector('#weather-today');

async function fetchWeather(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw Error(await response.text())
    }
}

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `Temp: ${data.main.temp}&deg;F`;
    
    let iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let icon = document.createElement("img");
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    let description = document.createElement("p");
    description.textContent = desc;

    weather.append(icon, description)
}

function displayResultsTomorrow(data) 
{
    let desc = data.list[8].weather[0].description;
    document.getElementById("temp-tomorrow").innerHTML = `Temp: ${data.list[8].main.temp}&deg;F`;
    
    let iconsrc = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`;
    let icon = document.createElement("img");
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    let description = document.createElement("p");
    description.textContent = desc;

    document.getElementById("weather-tomorrow").append(icon, description);
}

function displayResultsThreeDays(data) {
    let desc = data.list[24].weather[0].description;
    document.getElementById("temp-three").innerHTML = `Temp: ${data.list[24].main.temp}&deg;F`;
    
    let iconsrc = `https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`;
    let icon = document.createElement("img");
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    let description = document.createElement("p");
    description.textContent = desc;

    document.getElementById("weather-three").append(icon, description);
}

fetchWeather(url).then(weather => {displayResults(weather)});
fetchWeather(forecast).then(weather => {
    displayResultsTomorrow(weather);
    displayResultsThreeDays(weather)
})