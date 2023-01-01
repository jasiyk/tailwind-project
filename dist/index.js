console.log('JS connected')

window.onload = (c) => {
    
const dot = document.getElementById("dot")
const menu = document.getElementById("menu")
    dot.addEventListener("click", () => {
        menu.classList.toggle("xss:hidden")
    })
   
}
