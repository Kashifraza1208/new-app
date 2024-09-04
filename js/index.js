const apiKey = "a7cd2ad4816ed05ae76378735396feb6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Patna&units=metric&appid=a7cd2ad4816ed05ae76378735396feb6";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

document.querySelector(".error").style.display = "none";

async function checkWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

      document.querySelector(".wind").innerHTML = data.wind.speed + "Km";

      // const array = [{}, {}, {}, {}];

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
      }

      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
