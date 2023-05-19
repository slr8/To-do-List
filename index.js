const button = document.querySelectorAll(".box:not(.first) button.btn")
const inputTxt = document.getElementById("hello")
const newList = document.querySelector(".second-sec")
const label = document.querySelectorAll("label")
const form = document.querySelector('form')
const Close = document.querySelectorAll('i')
const box = document.querySelectorAll(".box")
const clear = document.querySelector('.clear')
const span = document.getElementById("items")
const list = document.querySelectorAll("li")
const firstLi = document.getElementById("first-li")
const secondLi = document.getElementById("second-li")
const thirdLi = document.getElementById("third-li")
const body = document.querySelector('body')
const img = document.getElementById('img')



let count = document.querySelectorAll(".box").length - 1;
span.innerText = count + " ";

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        button[i].classList.toggle("checked");
        label[i].classList.toggle("checked");
        box[i].classList.toggle("checked");

    });
}

form.addEventListener('submit', function (e) {
    let divText = inputTxt.value.trim();
    if (divText == "") {
        e.preventDefault()
        return;
    }
    else {
        e.preventDefault()
        const newDiv = document.createElement('div')
        let divText = inputTxt.value
        newDiv.classList.add("box")
        newDiv.innerHTML = `<button class="btn" ></button>
        <label>${divText}</label><i id="close" class="fa-sharp fa-solid fa-xmark"></i>`
        newList.appendChild(newDiv)
        inputTxt.value = "" // clearing the input field
        let closing = newDiv.querySelector("i")
        closing.addEventListener('click', function () {
            newDiv.remove()
            count--;
            document.querySelector(".last #items").innerText = count + " ";
        })
        let toggling = newDiv.querySelector(".btn")
        let texting = newDiv.querySelector("label")
        toggling.addEventListener('click', function () {
            toggling.classList.toggle("checked")
            texting.classList.toggle("checked")
        })
        count++;
        document.querySelector(".last #items").innerText = count + " ";
        clear.addEventListener('click', () => Clear(newDiv))

    }

})
for (let i = 0; i < Close.length; i++) {
    Close[i].addEventListener("click", function () {
        box[i].remove();
        count--;
        document.querySelector(".last #items").innerText = count + " ";
    });
}
clear.addEventListener('click', () => Clear())

function Clear() {
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("checked");
        label[i].classList.remove("checked");
    }
}

// Add/Remove active
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        list.forEach(list => list.classList.remove("active"))
        this.classList.add("active");
    })

}



firstLi.addEventListener('click', () => {
    for (i = 0; i < box.length; i++) {
        box[i].classList.remove('hide')
    }
})
secondLi.addEventListener('click', () => {
    for (i = 0; i < box.length; i++) {
        box[i].classList.remove('hide')
        if (box[i].classList.contains('checked')) {
            box[i].classList.add('hide');
        }
    }
})
thirdLi.addEventListener('click', () => {
    for (i = 0; i < box.length; i++) {
        box[i].classList.remove('hide')
        if (!(box[i].classList.contains('checked'))) {
            box[i].classList.add('hide');
        }
    }
})
let i = 0

img.addEventListener('click', () => {
    body.classList.toggle("img-holder")
    body.classList.toggle("dark-theme")
    i++
    if (i % 2 == 0) {
        img.src = "images/icon-sun.svg"
    }
    else {
        img.src = "images/icon-moon.svg"
    }

})