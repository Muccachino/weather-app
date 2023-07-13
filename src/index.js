import "./styles.scss";
import {
  createTags,
  expandHtml,
  addPicture,
  createSwitch,
} from "./modules/html_functions";
import { fetchWeatherData } from "./modules/fetch_weather_data";
import { showData, showSwitch } from "./modules/display_data";
import {
  createCityInput,
  createTempSwitch,
  createContainer,
} from "./modules/create_elements";

let tempChange = 1;
createCityInput();
createTempSwitch();
createContainer();

//Event Listener

const temp_btn = document.querySelector("#slider");
temp_btn.addEventListener("click", () => {
  const city = cityInput.value;
  if (tempChange === 1) {
    fetchWeatherData(city, "Fahrenheit");
    tempChange = 2;
  } else {
    fetchWeatherData(city, "Celsius");
    tempChange = 1;
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value;
    fetchWeatherData(city, "Celsius");
    container.style.backgroundColor = "skyblue";
  }
});
