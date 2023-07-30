export function darkMode() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "black"
    
    let parrafos = document.querySelector("#parrafos")
    parrafos.style.color = "white"
    
    localStorage.setItem("theme", "dark")
    }
    
    export function lightMode() {
        let body = document.querySelector("body")
        body.style.backgroundColor = "white"
        
        let parrafos = document.querySelector("#parrafos")
        parrafos.style.color = "black"
        
        localStorage.setItem("theme", "light")
    }