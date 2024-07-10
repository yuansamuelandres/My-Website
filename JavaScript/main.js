// In the name of Allah

let myButtons = document.querySelector(".show");
let cardContent = document.querySelector(".card");
myButtons.onclick = function() {
    myButtons.setAttribute("style", "display: none;");
    cardContent.setAttribute("style", "display: block;");
    console.log("okay")
};
