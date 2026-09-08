const details = document.getElementById("details");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
        button.textContent = "Hide Details";
    } else {
        button.textContent = "Show Details";
    }

});