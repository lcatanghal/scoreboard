//HOME//

let homeScoreEl = document.getElementById ("home-score")
let homeScore = 0

let awayScoreEl = document.getElementById ("away-score")
let awayScore = 0

function increaseHomeScore(increment) {
    homeScore += increment
    homeScoreEl.textContent = homeScore
}

function increaseAwayScore(increment) {
    awayScore += increment
    awayScoreEl.textContent = awayScore
}

function resetScore(resetbutton) {
    if (resetbutton == "home"){
        homeScoreEl.textContent = 0
        homeScore = 0;
    }
    awayScoreEl.textContent = 0
    awayScore = 0;
}