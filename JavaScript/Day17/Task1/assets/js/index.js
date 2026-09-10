const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let students = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    const student = {
        name: name,
        age: age,
        city: city
    };

    students.push(student);

    studentList.innerHTML = "";

    students.forEach((student) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
            <hr>
        `;

        studentList.appendChild(div);
    });

    form.reset();
});