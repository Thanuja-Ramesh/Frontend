// 1. Select h1 using getElementById() 
let heading = document.getElementById("heading"); 
// 2. Change h1 text using textContent 
heading.textContent = "Welcome to JavaScript"; 
// 3. Select all paragraphs using querySelectorAll() 
let paragraphs = document.querySelectorAll(".paragraph"); 
// 4. Change the text of each paragraph 
paragraphs.forEach((p, i) => { 
    p.textContent = `This is paragraph ${i + 1}`; 
});
