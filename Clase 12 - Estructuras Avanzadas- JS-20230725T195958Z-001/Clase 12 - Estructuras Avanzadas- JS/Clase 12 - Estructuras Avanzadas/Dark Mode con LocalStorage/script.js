import {darkMode, lightMode} from "./themeModules.js"

let boton = document.querySelector("#boton")

boton.addEventListener("click", function(){
if (localStorage.getItem("theme") == "dark") {
    lightMode()
}else{
    darkMode()
}
})

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("theme") == "dark") {
        darkMode()
    }else{
        lightMode()
    }
})
