import { showData, displayBackground } from "./display_data";

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
      displayBackground(alldata.weather[0].main);
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

export { fetchWeatherData };
