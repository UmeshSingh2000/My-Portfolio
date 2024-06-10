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

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
 "#B3B3B3",
  "#666666",
  "#333333",
  "#E6E6E6",
  "#999999",
  "#CCCCCC",
  "#4D4D4D",
  "#1A1A1A",
  "#7F7F7F",
  "#000000",
  "#999999",
  "#FFFFFF",
  "#E6E6E6",
  "#CCCCCC",
  "#333333",
  "#4D4D4D",
  "#000000",
  "#1A1A1A",
  "#7F7F7F",
  "#666666",
  "#B3B3B3",
  "#000000"
];
  



circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
