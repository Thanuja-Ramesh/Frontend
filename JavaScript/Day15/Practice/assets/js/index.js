
const title = document.getElementById("title");
const btn = document.getElementById("btn");

//btn.addEventListener("click", () => {
//    title.textContent = "DOM Selector";
//});
let ison = false
btn.addEventListener("click",() => {
    ison =!ison
    if(ison){
        btn.textContent = "blue"


    }else{
        btn.textContent = "red"
    }

})