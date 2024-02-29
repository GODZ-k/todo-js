let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let parentList = document.querySelector("#parentList")


const getValue = () => {
    console.log(input.value)
    let data = input.value
    createElement(data)
}

const createElement = (data) => {
    let li = document.createElement("li")
    li.innerHTML = `<h5 onclick="done(this)">${data}</h5>
    <button onclick="deleteItem(this)">Delete</button>`
    parentList.appendChild(li)
    saveData()

}

// checked

const done = (e) => {
    console.log(e.parentElement)
    if (e.parentElement.classList == "checked") {
        e.parentElement.classList.remove("checked")
        saveData()
    } else {
        e.parentElement.classList.add("checked")
        saveData()
    }


}


// delete item

const deleteItem = (e) => {
    e.parentElement.remove()
    saveData()

}

btn.addEventListener("click", getValue)


function saveData() {
    localStorage.setItem("data", parentList.innerHTML)
}

function showItem() {
    parentList.innerHTML = localStorage.getItem("data")
}
showItem()