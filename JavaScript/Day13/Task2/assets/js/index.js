
// Select heading using getElementById()
let heading = document.getElementById("heading");

// Select button using getElementById()
let button = document.getElementById("btn");

// Add click event
button.addEventListener("click", () => {

    // Change heading text
    heading.textContent = "DOM is a bridge between html and JavaSript";

    // Change heading color
    heading.style.color = "blue";

    // Add CSS class
    heading.classList.add("highlight");
});
