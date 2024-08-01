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


//loading
let loading = document.getElementById("load")
window.addEventListener("load", () => {
    loading.style.display = "none";
})

// contact form data
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});



let hamburger_menu = document.getElementById("hamburger_menu");
hamburger_menu.addEventListener("click", (e) => {
    if (e.target != box) {
        menu.classList.remove("active");
    }
})


let projects = document.querySelectorAll('.project')
projects.forEach((project)=>{
    let video = project.querySelector('video')
    video.addEventListener('mouseenter', () => {
        video.play()
    })
    video.addEventListener('mouseleave',()=>{
        video.pause()
    })
})