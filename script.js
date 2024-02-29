let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let parentList = document.querySelector("#parentList")


const getValue = () => {

    if (parentList.children[0].classList == "empty") {
        parentList.children[0].remove()
    }
    console.log(input.value)
    let data = input.value
    if (data === "") {
        alert("Please enter valid text")
    } else {
        createElement(data)
    }
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

    if (parentList.children.length <= 0) {
        let info = document.createElement("p")
        info.classList.add("empty")
        info.textContent = "No data found"
        parentList.appendChild(info)
    }

    saveData()

}

btn.addEventListener("click", getValue)



// local host

function saveData() {
    localStorage.setItem("data", parentList.innerHTML)
}

function showItem() {
    parentList.innerHTML = localStorage.getItem("data")
}
showItem()