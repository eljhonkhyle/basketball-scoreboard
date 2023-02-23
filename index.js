let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let countHome = 0
let countGuest = 0

// Home Score Counter

function freethrowHome(){
    countHome += 1
    scoreHomeEl.textContent = countHome
}
function midrangeHome(){
    countHome += 2
    scoreHomeEl.textContent = countHome
}
function longthreeHome(){
    countHome += 3
    scoreHomeEl.textContent = countHome
}

// Guest Score Counter

function freethrowGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}
function midrangeGuest(){
    countGuest += 2
    scoreGuestEl.textContent = countGuest
}
function longthreeGuest(){
    countGuest += 3
    scoreGuestEl.textContent = countGuest
}

// Reset button

function reset(){
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    countHome = 0
    countGuest = 0
    console.log("Score reset");
}