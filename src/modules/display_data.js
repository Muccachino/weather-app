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

const displayBackground = (data) => {
  const body = document.querySelector("body");
  if (data === "Clear") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)";
  } else if (data === "Clouds") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)";
  } else if (data === "Mist") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)";
  } else if (data === "Snow") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1491569916836-1d2e4fc9300b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)";
  } else if (data === "Rain") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)";
  } else if (data === "Drizzle") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1608890306831-58efdc14450b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1177&q=80)";
  } else if (data === "Thunderstorm") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1583459094467-e0db130c0dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)";
  } else {
    body.style.background =
      "url(https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)";
  }
  body.style.backgroundPosition = "center";
  body.style.backgroundSize = "cover";
};

export { showData, showSwitch, displayBackground };
