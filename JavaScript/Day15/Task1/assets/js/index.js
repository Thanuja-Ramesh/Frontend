const content = document.getElementById("content");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        button.textContent = "Hide Details";
    } else {
        button.textContent = "Show Details";
    }
});


// const button = document.getElementById("btn");
// const content = document.getElementById("content");

// let isVisible = true;

// button.addEventListener("click", () => {

//     isVisible = !isVisible;

//     if (isVisible) {
//         content.style.display = "block";
//         btn.textContent = "Hide";
//     } else {
//         content.style.display = "none";
//         btn.textContent = "Show";
//     }

// });