// In the name of Allah

let intro = document.querySelector(".intro")

let container = document.querySelector(".container")

let password = document.getElementById("password")
let pass

let verify = document.getElementById("verify")

let shield = document.getElementById("shield")
let access = document.querySelector(".access")

let program = document.getElementById("pre-program")
let Program = document.getElementById("program")

verify.addEventListener('click', function () {
    pass = password.value
    if (pass === "andy") {
        access.textContent = "Access granted. Welcome, professor!"
        setTimeout(function () {
            program.style.visibility = 'visible'
            shield.style.display = 'none'}, 1000)
    }
    else if (pass === "") {
        access.textContent = 'Enter a thing!'
    }
    else {
        access.textContent = 'Access denied.'
    }
})



let number = document.getElementById("number")
number.focus() === true
number.style.textAlign = "center"
number.style.fontSize = "larger"
number.style.fontWeight = "bold"
let questions
let q

let generate = document.getElementById("generate")

let arrayOfQObjects = []
let arrayOfQs = []

if (localStorage.getItem("Quests")) {
    arrayOfQObjects = JSON.parse(localStorage.getItem("Quests"))
    arrayOfQs = JSON.parse(localStorage.getItem("Keys"))
}

let min, max
function randomQ (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

let message = document.createElement("div")
program.appendChild(message)
generate.addEventListener('click', function () {
    questions = number.value
    q = +questions
    // console.log(typeof questions)
    if (q <= 5 && q > 0) {
        intro.style.display = 'none'
        program.style.display = 'none'
        generator(q)
        message.innerHTML = ""
    }
    else if (q > 5) {
        message.innerHTML = ""
        message.innerHTML = "Enter an integer number less than 6"
    }
    else {
        message.innerHTML = ""
        message.innerHTML = "Enter a valid integer number"
    }
})


function generator (a) {
    for (let i = 1; i <= a; i++) {
        var postProgram = document.createElement("div")
        postProgram.setAttribute("id", "post-program")

        let label = document.createElement("label")
        label.innerHTML = `Question <span class="hash">#${i}</span>:`

        let divR = document.createElement("div")
        divR.className = 'r'
        divR.innerText = 'R'
        let R = document.createElement("input")
        R.setAttribute("type", "text")
        R.readOnly = true
        R.disabled = true

        let divN = document.createElement("div")
        divN.className = 'n'
        divN.innerText = 'N'
        let N = document.createElement("input")
        N.setAttribute("type", "text")
        N.readOnly = true
        N.disabled = true

        R.value = randomQ(1,10)
        N.value = randomQ(1,2)

        checkArray()
        document.body.style.textAlign = 'center'

        function checkArray () {
            if (!arrayOfQs.includes(R.value + N.value) && arrayOfQs.length < 20) {
                arrayOfQs.push(R.value + N.value)
                addQToArray (R.value, N.value)
                addQToPage ()
                if (i === a) {addGenerateButton()}
            } else if (arrayOfQs.length === 20) {
                arrayOfQs = []
                arrayOfQObjects = []
                let message = document.createElement("div")
                message.innerHTML = "You have finished a full cycle!"
                Program.appendChild(message)
                setTimeout(function () {
                    message.innerHTML = ""
                }, 2000)
                i = a
                addGenerateButton()
            } else {
                R.value = randomQ(1,10)
                N.value = randomQ(1,2)
                return checkArray(R.value, N.value)
            }
        }
        function addQToPage () {
            postProgram.appendChild(label)
            divR.appendChild(R)
            postProgram.appendChild(divR)
            divN.appendChild(N)
            postProgram.appendChild(divN)
            
            Program.appendChild(postProgram)
        }
        function addGenerateButton () {
            let buttonChoice = document.createElement("button")
            buttonChoice.className = 'choice'
            buttonChoice.innerHTML = "Generate new questions?"
            document.body.appendChild(buttonChoice)

            generateNewQs(buttonChoice)
        }
    }
}



function addQToArray (r, n) {
    let quest = {
        R: r,
        N: n,
    }
    console.log(arrayOfQs)
    arrayOfQObjects.push(quest)

    addArrayToLocalStorage (arrayOfQObjects, arrayOfQs)
}

function addArrayToLocalStorage (arrayO, arrayQ) {
    localStorage.setItem("Quests", JSON.stringify(arrayO))
    localStorage.setItem("Keys", JSON.stringify(arrayQ))
}

function generateNewQs (btn) {
    btn.addEventListener("click", function (){
        Program.innerHTML = ""
        btn.remove()
        program.style.display = "flex"
    })
}