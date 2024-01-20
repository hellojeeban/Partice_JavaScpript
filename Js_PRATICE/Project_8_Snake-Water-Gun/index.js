let choice;
const my_arr = ['Snake', 'Water', 'Gun'];
let randomElement;

let snakeImg = 'img/snake.png';
let waterImg = 'img/water.png';
let gunImg = 'img/gun.png';

let choiceImg;

const res = document.getElementById("result");

function snake(){
    choice = document.getElementById("snake").value;
    choiceImg = snakeImg;
    start();
}
function water(){
    choice = document.getElementById("water").value;
    choiceImg= waterImg;
    start();
}
function gun(){
    choice = document.getElementById("gun").value;
    choiceImg = gunImg;
    start();
}

function random(){
    randomElement = my_arr[Math.floor(Math.random() * my_arr.length)];
}
function create(src1, src2){
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    img1.src = src1;
    img2.src = src2;
    document.getElementById('img').appendChild(img1);
    document.getElementById('img').appendChild(img2);
}

function autoRefresh() {
    window.location = window.location.href;
}

function start(){
    random();
    if(randomElement === choice){
        let img;
        if(randomElement == 'Snake'){
            img = snakeImg;
        }else if(randomElement == 'Water'){
            img = waterImg;
        }else {
            img = gunImg;
        }
        create(img, choiceImg);
        res.innerHTML = "Play Again";
    }else if(randomElement == 'Snake' && choice == 'Water'){
        create(snakeImg, waterImg);
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Water' && choice == 'Gun'){
        create(waterImg, gunImg);
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else if(randomElement == 'Gun' && choice == 'Snake'){
        create(gunImg, snakeImg);
        res.innerHTML = `You Lose because my Choice is ${randomElement}`;
    }else{
        let img;
        if(randomElement == 'Snake'){
            img = snakeImg;
        }else if(randomElement == 'Water'){
            img = waterImg;
        }else {
            img = gunImg;
        }
        create(img, choiceImg);
        res.innerHTML = `You Won because my Choice is ${randomElement}`;
    }
    setInterval('autoRefresh()', 1400);
}