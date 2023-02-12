const url = "https://api.openweathermap.org/data/2.5/weather?q=Lecheria&units=imperial&appid=2ececfa9592136e3df2f803a0a10d7be";

// select HTML elements in the document
const currentTemp = document.querySelector('#weather-temp');
const weather = document.querySelector('#weather');

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Testing Only
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (exceptionVar) {
        console.log(exceptionVar)
    }
}

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `Temp: ${data.main.temp}&deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let icon = document.createElement("img");
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    let description = document.createElement("p");
    description.textContent = desc;

    weather.append(icon, description)
}


apiFetch(url)
