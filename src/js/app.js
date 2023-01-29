import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
    // Select the element with a class name of .main
const mainElement = document.querySelector('.main');

// Create a new div element with a class name of .image
const imageContainer = document.createElement('div');
imageContainer.classList.add('image');

// Create a new img element
const img = document.createElement('image');

// Set the src attribute of the img element to the URL of the image
image.src = 'https://example.com/image.jpg';

// Append the img element to the .image div
imageContainer.appendChild(image);

// Append the .image div to the .main element
mainElement.appendChild(imageContainer);

// Select the element with a class name of .image
const imageElement = document.querySelector('.image');

// Add an event listener to the .image element that increases its size when clicked
imageElement.addEventListener('click', function() {
    imageElement.style.transform = 'scale(2)';
});

  });
});
