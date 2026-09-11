const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const email = loginEmail.value;
    const password = loginPassword.value;

    const getLocalData =
        JSON.parse(localStorage.getItem("mydatas")) || [];

    const user = getLocalData.find((data) => {
        return data.email === email && data.password === password;
    });

    if (user) {
        alert("Successfully Login");
        loginForm.reset();
    } else {
        alert("Invalid Email or Password");
    }
});