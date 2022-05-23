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

const makeGalleryItemMarkup = ({ url, alt }) => {
  return `
  <li>
    <img src="${url}" alt="${alt}" />
  </li>`;
};

const makeGalleryItem = images.map(makeGalleryItemMarkup).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", makeGalleryItem);

galleryRef.style.display = "flex";
galleryRef.style.width = "100%";
galleryRef.style.padding = "0";
galleryRef.style.margin = "0 auto";
galleryRef.style.listStyle = "none";

const itemRef = galleryRef.querySelectorAll("li");

itemRef.forEach((item) => {
  item.style.flexBasis = "calc((100%-20px - 20px)/3)";
  item.style.margin = "10px";
  item.style.height = "300px";
});

const imagesRef = galleryRef.querySelectorAll("img");

imagesRef.forEach((img) => {
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.objectPosition = "center";
  img.style.display = "block";
});
