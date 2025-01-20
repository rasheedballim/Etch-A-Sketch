function gridCreate(number) {
  // create a ref to the div in html
  const container = document.querySelector(".container");
  // clears content in the container 
  container.innerHTML = "";
  // creating each block as per users request
  for (let i = 0; i < number * number; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
  }

  let isMouseDown = false;
  document.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isMouseDown = true;
    }
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  const squares = document.querySelectorAll(".content");

  squares.forEach((button) => {
    button.addEventListener("mouseover", () => {
      if (isMouseDown) {
        button.style.backgroundColor = getRandomColour();
      }
    });
  });

  function resetColours() {
    squares.forEach((div) => {
      div.style.backgroundColor = "white";
    });
  }
  const btn = document.querySelector("#reset_button");
  btn.addEventListener("click", resetColours);
  let contents = document.querySelectorAll(".content");

  contents.forEach((content) => {
    content.style.setProperty("flex", `0 0 calc(650px / ${number})`);
    content.style.setProperty("height", `calc(650px / ${number})`);
  });
}

function getRandomColour() {
  const letters = "0123456789ABCDEF";
  let randomColour = "#";
  for (let i = 0; i < 6; i++) {
    randomVal = Math.floor(Math.random() * 16);
    randomColour = randomColour + letters[randomVal];
  }
  return randomColour;
}

const inputField = document.querySelector("#number-input");
const readInputField = document.querySelector("#confirm-button");

// Event Listener that takes the value entered by user and
// passes it through to the gridCreate fucntion
readInputField.addEventListener("click", () => {
  const inputValue = inputField.value;
  gridCreate(inputValue);
});
