// In the name of Allah

const container = document.querySelector(".container")
const table = document.querySelector(".main-table")
const form = document.querySelector("form")

//? Functions' Section
function addDataToSubmitForm (button) {
    button.addEventListener('click', function () {
        form.style.display = "grid"
        let row = this.closest("tr")
        let Chapter = form.querySelector(".Chapter")
        let Range = form.querySelector(".Range")
        let Difficulty = form.querySelector(".Difficulty")
        let Day = form.querySelector(".Day")
        let Review = form.querySelector(".Review")
        let Status = form.querySelector(".Status")

        Chapter.value = ''
        Range.value = ''
        Difficulty.value = ''
        Day.value = ''
        Review.value = ''
        Status.value = ''

        Chapter.value = row.querySelector(".first").textContent
        Range.value = row.querySelector(".range").textContent
        Difficulty.value = row.querySelector(".difficulty").querySelector("select").value
        Day.value = row.querySelector(".day").textContent
        Review.value = row.querySelector(".review").textContent
        Status.value = row.querySelector(".status").innerHTML
        form.querySelector("div").innerHTML = Status.value
        form.style.display = 'grid'
        container.style.opacity = '0.05'
    })
}

// Deleting the entry
function deleteEntry (button) {
    button.addEventListener("click", function () {
        console.log(this)
        let row = this.closest("tr")
        row.remove()
        pendingCounter -= 1
        pendingContent.value = pendingCounter
        console.log(pendingContent.value)
    })
}


// Toggle the adding entry form
let addingDivButton = document.getElementById("add-entry")
let addingForm = document.querySelector(".adding-form")
addingDivButton.addEventListener('click', function () {
    container.style.opacity = '0.05'
    addingForm.style.display = 'grid'
})

let cancelForm = document.getElementById("cancel")
cancelForm.addEventListener('click', function () {
    addingForm.style.display = 'none'
    container.style.opacity = '1'
    addingForm.querySelector("span").innerText = ''
})

function deleteSpanMessage () {
    addingForm.querySelector("span").innerText = ''
    addingForm.style.display = 'none'
    container.style.opacity = '1'
}


    

// Adding new entries
let addEntry = document.getElementById("add")
// Pending Counter
let pendingContent = container.querySelector("#pending")
let pendingCounter = +pendingContent.value
// Review Counter
let reviewContent = container.querySelector("#review")
let reviewCounter = +reviewContent.value
// Complete Counter
let completeContent = container.querySelector("#complete")
let completeCounter = +completeContent.value

addEntry.addEventListener('click', function () {
    let value1 = addingForm.querySelector("#Chapter").value.trim()
    let value2 = addingForm.querySelector("#Range").value.trim()
    const table = document.querySelector('.main-table').getElementsByTagName('tbody')[0]
    const newRow = table.insertRow()
    const cell1 = newRow.insertCell(0)
    const cell2 = newRow.insertCell(1)
    const cell3 = newRow.insertCell(2)
    const cell4 = newRow.insertCell(3)
    const cell5 = newRow.insertCell(4)
    const cell6 = newRow.insertCell(5)
    const cell7 = newRow.insertCell(6)

    cell1.setAttribute('data-cell', "Chapter")
    cell2.setAttribute('data-cell', "Range")
    cell3.setAttribute('data-cell', "Difficulty")
    cell4.setAttribute('data-cell', "Day")
    cell5.setAttribute('data-cell', "Review")
    cell6.setAttribute('data-cell', "Status")
    cell7.setAttribute('data-cell', "Actions")

    cell1.classList.add("first")
    cell2.classList.add("range")
    cell3.classList.add("difficulty")
    cell4.classList.add("day")
    cell5.classList.add("review")
    cell6.classList.add("status")
    cell7.classList.add("actions")

    // if (!value1 || !value2) {
    //     alert("Please fill in both fields!")
    //     return
    // }

    // Cell 1
    let firstSpan = document.createElement("span")
    firstSpan.textContent = value1
    let cell1Button1 = document.createElement("button")
    cell1Button1.classList.add("edit", "none")
    let cell1i1 = document.createElement("i")
    cell1i1.classList.add("fa-solid", "fa-pen-to-square")
    cell1Button1.appendChild(cell1i1)
    cell1.appendChild(cell1Button1)
    
    let cell1Button2 = document.createElement("button")
    cell1Button2.classList.add("delete", "none")
    let cell1i2 = document.createElement("i")
    cell1i2.classList.add("fa-solid", "fa-trash")
    cell1Button2.appendChild(cell1i2)
    cell1.appendChild(cell1Button2)
    // Event delegation alternative
    deleteEntry(cell1Button2)

    let cell1Button3 = document.createElement("button")
    cell1Button3.classList.add("submit", "none")
    let cell1i3 = document.createElement("i")
    cell1i3.classList.add("fa-solid", "fa-paper-plane")
    cell1Button3.appendChild(cell1i3)
    cell1.appendChild(cell1Button3)
    // Event delegation alternative
    addDataToSubmitForm(cell1Button3)
    
    cell1.appendChild(firstSpan)

    // Cell 2: Range
    cell2.textContent = value2


    // Cell 3: Difficulty
    let dificulty = document.createElement("select")
    let option1 = document.createElement("option")
    option1.value = ' '
    option1.textContent = ' '
    let option2 = document.createElement("option")
    option2.value = 'Easy'
    option2.textContent = 'Easy'
    let option3 = document.createElement("option")
    option3.value = 'Medium'
    option3.textContent = 'Medium'
    let option4 = document.createElement("option")
    option4.value = 'Hard'
    option4.textContent = 'Hard'
    dificulty.appendChild(option1)
    dificulty.appendChild(option2)
    dificulty.appendChild(option3)
    dificulty.appendChild(option4)
    cell3.appendChild(dificulty)


    // Cell 6
    let status = document.createElement("i")
    status.classList.add('fa-solid')
    status.classList.add('fa-hourglass')
    cell6.appendChild(status)

    //* Actions Wrapper
    let wrapper = document.createElement("div")
    wrapper.classList.add("actions-wrapper")

    let span1 = document.createElement("span")
    let button1 = document.createElement("button")
    button1.classList.add("edit")
    let i1 = document.createElement("i")
    i1.classList.add("fa-solid")
    i1.classList.add("fa-pen-to-square")
    button1.appendChild(i1)
    span1.appendChild(button1)
    wrapper.appendChild(span1)

    let span2 = document.createElement("span")
    let button2 = document.createElement("button")
    button2.classList.add("delete")
    let i2 = document.createElement("i")
    i2.classList.add("fa-solid")
    i2.classList.add("fa-trash")
    button2.appendChild(i2)
    span2.appendChild(button2)
    wrapper.appendChild(span2)
    // Event delegation alternative
    deleteEntry(button2)

    let span3 = document.createElement("span")
    let button3 = document.createElement("button")
    button3.classList.add("view")
    let i3 = document.createElement("i")
    i3.classList.add("fa-solid")
    i3.classList.add("fa-eye")
    button3.appendChild(i3)
    span3.appendChild(button3)
    wrapper.appendChild(span3)

    let span4 = document.createElement("span")
    let button4 = document.createElement("button")
    button4.classList.add("submit")
    let i4 = document.createElement("i")
    i4.classList.add("fa-solid")
    i4.classList.add("fa-paper-plane")
    button4.appendChild(i4)
    span4.appendChild(button4)
    wrapper.appendChild(span4)
    cell7.appendChild(wrapper)
    // Event delegation alternative
    addDataToSubmitForm(button4)

    addingForm.querySelector("span").innerText = 'Entry has been added!'
    setTimeout(deleteSpanMessage, 1000)

    pendingCounter += 1
    pendingContent.value = pendingCounter

})



