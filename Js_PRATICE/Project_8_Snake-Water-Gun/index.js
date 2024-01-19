let choice;
const my_arr = ['Snake', 'Water', 'Gun'];
let randomElement;
const res = document.getElementById("result");

function snake(){
    choice = document.getElementById("snake").value;
    start();
}
function water(){
    choice = document.getElementById("water").value;
    start();
}
function gun(){
    choice = document.getElementById("gun").value;
    start();
}

function random(){
    randomElement = my_arr[Math.floor(Math.random() * my_arr.length)];
}

function start(){
    random();
    if(randomElement === choice){
        res.innerHTML = "Play Again";
    }else if(randomElement == 'Snake' && choice == 'Water'){
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Water' && choice == 'Gun'){
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Gun' && choice == 'Snake'){
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else{
        res.innerHTML = `You Won because my Choice is ${randomElement}`;
    }
}