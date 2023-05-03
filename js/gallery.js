const currentMainImg = document.querySelector(".container .gallery-img4 img");
const imgToChoose = document.querySelectorAll(".container .gallery img");

imgToChoose.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e){
    imgToChoose.forEach(img => img.style.opacity = 1)


    currentMainImg.src = e.target.src;
    e.target.style.opacity = 0.5;
}