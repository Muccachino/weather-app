import "./styles.scss";

async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=graz&appid=dcdb46266f021e65cfdf86ea280dcece"
    );
    const data = await response.json();
    console.log(data);
    //showData(data);
  } catch (err) {
    throw new Error("Sorry, something went wrong");
  }
}
fetchWeatherData();

/* const showData = (data) => {
  const container = document.querySelector("#app");
  const weather = document.createElement("div")

} */
