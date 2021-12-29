let cling = new Audio("/sound/cling.wav");

let clicked = function(clicked_id){
    let x = Math.floor(Math.random()*13) +1;
    let y = toString(clicked_id);
    let a =clicked_id.slice(0,2);
    let b = clicked_id.slice(2,4);
    let c = document.getElementById("nextCard1").textContent;
    let d = document.getElementById("nextCard2").textContent;
    document.getElementById(a).textContent = c;
    document.getElementById(b).textContent = d;
    getNext2cards();
    checkCardsLeft();
    cardChecker();
    buttonsChecker();
    
}

let deckOfCards = [];

let play = function(){
    let boardCards = ["a1","b1","c1","d1","a2","b2","c2","d2","a3","b3","c3","d3","a4","b4","c4","d4"];
    boardCards.forEach(function(item){
        document.getElementById(item).textContent = "0";
    });
    shuffleArray();
    deckOfCards = shuffleArray();
    getNext2cards();
    buttonsChecker();
}

function shuffleArray() {

    let cardsInDeck = ["1","2","3","4","5","6","7","8","9","10", "1","2","3","4","5","6","7","8","9","10", "1","2","3","4","5","6","7","8","9","10", "1","2","3","4","5","6","7","8","9","10"];
    for (let i = cardsInDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsInDeck[i], cardsInDeck[j]] = [cardsInDeck[j], cardsInDeck[i]];
    }
    return cardsInDeck;
}

let buttonsChecker = function(){
    let buttonsArray = ["a1b1","b1c1","c1d1","a2b2","b2c2","c2d2","a3b3","b3c3","c3d3","a4b4","b4c4","c4d4"];
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    buttonsArray.forEach(function(item){
        a = item.slice(0,2);
        b = item.slice(2,4);
        c = Number(document.getElementById(a).textContent);
        d = Number(document.getElementById(b).textContent);
        if (c || d > 0) {
            document.getElementById(item).style.visibility = "hidden";
        } else {
            document.getElementById(item).style.visibility = "visible";
            
        }
    });
};



//player push play button

//initiate
//all cards on board will be put inside boardcardarray
//all cards and buttons on board will reset
//set all cards value on boardcardsarray to 0
//buttons avialabilty checker

//card deck reshuffle

//change showcard function
//showcard 1 and 2 will get the value of the last two cards on deck
function getNext2cards(){
    document.getElementById("nextCard1").textContent = deckOfCards.pop();
    document.getElementById("nextCard2").textContent = deckOfCards.pop();
    // alert(deckOfCards);

};
//the last two cards will be deleted
//if there is no card left, the deck will reshuffle
function checkCardsLeft(){
    // alert("cards left: " + deckOfCards.length);
    if (deckOfCards.length == 0) {
        shuffleArray();
        deckOfCards = shuffleArray();
    }

};
//lcbox displays how many cards are left


//player push one of the available buttons in the board
//change showcard function
//pushed button cards will get the value of showcards
//buttons availabilty checker
//execute card checker function

//board game function

//cards checker function
function cardChecker(){
    let firstCard = "";
    let secondCard = "";
    let thridCard = "";
    let a = 0;
    let b = 0;
    let c = 0;
    cardCombiArray.forEach(function(item){
        firstCard = item.slice(0,2);
        secondCard = item.slice(2,4);
        thridCard = item.slice(4,6);
        a = Number(document.getElementById(firstCard).textContent);
        b = Number(document.getElementById(secondCard).textContent);
        c = Number(document.getElementById(thridCard).textContent);
        // alert(a+" "+b +" " +c);
        if (a && b && c > 0) {
            // alert(item + " has values");
            straightChecker(a,b,c,item);
            sameChecker(a,b,c,item);
        }
    });
    // alert("winning combination "+ winningCombi);
    scoringNemptying();
};
let winningCombi = [];
function straightChecker(first, second, third,item){
    let a = [first,second,third];
    a = a.sort(function(x,y){return x-y});
    // alert(a[0]);
    if (a[2]-a[1] == 1) {
        if (a[1]-a[0] == 1) {
            // alert("We have a straight " + a)
            winningCombi.push(item);
        }
        
    }
}
function scoringNemptying(){
    let firstCard = "";
    let secondCard = "";
    let thridCard = "";
    winningCombi.forEach(function(item){
        firstCard = item.slice(0,2);
        secondCard = item.slice(2,4);
        thridCard = item.slice(4,6);
        document.getElementById(firstCard).textContent = "0";
        document.getElementById(secondCard).textContent = "0";
        document.getElementById(thridCard).textContent = "0";
        cling.play();
    })
    winningCombi = [];
}

function sameChecker(first, second, third,item){
    if (first === second) {
        if (second === third) {
            winningCombi.push(item);
            alert(item);
        }
    }
}
//check all index in cardCombiArray for straight or same 3 numbers
//then put all straight combination inside straightCards array and all 3 same numbers inside sameNumbers array
//give points for all the right combinations
//get all board cards inside straightCards and sameNumbers array, then set it to value of 0
//buttons availability checker
//check if there is available button
//noAvailableButton. if theres no available button left, reset


//loop all index object inside cardCombiArray
/*function(first, second, third)
    check if all three cards has a value
        check if three cards are straight;
        check if three cards are the same;
    else
        break;

*/
// let cardCombiArray = ["a1a2a3"];
let cardCombiArray = ["a1a2a3", "a1a2b1", "a1a2b2", "a1b1b2", "a1b1c1","a2b1b2", "b1b2b3", "b1b2c1", "b1b2c2", "b1c1d1", "b2c1c2", "c1c2c3", "c1c2d1", "c1c2d2", "c2d1d2", "d1d2d3", "a2a3a4", "a2a3b2", "a2a3b3", "a2b2b3", "a2b2c2", "a3b2b3", "b2b3b4", "b2b3c2", "b2b3c3", "b2c2c3", "b2c2d2", "b3c2c3", "c2c3c4",  "c2c3d2", "c2c3d3", "c3d2d3", "d2d3d4", "a3a4b3", "a3a4b4", "a3b3b4", "a3b3c3", "a4b3b4", "b3b4c3", "b3b4c4", "b3c3d3", "b4c3c4", "c3c4d3", "c3c4d4", "c4d3d4", "a4b4c4", "b4c4d4", "b3c3c4", "c2d2d3","b1c1c2", "c3d3d4", "c1d1d2"];
//card combinations
/*a1 card a1a2a3 a1a2b1 a1a2b2 a1b1b2 a1b1c1
    b1 card a2b1b2 b1b2b3 b1b2c1 b1b2c2  b1c1d1
    c1 card b2c1c2 c1c2c3 c1c2d1 c1c2d2
    d1 card c2d1d2 d1d2d3
    a2 card a2a3a4 a2a3b2 a2a3b3 a2b2b3 a2b2c2
    b2 card a3b2b3 b2b3b4 b2b3c2 b2b3c3 b2c2c3 b2c2d2
    c2 card b3c2c3 c2c3c4 c2c3d2 c2c3d3
    d2 card c3d2d3 d2d3d4
    a3 card a3a4b3 a3a4b4 a3b3b4 a3b3c3
    b3 card a4b3b4 b3b4c3 b3b4c4 b3c3d3
    c3 card b4c3c4 c3c4d3 c3c4d4
    d3 card c4d3d4
    a4 card a4b4c4
    b4 card b4c4d4
*/


