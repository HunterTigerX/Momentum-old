weather.firstChild.innerHTML = "data.name";

const api = "b744c5fe3d133c318279469121f4a809";
city.value = "Москва";

function setLocalStorageCity() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorageCity);

function getLocalStorageCity() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
  getWeather();
}
window.addEventListener("load", getLocalStorageCity);

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${state.language}&appid=b744c5fe3d133c318279469121f4a809&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (state.language !== "ru") {
    weatherDescription.textContent = data.weather[0].description;
    windSpeed = `Wind ${Object.keys(data.wind)[0]}`;
    humidityLabel = Object.keys(data.main)[5];
  }
  try {
    weatherIcon.className = `weather-icon owf owf-${data.weather[0].id}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${windSpeed}: ${Math.round(
      data.wind.speed
    )} ${windSpeedText}`;
    humidity.textContent = `${humidityLabel}: ${Math.round(
      data.main.humidity
    )}%`;
    weatherError.innerHTML = ``;
    city.value = data.name;
  } catch (e) {
    weatherIcon.className = ``;
    temperature.textContent = ``;
    weatherDescription.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
    weatherError.innerHTML = `&#9888`;
    alert("Ошибка. Город не найден. Error. City not found.");
  }
}

getWeather();

city.addEventListener("mouseout", getWeather);
city.addEventListener("keydown", (event) => {
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    getWeather();
  }
});
