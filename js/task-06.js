// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const symbolsLength = event.currentTarget.value.length;

  if (symbolsLength === 0) {
    removeAllClasses(validationInput, "invalid", "valid");
  } else if (symbolsLength === Number(validationInput.dataset.length)) {
    changeClasses(validationInput, "valid", "invalid");
  } else {
    changeClasses(validationInput, "invalid", "valid");
  }
}

function changeClasses(elem, add, remove) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}

function removeAllClasses(elem, ...classesToRemove) {
  for (const oneClass of classesToRemove) {
    elem.classList.remove(oneClass);
  }
}
