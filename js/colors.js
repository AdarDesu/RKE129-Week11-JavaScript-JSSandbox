// const - data written in chache
const myButton = document.querySelector(".container button");
const myBox = document.querySelector(".container .box")
const btnBackground = document.querySelector(".container .box button");
const colors = ["#500000", "#005000", "#000050", "#500050", "#005050", "#505000"];

myButton.addEventListener("click", changeColor);

function changeColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    myBox.style.backgroundColor = colors[randomIndex]

    btnBackground.style.backgroundColor = ("#aaaaaa")
    btnBackground.style.color = ("#000000")
}