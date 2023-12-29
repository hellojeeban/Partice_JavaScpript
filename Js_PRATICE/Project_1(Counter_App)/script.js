let count = 0;
const ele = document.getElementById("counter");
function increment(){
    ele.innerText=++count;
}
function decriment(){
   ele.innerText=--count;
}    
let time = count;

function save(){
    let text = count + " - ";
    count = 0;
    document.getElementById("msg").innerText += text; 
    ele.innerText=0; 
}