//? Functionality of the app 
// Adding the date when difficulty is triggered with its responsive review & status
table.addEventListener("change", function (event) {
    let today = new Date();
    if (event.target && event.target.tagName === 'SELECT') {
        let select = event.target
        let option = select.options[select.selectedIndex]
        let row = select.closest("tr")
        
        // Date
        let day_td = row.querySelector(".day")
        let now = new Date();
        let formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        day_td.textContent = ''
        day_td.textContent = formattedDate

        // Status & Review
        let status = row.querySelector(".status")
        let statusIcon = status.querySelector("i")
        let review = row.querySelector(".review")

        switch (option.value) {
            case "Easy":
                statusIcon.classList.remove("fa-hourglass")
                statusIcon.classList.remove("fa-hourglass-half")
                statusIcon.classList.add("fa-hourglass-end")
                
                review.textContent = ''
                break
            case "Medium":
                statusIcon.classList.remove("fa-hourglass")
                statusIcon.classList.remove("fa-hourglass-end")
                statusIcon.classList.add("fa-hourglass-half")

                review.textContent = ''
                let mediumDate = new Date();
                mediumDate.setDate(mediumDate.getDate() + 3)
                let formattedDateMedium = mediumDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
                review.textContent = formattedDateMedium
                break
            case "Hard":
                console.log("hard")
                statusIcon.classList.remove("fa-hourglass")
                statusIcon.classList.remove("fa-hourglass-end")
                statusIcon.classList.add("fa-hourglass-half")

                review.textContent = ''
                let hardDate = new Date();
                hardDate.setDate(hardDate.getDate() + 1)
                let formattedDateHard = hardDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
                review.textContent = formattedDateHard
                break

            default: break
        } 

        let selects = table.querySelectorAll("select")
        completeCounter = 0
        completeContent.value = completeCounter
        reviewCounter = 0
        reviewContent.value = reviewCounter
        selects.forEach (s => {
            if (s.options[s.selectedIndex].value === "Easy") {
                completeCounter += 1
                completeContent.value = completeCounter

            } else if (s.options[s.selectedIndex].value === "Medium" || s.options[s.selectedIndex].value === "Hard") {
                reviewCounter += 1
                reviewContent.value = reviewCounter
            }
        }) 
    }
})



// Adding the data to the form
let submitToTheForm = document.querySelectorAll(".submit")

submitToTheForm.forEach(s => {
    addDataToSubmitForm(s)
})

let cancelDatabaseForm = document.getElementById("hide")
cancelDatabaseForm.addEventListener("click", function () {
    form.style.display = 'none'
    container.style.opacity = '1'
})



// Searching the database