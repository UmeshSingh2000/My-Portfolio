let hamburger_menu_btn = document.getElementById("hamburger_menu_btn");
let menu = document.querySelector(".hamburger_menu");

hamburger_menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
})

let box = document.querySelectorAll(".hamburger_menu_box");
box.forEach((box) => {
    box.addEventListener("click", () => {
        menu.classList.remove("active");
    })
})
let loading=document.getElementById("load")
window.addEventListener("load",()=>{
    loading.style.display="none";
})
