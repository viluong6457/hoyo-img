"use strict";

const images = document.querySelectorAll(".img-grid");
console.log(images);
const fullscreenImage = document.createElement("img");
// console.log(fullscreenImage);
fullscreenImage.classList.add("fullscreen-image");

let isFullscreen = false;
images.forEach(image => {
    // console.log(image);
    image.addEventListener("click", function () {
        const imageId = image.getAttribute("id");
        console.log(imageId);
        fullscreenImage.src = `./images/希儿/Seele-${imageId}.png`;

        document.body.appendChild(fullscreenImage);
        document.body.classList.add("fullscreen-image");
    });
});

fullscreenImage.addEventListener("click", function () {
    if (document.body.classList.contains("fullscreen-image")) {
        document.body.removeChild(fullscreenImage);
        document.body.classList.remove("fullscreen-image");
    }
});

