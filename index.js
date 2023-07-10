//HOME//

let homeScoreEl = document.getElementById ("home-score")
let homeScore = 0

function increaseHomeScore1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function resetHomeScore() {
    homeScoreEl.textContent = 0
    homeScore = 0
}

//GUEST//

let guestScoreEl = document.getElementById ("guest-score")
let guestScore = 0

function increaseGuestScore1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetGuestscore() {
    guestScoreEl.textContent = 0
    guestScore = 0
}