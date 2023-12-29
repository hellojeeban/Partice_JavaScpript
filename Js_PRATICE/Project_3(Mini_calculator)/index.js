let num1 = 9;
let num2 = 2;
document.getElementById("num1").innerText=num1;
document.getElementById("num2").innerText=num2;
let res = document.getElementById("result");

function add(){
    res.innerText =num1+num2;
}
function sub(){
    res.innerText =num1-num2;
}
function mul(){
    res.innerText =num1*num2;
}
function div(){
    res.innerText =num1/num2;
}