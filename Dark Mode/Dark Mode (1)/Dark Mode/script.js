let boton = document.querySelector("#boton")

boton.addEventListener("click", function() {
if (localStorage.getItem("theme") == "dark") {
   lightMode() 
}else{
    darkMode()
}
})

document.addEventListener("DOMContentLoaded", function () {
if (localStorage.getItem("theme") == "dark") {
    darkMode()
}else{
   lightMode() 
}
}) 

function darkMode () {
let body = document.querySelector("body")
//body.style.backgroundColor = "black"
body.classList.add("dark-theme")

let parrafos = document.querySelector("#parrafos")
//parrafos.style.color = "white"
parrafos.classList.add("dark-text")

localStorage.setItem("theme", "dark")
}

function lightMode() {
    let body = document.querySelector("body")
    //body.style.backgroundColor = "white"
    body.classList.remove("dark-theme")

    let parrafos = document.querySelector("#parrafos")
    //parrafos.style.color = "black"
    parrafos.classList.remove("dark-text")

    localStorage.setItem("theme", "light")
}