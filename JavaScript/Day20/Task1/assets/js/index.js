document.addEventListener("DOMContentLoaded", () => {

    const show = document.querySelector("#showdata");

    const getData = async () => {

        const getfromApi = await fetch("https://dummyjson.com/products");

        const dataChange = await getfromApi.json();

        const result = dataChange.products;

        result.forEach((e) => {

            show.innerHTML += `
                <tr>    
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                    <td>${e.price}</td>
                     </td>
                </tr>`
        });
    };

    getData();

});
