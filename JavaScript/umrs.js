// In the name of Allah

//! Triggering the buttons, and displaying the corresponding divs
let button_ar = document.getElementById("arabic")
let button_en = document.getElementById("english")
let button_O_ar = document.getElementById("o-ar")
let button_B_ar = document.getElementById("b-ar")
let button_O_en = document.getElementById("o-en")
let button_B_en = document.getElementById("b-en")
let program_ar = document.querySelector(".container-ar")
let program_en = document.querySelector(".container-en")
let program_O_ar = document.querySelector(".program_o-ar")
const original_O_ar = program_O_ar.cloneNode(true)
let program_B_ar = document.querySelector(".program_b-ar")
const original_B_ar = program_B_ar.cloneNode(true)
let program_O_en = document.querySelector(".program_o-en")
const original_O_en = program_O_en.cloneNode(true)
let program_B_en = document.querySelector(".program_b-en")
const original_B_en = program_B_en.cloneNode(true)

button_ar.addEventListener('click', function () {
    program_en.style.display = 'none'
    program_ar.style.display = 'initial'
})
button_en.addEventListener('click', function () {
    program_ar.style.display = 'none'
    program_en.style.display = 'initial'
})

button_O_ar.addEventListener('click', function () {
    program_B_ar.style.display = 'none'
    program_O_ar.style.display = 'initial'
})
button_B_ar.addEventListener('click', function () {
    program_O_ar.style.display = 'none'
    program_B_ar.style.display = 'initial'
})
button_O_en.addEventListener('click', function () {
    program_B_en.style.display = 'none'
    program_O_en.style.display = 'initial'
})
button_B_en.addEventListener('click', function () {
    program_O_en.style.display = 'none'
    program_B_en.style.display = 'initial'
})


//////////////////////////////////////////////////////////////////////////////////
//! Loading the local storage
load_Status()
load_Done()
load_Difficulty()
load_Day()
load_Review()



//////////////////////////////////////////////////////////////////////////////////
//! Adding the date automatically when the status & done boxes are checked
let checkboxStatus = document.querySelectorAll(".check")
checkboxStatus.forEach (cs => {
    cs.addEventListener('change', function () {
        let date_row = this.closest('tr')
        let date_td = date_row.querySelector(".date")
        let review_td = date_row.querySelector(".spaced-repeat")
        let difficulty = date_row.querySelector(".difficulty")
        let done = date_row.querySelector(".done")
        if (this.checked) {
            difficulty.removeAttribute("disabled")
            let today = new Date();
            let formattedDate = today.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            date_td.textContent = ''
            date_td.textContent = formattedDate
            saveCheckboxes_Status(checkboxStatus)   // To localStorage
        } else {    // Clearing everything when Status button isn't checked
            date_td.textContent = ''
            review_td.textContent = ''
            save_Review(document.querySelectorAll(".difficulty"))
            done.checked = false
            done.setAttribute("disabled", "true")
            saveCheckboxes_Done(checkboxDone)       // To localStorage
            difficulty.value = ''
            difficulty.parentElement.style.backgroundColor = 'transparent'
            save_Difficulty(document.querySelectorAll(".difficulty"))
            difficulty.setAttribute("disabled", "true")
            saveCheckboxes_Status(checkboxStatus)   // To localStorage
        }
    })
})

let checkboxDone = document.querySelectorAll(".done")
checkboxDone.forEach (cd => {
    // Todo: Logic II ===> Prevent the access to the Done? unless the Status is checked & there's a review date.
    cd.setAttribute("disabled", "true")
    let row = cd.closest("tr")
    let status = row.querySelector(".check")
    let review = row.querySelector(".spaced-repeat")
    if (status.checked === true && review.textContent != '') {cd.removeAttribute("disabled")}
    cd.addEventListener('change', function () {
        let row = this.closest('tr')
        let date = row.querySelector(".date")
        let review = row.querySelector(".spaced-repeat")
        let status = row.querySelector(".difficulty")
        let td = status.parentElement

        if (this.checked) {
            saveCheckboxes_Done(checkboxDone)   // To localStorage
            let today = new Date()
            let formattedDate = today.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            date.textContent = ''
            date.textContent = formattedDate
            review.textContent = ''
            save_Review(document.querySelectorAll(".difficulty"))
            status.value = ''
            save_Difficulty(difficulties)       // To localStorage
            td.style.backgroundColor = status.value
        } else {
            saveCheckboxes_Done(checkboxDone)   // To localStorage
        }
    })
})



