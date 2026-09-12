//Basic syntax of fetch() using:
//fetch()   .then()
//response.json()   .catch()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });