document.addEventListener("DOMContentLoaded",()=>{
    const show=document.querySelector("#showData")
    const getData = async ()=>{
        const getfromApi = await fetch("https://dummyjson.com/quotes")
        const dataChange = await getfromApi.json()
        const result = dataChange.quotes
        
        result.forEach((e)=>{
            show.innerHTML +=`
            <tr>
            <td>${e.id}</td>
             <td>${e.quote}</td>
              <td>${e.author}</td>
              
              
            
            </tr>`

        })
        
    }
    getData()
})