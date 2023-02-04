import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    const mainElement = document.querySelector('.main');

    const imageContainer = document.createElement('div');
imageContainer.classList.add('image');

    const img = document.createElement('image');

image.src = './images/favicon.ico';

imageContainer.appendChild(image);

mainElement.appendChild(imageContainer);

const imageElement = document.querySelector('.image');

imageElement.addEventListener('click', function() {
    imageElement.style.transform = 'scale(2)';
});
   const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
