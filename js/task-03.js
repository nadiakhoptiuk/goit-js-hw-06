// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const items = images.map((item) => {
  const element = document.createElement("li");
  const image = `<img src="${item.url}" alt="${item.alt}" /> `;
  element.insertAdjacentHTML("afterbegin", image);
  return element;
});

const gallery = document.querySelector(".gallery");

gallery.append(...items);
gallery.style.display = "flex";
gallery.style.paddingLeft = "0";
gallery.style.listStyle = "none";
gallery.style.width = "100%";

const arrayOfItems = gallery.querySelectorAll("li");

arrayOfItems.forEach((item) => {
  item.style.flexBasis = "calc((100%-20px)/3)";
  item.style.margin = "10px";
  item.style.height = "300px";
});

const arrayOfImages = gallery.querySelectorAll("img");

arrayOfImages.forEach((img) => {
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.objectPosition = "center";
  img.style.display = "block";
});
