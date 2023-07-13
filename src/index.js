import "./styles.scss";
import {
  createTags,
  expandHtml,
  addPicture,
  createSwitch,
} from "./modules/html_functions";

async function fetchWeatherData(city, degree) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcdb46266f021e65cfdf86ea280dcece`
    );
    const alldata = await response.json();
    if (degree === "Celsius") {
      const mydata = [
        [alldata.name, alldata.sys.country],
        `${(alldata.main.temp - 273.15).toFixed(1)} °C`,
        `Min: ${(alldata.main.temp_min - 273.15).toFixed(1)} °C`,
        `Max: ${(alldata.main.temp_max - 273.15).toFixed(1)} °C`,
        alldata.weather[0].description,
        alldata.weather[0].icon,
      ];
      showData(mydata);
    } else if (degree === "Fahrenheit") {
      const mydata = [
        [alldata.name, alldata.sys.country],
        `${(((alldata.main.temp - 273.15) * 9) / 5 + 32).toFixed(1)} °F`,
        `Min: ${(((alldata.main.temp_min - 273.15) * 9) / 5 + 32).toFixed(
          1
        )} °F`,
        `Max: ${(((alldata.main.temp_max - 273.15) * 9) / 5 + 32).toFixed(
          1
        )} °F`,
        alldata.weather[0].description,
        alldata.weather[0].icon,
      ];
      showData(mydata);
    }
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
  showSwitch();
};

const showSwitch = () => {
  const part_1 = document.querySelector("#switch");
  part_1.classList.remove("hide");
  const part_2 = document.querySelector("#slider");
  part_2.classList.remove("hide");
  const part_3 = document.querySelector("#cel-fa");
  part_3.classList.remove("hide");
};

const cityInput = createTags("input", null, "cityInput");
cityInput.type = "text";
cityInput.placeholder = "City";
expandHtml(document.body, cityInput);
let tempChange = 1;

const tempSwitch = createSwitch(document.body);
const tempInfo = createTags("span", "hide", "cel-fa", "°C / °F");
expandHtml(document.body, tempInfo);

const temp_btn = document.querySelector("#slider");
temp_btn.addEventListener("click", () => {
  const city = cityInput.value;
  if (tempChange === 1) {
    console.log("Fahrenheit");
    fetchWeatherData(city, "Fahrenheit");
    tempChange = 2;
  } else {
    console.log("Celsius");
    fetchWeatherData(city, "Celsius");
    tempChange = 1;
  }
});

const container = createTags("div", null, "container");
expandHtml(document.body, container);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value;
    fetchWeatherData(city, "Celsius");
    container.style.backgroundColor = "skyblue";
  }
});
