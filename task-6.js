const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);

function handleCreate() {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    boxesContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
