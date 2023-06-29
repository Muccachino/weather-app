import "./styles.scss";
import {
  createTags,
  expandHtml,
  addPicture,
  createSwitch,
} from "./modules/functions";

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcdb46266f021e65cfdf86ea280dcece`
    );
    const alldata = await response.json();
    const mydata = [
      [alldata.name, alldata.sys.country],
      `${(alldata.main.temp - 273.15).toFixed(1)} °C`,
      `Min: ${(alldata.main.temp_min - 273.15).toFixed(1)} °C`,
      `Max: ${(alldata.main.temp_max - 273.15).toFixed(1)} °C`,
      alldata.weather[0].description,
      alldata.weather[0].icon,
    ];
    showData(mydata);
  } catch (err) {
    throw new Error("Sorry, something went wrong");
  }
}

const showData = (data) => {
  container.innerHTML = "";
  for (let i = 0; i < data.length - 1; i++) {
    const weather = document.createElement("p");
    weather.innerHTML = data[i];
    weather.classList.add(`data${i}`);
    container.appendChild(weather);
  }
  const icon = addPicture(
    `https://openweathermap.org/img/wn/${data[5]}@2x.png`,
    container
  );
  const tempSwitch = createSwitch(container);
  const tempInfo = createTags("span", "cel-fa", null, "°C / °F");
  expandHtml(container, tempInfo);
};

const cityInput = createTags("input", null, "cityInput");
cityInput.type = "text";
cityInput.placeholder = "City";
expandHtml(document.body, cityInput);

const container = createTags("div", null, "container");
expandHtml(document.body, container);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value;
    fetchWeatherData(city);
    container.style.backgroundColor = "skyblue";
  }
});

const tempBox = document.querySelector(".switchbox");
//tempBox.addEventListener;
