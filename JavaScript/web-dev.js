// In the name of Allah

let frontendDiv = document.querySelector(".front-end")
let backendDiv = document.querySelector(".back-end")
let frontendButton = document.getElementById("front")
let backendButton = document.getElementById("back")

frontendButton.addEventListener("click" , function () {
    backendDiv.style.display = 'none'
    frontendDiv.style.display = 'initial'
})
backendButton.addEventListener("click", function () {
    frontendDiv.style.display = 'none'
    backendDiv.style.display = 'initial'
})