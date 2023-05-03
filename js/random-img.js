const myButton = document.querySelector(".container button");
const img = document.querySelector(".container img");
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

myButton.addEventListener("click", changeImg);

function changeImg(){

    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = "img/" + images[randomIndex];

}