//////////////////////////////////////////////////////////////////////////////////
//! Assigning the values of the difficulty & changing the background color accordingly
let difficulties = document.querySelectorAll(".difficulty")
difficulties.forEach (d => {
    // Todo: Logic I ===> Prevent the access to the Difficulty unless the Status is checked.
    d.setAttribute("disabled", 'true')
    let row = d.closest("tr")
    let status = row.querySelector(".check")
    if (status.checked === true) {d.removeAttribute("disabled")}
    d.addEventListener('change', function (){
        let selectedColor = this.value
        let cell = this.parentElement
        let rowof = this.closest("tr")
        let done = rowof.querySelector(".done")
        save_Difficulty(difficulties)           // To localStorage
        if (selectedColor !== '') {
            cell.style.backgroundColor = selectedColor 
            save_Difficulty(difficulties)       // To localStorage
            if (selectedColor !== 'green') {
                done.removeAttribute("disabled")
                done.checked = false
                saveCheckboxes_Done(checkboxDone)   // To localStorage
            } else {
                done.setAttribute("disabled", "true")
                done.checked = true
                saveCheckboxes_Done(checkboxDone)
                closure_O_ar()
                closure_B_ar()
                closure_O_en()
                closure_B_en()
            }
        } else {
            done.checked = false
            saveCheckboxes_Done(checkboxDone)
            cell.style.backgroundColor = 'transparent'
            save_Difficulty(difficulties)       // To localStorage
        }



//////////////////////////////////////////////////////////////////////////////////
//! Assigning the layers of spaced repeatation
        let today = new Date();

        let row = this.closest("tr")
        let review = row.querySelector(".spaced-repeat")
        if (cell.style.backgroundColor === 'yellow') {
            today.setDate(today.getDate() + 3)
            let formattedDate = today.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            review.textContent = ''
            review.textContent = formattedDate
            save_Review(difficulties)       // To localStorage
        } else if (cell.style.backgroundColor === 'red') {
            today.setDate(today.getDate() + 1)
            let formattedDate = today.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            review.textContent = ''
            review.textContent = formattedDate
            save_Review(difficulties)       // To localStorage
        } else {
            review.textContent = ''
            save_Review(difficulties)       // To localStorage
        }
    })
})



//////////////////////////////////////////////////////////////////////////////////
//TODO: Clearing all the table when a closure is reached.
function closure_O_ar () {
    // let status =
    let done = program_O_ar.querySelectorAll(".done")
    if (Array.from(done).every(d => d.checked)) {
        window.alert("لقد أتممت ختمة الأصول")
        done.forEach(d => {
            d.checked = false
            saveCheckboxes_Done(document.querySelectorAll(".done"))
            let row = d.closest("tr")
            let status = row.querySelector(".check")
            status.checked = false
            let day = row.querySelector(".date")
            day.textContent = ''
            saveCheckboxes_Status(document.querySelectorAll(".check"))
            let difficulty = row.querySelector(".difficulty")
            difficulty.setAttribute("disabled", "true")
            difficulty.value = ''
            difficulty.parentElement.style.backgroundColor = 'transparent'
            save_Difficulty(document.querySelectorAll(".difficulty"))
        })
    }
}
function closure_B_ar () {
    // let status =
    let done = program_B_ar.querySelectorAll(".done")
    if (Array.from(done).every(d => d.checked)) {
        window.alert("لقد أتممت ختمة الفرش")
        done.forEach(d => {
            d.checked = false
            saveCheckboxes_Done(document.querySelectorAll(".done"))
            let row = d.closest("tr")
            let status = row.querySelector(".check")
            status.checked = false
            let day = row.querySelector(".date")
            day.textContent = ''
            saveCheckboxes_Status(document.querySelectorAll(".check"))
            let difficulty = row.querySelector(".difficulty")
            difficulty.setAttribute("disabled", "true")
            difficulty.value = ''
            difficulty.parentElement.style.backgroundColor = 'transparent'
            save_Difficulty(document.querySelectorAll(".difficulty"))
        })
    }
}
function closure_O_en () {
    // let status =
    let done = program_O_en.querySelectorAll(".done")
    if (Array.from(done).every(d => d.checked)) {
        window.alert("You've completed the Origins Closure")
        done.forEach(d => {
            d.checked = false
            saveCheckboxes_Done(document.querySelectorAll(".done"))
            let row = d.closest("tr")
            let status = row.querySelector(".check")
            status.checked = false
            let day = row.querySelector(".date")
            day.textContent = ''
            saveCheckboxes_Status(document.querySelectorAll(".check"))
            let difficulty = row.querySelector(".difficulty")
            difficulty.setAttribute("disabled", "true")
            difficulty.value = ''
            difficulty.parentElement.style.backgroundColor = 'transparent'
            save_Difficulty(document.querySelectorAll(".difficulty"))
        })
    }
}
function closure_B_en () {
    // let status =
    let done = program_B_en.querySelectorAll(".done")
    if (Array.from(done).every(d => d.checked)) {
        window.alert("You've completed the Branches Closure")
        done.forEach(d => {
            d.checked = false
            saveCheckboxes_Done(document.querySelectorAll(".done"))
            let row = d.closest("tr")
            let status = row.querySelector(".check")
            status.checked = false
            let day = row.querySelector(".date")
            day.textContent = ''
            saveCheckboxes_Status(document.querySelectorAll(".check"))
            let difficulty = row.querySelector(".difficulty")
            difficulty.setAttribute("disabled", "true")
            difficulty.value = ''
            difficulty.parentElement.style.backgroundColor = 'transparent'
            save_Difficulty(document.querySelectorAll(".difficulty"))
        })
    }
}



