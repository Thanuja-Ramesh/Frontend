const arrobj=[
    {name:"Js",course:"Node"},
    {name:"React",course:"Node"}, 
    {name:"Fullstack",course:"Node"}

]
const show = document.querySelector("#showdata")

show.innerHTML = ""
document.addEventListener("DOMContentLoaded",()=>{
    arrobj.forEach((e)=>{
        show.innerHTML += `<p>${e.name}</p>
        <p>${e.course}</p>`
    })
})