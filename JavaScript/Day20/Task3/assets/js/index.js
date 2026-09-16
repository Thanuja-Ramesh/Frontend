document.addEventListener("DOMContentLoaded",()=>{
    const show = document.querySelector("#recipes   ")
    const getData = async ()=>{
        const getfromApi = await fetch("https://dummyjson.com/recipes")
        const dataChange = await getfromApi.json()
        const result = dataChange.recipes
        result.forEach((e)=>{
            show.innerHTML += `
            <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.ingredients}</td>
            <td><img src=${e.image} />
            
            </tr>`
        })
    }
    getData()
})