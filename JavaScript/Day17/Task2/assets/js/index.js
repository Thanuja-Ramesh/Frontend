const form = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");

let employees = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    const employee = {
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    employeeList.innerHTML = "";

    employees.forEach((employee) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        employeeList.appendChild(row);
    });

    form.reset();
});