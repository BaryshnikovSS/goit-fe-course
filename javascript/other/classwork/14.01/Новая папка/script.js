"use strict";

// по нажатию на кнопку див делиться на квадратики

const mainDiv = document.getElementById("search");
const inputA = document.querySelector(".input_A");
const inputB = document.querySelector(".input_B");
const processBtn = document.querySelector("button");
const createDiv

processBtn.addEventListener("click", handleProcessBtn);

function handleProcessBtn(e) {
  const rezOfInput = inputA.value * inputB.value;
}

function createDivs(a, b) {
  let counter = 0;
  const fragment = document.createDocumentFragment("div");
  const currentWidth = (mainDivWidth/a);
  const currentHeight = (mainDivHeight/b);
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      counter++;
      const newDiv = document.createElement("div");
      newDiv.style.width = currentWidth + "px";
      newDiv.style.height = currentHeight + "px";
      newDiv.style.left = i * currentWidth + "px";
      newDiv.style.top = j * currentHeight + "px";
      newDiv.innerText = counter;
      fragment.appendChild(newDiv);
    }
  }
  mainDiv.appendChild(fragment);
}
