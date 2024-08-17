// In the name of Allah

let intro = document.querySelector(".intro")

let container = document.querySelector(".container")

let password = document.getElementById("password")
let pass

let verify = document.getElementById("verify")
// console.log(verify)

let shield = document.getElementById("shield")
let access = document.querySelector(".access")
// console.log(access)

let program = document.getElementById("pre-program")

verify.addEventListener('click', function () {
    pass = password.value
    // console.log(pass)
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
let questions
let q

let generate = document.getElementById("generate")

let min, max
function randomQ (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

generate.addEventListener('click', function () {
    let message1 = document.createElement("div")
    message1.innerHTML = `Enter an integer number less than 6`
    let message2 = document.createElement("div")
    message2.innerHTML = `Enter a valid integer number`
    questions = number.value
    q = +questions
    // console.log(typeof questions)
    if (q <= 5 && q > 0) {
        intro.style.display = 'none'
        program.style.display = 'none'
        generator(q)
    }
    else if (q > 5) {
        message2.style.display = 'none'
        program.appendChild(message1)
    }
    else {
        message1.style.display = 'none'
        program.appendChild(message2)
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

        let divN = document.createElement("div")
        divN.className = 'n'
        divN.innerText = 'N'
        let N = document.createElement("input")
        N.setAttribute("type", "text")

        R.value = randomQ(1,10)
        N.value = randomQ(1,2)

        postProgram.appendChild(label)
        divR.appendChild(R)
        postProgram.appendChild(divR)
        divN.appendChild(N)
        postProgram.appendChild(divN)
        
        document.body.appendChild(postProgram)
        document.body.style.textAlign = 'center'
        
    }
    let buttonChoice = document.createElement("button")
    buttonChoice.className = 'choice'
    buttonChoice.innerHTML = "Generate new questions?"

    let feature = document.createElement("div")
    feature.innerHTML = "This feature is not released yet. Coming soon."
    document.body.appendChild(buttonChoice)
    buttonChoice.addEventListener('click', function () {
        buttonChoice.style.display = 'none'
        document.body.appendChild(feature)
        })
    
}




// document.write(`
//     <div id="post-program">
//         <label for="">Question <span class="hash">#${i}</span></label>
//         <div class="r">R<input type="text" name="" id="r"></div>
//         <div class="n">N<input type="text" name="" id="n"></div>
//     </div>`)
// }

