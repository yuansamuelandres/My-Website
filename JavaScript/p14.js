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



let number = document.getElementById("number")
number.value = '4'
number.style.textAlign = "center"
number.style.fontSize = "larger"
number.style.fontWeight = "bold"
let questions
let q

let generate = document.getElementById("generate")
generate.focus() === true

let arrayOfQObjects = []
let arrayOfQs = []

let divQuestions = document.createElement("div")
divQuestions.className = "history"
divQuestions.style.cssText = `
    display: none;`
let historyArray = []
let showHistory = document.querySelector(".show")
let hideHistory = document.querySelector(".hide")
hideHistory.style.display = "none"

if (localStorage.getItem("Quests")) {
    arrayOfQObjects = JSON.parse(localStorage.getItem("Quests"))
    arrayOfQs = JSON.parse(localStorage.getItem("Keys"))
    historyArray = JSON.parse(localStorage.getItem("Quests"))
}

// console.log(arrayOfQObjects)
// console.log(arrayOfQs)
// console.log(historyArray)

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
    if (typeof q === "number" && q > 0) {
        intro.style.display = 'none'
        program.style.display = 'none'
        generator(q)
        message.innerHTML = ""
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

        let divB = document.createElement("div")
        divB.className = 'b'
        divB.innerText = 'B'
        let B = document.createElement("input")
        B.setAttribute("type", "text")
        B.readOnly = true
        B.disabled = true

        R.value = randomQ(1,10)
        if (R.value === 5) {
            // N.value = randomQ(1,3)
            // console.log("hello")
            continue
        } else {
            N.value = randomQ(1,2)
        }
        if (R.value === 5 && N.value === 3) {
            B.value = randomQ(1,3)
        } else {
            B.value = randomQ(1,4)
        }

        checkArray()
        document.body.style.textAlign = 'center'

        function checkArray () {
            if (!arrayOfQs.includes(R.value + N.value) && arrayOfQs.length < 20) {
                arrayOfQs.push(R.value + N.value)
                addQToArray (R.value, N.value, B.value)
                addQToPage ()
                if (i === a) {
                    addGenerateButton() 
                    addToHistory()
                }
            } else if (arrayOfQs.length === 20) {
                addToHistory()
                arrayOfQs = []
                arrayOfQObjects = []
                historyArray = []
                i = a
                showHistory.style.display = 'none'
                generator(q)
            } else {
                R.value = randomQ(1,10)
                if (R.value === 5) {
                    N.value = randomQ(1,3)
                } else {
                    N.value = randomQ(1,2)
                }
                if (R.value === 5 && N.value === 3) {
                    B.value = randomQ(1,3)
                } else {
                    B.value = randomQ(1,4)
                }
                return checkArray(R.value, N.value, B.value)
            }
        }
        function addQToPage () {
            openList.style.display = 'none'
            postProgram.appendChild(label)
            divR.appendChild(R)
            postProgram.appendChild(divR)
            divN.appendChild(N)
            postProgram.appendChild(divN)
            divB.appendChild(B)
            postProgram.appendChild(divB)
            
            Program.appendChild(postProgram)

            Program.appendChild(divQuestions)
            
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



function addQToArray (r, n, b) {
    let quest = {
        R: r,
        N: n,
        B: b,
    }
    // console.log(arrayOfQs)
    arrayOfQObjects.push(quest)

    addArrayToLocalStorage (arrayOfQObjects, arrayOfQs)
}

function addArrayToLocalStorage (arrayO, arrayQ) {
    localStorage.setItem("Quests", JSON.stringify(arrayO))
    localStorage.setItem("Keys", JSON.stringify(arrayQ))
    if (arrayOfQs.length === 20) {
        window.alert("A full cycle is completed.")
    }
}

function generateNewQs (btn) {
    btn.addEventListener("click", function (){
        divQuestions.style.display = "none"
        Program.innerHTML = ""
        btn.remove()
        program.style.display = "flex"
        showHistory.style.display = "none"
        hideHistory.style.display = "none"
    })
}

function addToHistory () {
    showHistory.style.display = "initial"
    historyArray = arrayOfQObjects
    divQuestions.innerHTML = ""
    // console.log(historyArray)
    for (let i = 0; i < arrayOfQObjects.length; i++) {
        let Label = document.createElement("label")

        let recitation = document.createElement("div")
        recitation.innerText = `Recitation`
        recitation.className = "R"

        let r = document.createElement("input")
        r.readOnly = true
        r.disabled = true
        recitation.setAttribute("type", "text")
        r.style.cssText = `
            background-color: black;
            color: gold;
            text-align: center;
            font-size: larger;
            text-shadow: 0 0 0.5rem gold;`

        let narration = document.createElement("div")
        narration.innerHTML = `Narration`
        narration.className = "N"

        let n = document.createElement("input")
        n.readOnly = true
        n.disabled = true
        narration.setAttribute("type", "text")
        n.style.cssText = `
            background-color: black;
            color: silver;
            text-align: center;
            font-size: larger;
            text-shadow: 0 0 0.5rem silver;`

        let branch = document.createElement("div")
        branch.innerHTML = `Branch`
        branch.className = "B"

        let b = document.createElement("input")
        b.readOnly = true
        b.disabled = true
        branch.setAttribute("type", "text")
        b.style.cssText = `
            background-color: black;
            color: red;
            text-align: center;
            font-size: larger;
            text-shadow: 0 0 0.5rem red;`

        Label.innerHTML = `Question <span>#${i+1} => </span>`
        divQuestions.appendChild(Label)

        r.value = arrayOfQObjects[i].R
        divQuestions.appendChild(recitation)
        recitation.appendChild(r)

        n.value = arrayOfQObjects[i].N
        divQuestions.appendChild(narration)
        narration.appendChild(n)

        b.value = arrayOfQObjects[i].B
        divQuestions.appendChild(branch)
        branch.appendChild(b)
    }
}

showHistory.addEventListener("click", function () {
    divQuestions.style.display = "grid"
    showHistory.style.display = "none"
    hideHistory.style.display = "initial"
})
hideHistory.addEventListener("click", function () {
    divQuestions.style.display = "none"
    hideHistory.style.display = "none"
    showHistory.style.display = "initial"
})

// A feature that shows the list of previous questions
let openList = document.querySelector(".showList")
let closeList = document.querySelector(".hideList")

function list_Opened () {
    openList.style.display = 'none'
    program.style.display = 'none'
    Program.style.display = 'initial'
    addToHistory()
    showHistory.style.display = 'none'  // To revert the first command of addToHistory()
    divQuestions.style.display = "grid"
    Program.appendChild(divQuestions)
    closeList.style.cssText = `
        display: initial;
        position: fixed;
        top: 45dvh;
        right: 1rem;`
}
function list_Closed () {
    closeList.style.display = 'none'
    divQuestions.style.display = 'none'
    program.style.display = 'flex'
    openList.style.display = 'initial'
}



// localStorage.clear()