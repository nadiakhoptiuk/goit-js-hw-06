// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesWrap: document.querySelector("#boxes"),
};

refs.input.addEventListener("input", getNumber);
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

let number = 0;

function getNumber(event) {
  number = Number(event.currentTarget.value);
  return number;
}

function createBoxes(event) {
  const newArr = [];

  for (let i = 1; i <= number; i += 1) {
    const newEl = document.createElement("div");
    const increaseSize = 30 + i * 10;

    newEl.style.width = `${increaseSize}px`;
    newEl.style.height = `${increaseSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    newArr.push(newEl);
  }

  refs.boxesWrap.append(...newArr);
  refs.input.value = "";
  number = 0;
}

function destroyBoxes(event) {
  refs.boxesWrap.innerHTML = "";
}
