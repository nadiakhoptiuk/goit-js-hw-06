// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
  increment: document.querySelector('button[data-action="increment"]'),
  decrement: document.querySelector('button[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

refs.increment.addEventListener("click", onIncrementButtonClick);
refs.decrement.addEventListener("click", onDecrementButtonClick);

function onDecrementButtonClick(event) {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementButtonClick(event) {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
