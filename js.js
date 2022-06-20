const pictures = document.querySelectorAll("img");

const popup = document. querySelector(".popup");
let popupPicture = document.querySelector(".card-picture > img");
const exitBut = document.querySelector(".exit");

for(let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", function() {
        let clickedImage = pictures[i].src;
        popupPicture.src = clickedImage;
        
        popup.classList.add("visible");
    })
}

function changeImage(img) {
    img.src = img;
}

exitBut.addEventListener("click", function() {
    popup.classList.remove("visible");
})

console.log("js loaded");