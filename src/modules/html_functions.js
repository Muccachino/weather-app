"use strict";

function createTags(htmlTags, className, idName, innerHtml) {
  let element = document.createElement(htmlTags);
  if (className != null) {
    element.classList.add(className);
  }
  if (idName != null) {
    element.id = idName;
  }
  if (innerHtml != null) {
    element.innerHTML = innerHtml;
  }
  return element;
}

function expandHtml(expand, tags) {
  expand.appendChild(tags);
}

function addPicture(picImportName, parent) {
  let myPic = new Image();
  myPic.src = picImportName;
  parent.appendChild(myPic);
}

function createSwitch(parent) {
  const label = createTags("label", "hide", "switch");
  const box = createTags("input", null, "switchbox");
  box.type = "checkbox";
  const slider = createTags("span", "hide", "slider");
  expandHtml(label, box);
  expandHtml(label, slider);
  expandHtml(parent, label);
}

export { createTags, expandHtml, addPicture, createSwitch };
