// In the name of Allah

let container = document.querySelector(".container")
let input = document.getElementById("task")
let addFile = document.getElementById("add")
let divTasks = document.querySelector(".tasks")

arrayOfFiles = []

if (localStorage.getItem("Files")) {
    arrayOfFiles = JSON.parse(localStorage.getItem("Files"))

}

getDataFromLocalStorage()

addFile.addEventListener("click", function () {
    if (input.value != "") {
        addToArray(input.value)
        input.value = ""
    }
})

divTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        deleteTask(e.target.parentElement.getAttribute("id"))
        e.target.style.backgroundColor = 'green';
        setTimeout(() => {
            e.target.parentElement.remove();
        }, 1500)
    }
})



function addToArray (value) {
    const task = {
        title: value,
    }
    arrayOfFiles.push(task)
    addElementsToPage(arrayOfFiles)
    addToLocalStorage (arrayOfFiles)
}

function addElementsToPage (a) {
    // console.log(divTasks.querySelector("h3"))
    // if (divTasks.querySelector("h3")) {

    // }
    divTasks.innerHTML = ""
    a.forEach(task => {
        let tasks = document.createElement("div")
        tasks.setAttribute("id", task.title)
        divTasks.appendChild(tasks)
        
        let taskTitle = document.createElement("input")
        taskTitle.setAttribute("type", "text")
        taskTitle.setAttribute("id", "task")
        taskTitle.setAttribute("readonly", "")
        taskTitle.setAttribute("value", task.title)
        taskTitle.style.fontWeight = "900"
        tasks.appendChild(taskTitle)
        let removeFile = document.createElement("button")
        removeFile.innerText = "Done?"
        removeFile.className = "delete"
        // removeFile.style.backgroundColor = 'red'
        tasks.appendChild(removeFile)
    });
}

function addToLocalStorage (array) {
    localStorage.setItem("Files", JSON.stringify(array))
}

function getDataFromLocalStorage () {
    let data = localStorage.getItem("Files")
    if (data) {
        let files = JSON.parse(localStorage.getItem("Files"))
        addElementsToPage(files)
    }
}

function deleteTask (id) {
    arrayOfFiles = arrayOfFiles.filter((task) =>
        task.title != id)
    addToLocalStorage(arrayOfFiles)
}