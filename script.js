const apiKey = "2d7fb7ee660d2b8246652b42fd0c45d8";
const weatherDisplay = document.getElementById("weatherDisplay");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

document.getElementById("searchBtn").addEventListener("click", fetchWeather);

function fetchWeather() {
    const location = document.getElementById("location").value;
    console.log(location);


    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Location not found");
            }
            return response.json();
        })
        .then((data) => displayWeather(data))
        .catch((error) => {
            alert(error.message);
        });
}

function displayWeather(data) {
    console.log(data);
    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Conditions: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
