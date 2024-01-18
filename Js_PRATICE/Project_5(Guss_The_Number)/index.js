let num; 
function easy(){
    num = Math.floor(Math.random()*10)+1;
    gameSt();
}

function medium(){
    num = Math.floor(Math.random()*100)+1;
    gameSt();
}

function hard(){
    num = Math.floor(Math.random()*100)+1;
    gameSt();
}

const res = document.getElementById("ans");

let nos_guess = 0;
function gameSt(){
    let number = parseInt(prompt("Enter a number"));
    nos_guess++;
    start(number);   
}
function start(number){
if(num === number){
    let i = 101 - nos_guess;
res.innerText="Bingo"+" Points = "+ i;
}else if(num>number){
    res.innerText="Bingo is smaller";
}else if(num<number){
    res.innerText="Bingo is greater";
}else{
    res.innerText="Dingo"+" Points = "+ 0;
}
}