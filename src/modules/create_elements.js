import { createTags, expandHtml, createSwitch } from "./html_functions";

function createCityInput() {
  const cityInput = createTags("input", null, "cityInput");
  cityInput.type = "text";
  cityInput.placeholder = "City";
  expandHtml(document.body, cityInput);
}

function createTempSwitch() {
  const tempSwitch = createSwitch(document.body);
  const tempInfo = createTags("span", "hide", "cel-fa", "°C / °F");
  expandHtml(document.body, tempInfo);
}

function createContainer() {
  const container = createTags("div", null, "container");
  expandHtml(document.body, container);
}

export { createCityInput, createTempSwitch, createContainer };
