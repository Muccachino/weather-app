import { addPicture } from "./html_functions";

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

export { showData, showSwitch };
