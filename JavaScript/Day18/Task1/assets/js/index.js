const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const userpassword = document.getElementById("userpassword");

const registerBtn = document.getElementById("registerBtn");
const myform = document.getElementById("myform");

registerBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const name = username.value;
    const email = useremail.value;
    const password = userpassword.value;

    const formDatas = {
        userid: Date.now(),
        name,
        email,
        password
    };

    const getLocalData =
        JSON.parse(localStorage.getItem("mydatas")) || [];

    getLocalData.push(formDatas);

    localStorage.setItem("mydatas", JSON.stringify(getLocalData));

    alert("Successfully Register");

    myform.reset();

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});