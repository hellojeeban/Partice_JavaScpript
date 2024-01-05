let card1 = 10;
let card2 = 11;
let msg = "";
const sum_value = document.getElementById("card_sum");
const message_value = document.getElementById("message");
const cards_value = document.getElementById("card_el");
let sum = card1 + card2;
console.log(sum);
function result(){

    cards_value.innerText ="Cards : "+ card1 + " " +card2;

    sum_value.innerText = `Sum : ${sum}`;

    if(sum <= 20){
        msg = "Do you want to draw a new card?"
    }else if(sum === 21){
        msg = "You've got Blackjack!"
    }else{
        msg = "You're out of the game!"
    }
    message_value.innerText = msg;
}

function newCard(){
    message_value.innerText = "Drawing a new card from the deck!";
}