//////////////////////////////////////////////////////////////////////////////////
//! Storing the data in localStorage
//* Status Checkboxes
function saveCheckboxes_Status (status) {
    let array_Status = {}
    status.forEach((box, index) => {
        array_Status[`Status${index}`] = box.checked
    })
    localStorage.setItem("Status", JSON.stringify(array_Status))

//* Days
    let array_Day = {}
    status.forEach((s, index) => {
        let row = s.closest("tr")
        let date = row.querySelector(".date")
        array_Day[`Day${index}`] = date.textContent
    })
    localStorage.setItem("Day", JSON.stringify(array_Day))
}

//* Done Checkboxes
function saveCheckboxes_Done (done) {
    let array_Done = {}
    done.forEach((box, index) => {
        array_Done[`Done${index}`] = box.checked
    })
    localStorage.setItem("Done?", JSON.stringify(array_Done))
}

//* Difficulty Selections
function save_Difficulty (difficulty) {
    let array_Difficulty_value = {}
    difficulty.forEach((select, index) => {
        array_Difficulty_value[`Difficulty${index}`] = select.value
    })
    localStorage.setItem("Difficulty_Values", JSON.stringify(array_Difficulty_value))

    // save_Review (difficulty)
        
}

//* Review Dates
function save_Review (difficulty) {
    let array_Review = {}
    difficulty.forEach((d, index) => {
        let row = d.closest("tr")
        let review = row.querySelector(".spaced-repeat")
        array_Review[`Review${index}`] = review.textContent
    })
    localStorage.setItem("Review", JSON.stringify(array_Review))
}



//* Action when all boxes are checked













//TODO: Load from local storage...
//! Status Checkboxes
function load_Status () {
    let status = document.querySelectorAll(".check")
    let stored_Status = JSON.parse(localStorage.getItem("Status"))
    if (stored_Status) {
        status.forEach((box, index) => {
            box.checked = stored_Status[`Status${index}`] || false
        })
    }
}

//! Done Checkboxes
function load_Done () {
    let done = document.querySelectorAll(".done")
    let stored_Done = JSON.parse(localStorage.getItem("Done?"))
    if (stored_Done) {
        done.forEach((box, index) => {
            box.checked = stored_Done[`Done${index}`] || false
        })
    }
}

//! Difficulty Selections
function load_Difficulty () {
    let difficulty = document.querySelectorAll(".difficulty")
    let stored_Difficulty = JSON.parse(localStorage.getItem("Difficulty_Values"))
    if (stored_Difficulty) {
        difficulty.forEach((select, index) => {
            select.value = stored_Difficulty[`Difficulty${index}`] || ''
            select.parentElement.style.backgroundColor = select.value
        })
    }
}

//! Days
function load_Day () {
    let day = document.querySelectorAll(".date")
    let stored_Day = JSON.parse(localStorage.getItem("Day"))
    if (stored_Day) {
        day.forEach((day, index) => {
            day.textContent = stored_Day[`Day${index}`] || ''
        })
    }
}

//! Reviews
function load_Review () {
    let review = document.querySelectorAll(".spaced-repeat")
    let stored_Review = JSON.parse(localStorage.getItem("Review"))
    if (stored_Review) {
        review.forEach((review, index) => {
            review.textContent = stored_Review[`Review${index}`] || ''
        })
    }
}