let choice;
const my_arr = ['Snake', 'Water', 'Gun'];
let randomElement;

// let snake = 'img/snake.png';
// let water = 'img/water.png';
// let gun = 'img/gun.png';

const res = document.getElementById("result");
//const img = document.getElementById("img");

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
       // img.innerHTML = `<img src="${}" alt=""> `
        res.innerHTML = "Play Again";
    }else if(randomElement == 'Snake' && choice == 'Water'){
       // img.innerHTML = `<img src="${snake}" alt=""> == <img src="${water}" alt="">`;
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Water' && choice == 'Gun'){
       // img.innerHTML = `<img src="${water}" alt=""> == <img src="${gun}" alt="">`;
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Gun' && choice == 'Snake'){
        //img.innerHTML = `<img src="${gun}" alt=""> == <img src="${snake}" alt="">`
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else{
        res.innerHTML = `You Won because my Choice is ${randomElement}`;
    }
}