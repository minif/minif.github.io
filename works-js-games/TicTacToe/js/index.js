//Tic Tac Toe
//Ma variables
var aa = "-"
var ab = "-"
var ac = "-"
var ba = "-"
var bb = "-"
var bc = "-"
var ca = "-"
var cb = "-"
var cc = "-"
var turn = "-"
var lock = false

//Ma functions
function reSet() {
 aa = "-"
 ab = "-"
 ac = "-"
 ba = "-"
 bb = "-"
 bc = "-"
 ca = "-"
 cb = "-"
 cc = "-"
 turn = "-"
 lock = false
}

function win(winner) {
    document.getElementById('turn').innerHTML = winner + " Won the Game!"
    lock = true
}

function reWrite() {
  document.getElementById('aa').innerHTML = aa
  document.getElementById('ab').innerHTML = ab
  document.getElementById('ac').innerHTML = ac
  document.getElementById('ba').innerHTML = ba
  document.getElementById('bb').innerHTML = bb
  document.getElementById('bc').innerHTML = bc
  document.getElementById('ca').innerHTML = ca
  document.getElementById('cb').innerHTML = cb
  document.getElementById('cc').innerHTML = cc
}

function takeTurn() {
  if (turn == "X") {
    turn = "O"
  } else {
    turn = "X"
  }
  document.getElementById('turn').innerHTML = turn + "'s Turn"
  if (aa == "X" && ba == "X" && ca == "X") {
    win("X")
  } else if (ab == "X" && bb == "X" && cb == "X") {
    win("X")
  } else if (ac == "X" && bc == "X" && cc == "X") {
    win("X")
  } else if (ab == "X" && bb == "X" && cb == "X") {
    win("X")
  } else if (aa == "X" && ab == "X" && ac == "X") {
    win("X")
  } else if (ba == "X" && bb == "X" && bc == "X") {
    win("X")
  } else if (ca == "X" && cb == "X" && cc == "X") {
    win("X")
  } else if (aa == "X" && bb == "X" && cc == "X") {
    win("X")
  } else if (ca == "X" && bb == "X" && ac == "X") {
    win("X")
  } else if (aa == "O" && ba == "O" && ca == "O") {
    win("O")
  } else if (ac == "O" && bc == "O" && cc == "O") {
    win("O")
  } else if (ab == "O" && bb == "O" && cb == "O") {
    win("O")
  } else if (aa == "O" && ab == "O" && ac == "O") {
    win("O")
  } else if (ba == "O" && bb == "O" && bc == "O") {
    win("O")
  } else if (ca == "O" && cb == "O" && cc == "O") {
    win("O")
  } else if (aa == "O" && bb == "O" && cc == "O") {
    win("O")
  } else if (ca == "O" && bb == "O" && ac == "O") {
    win("O")
  } 
  
}

document.getElementById('aa').onclick = function() {
  if (aa == "-" && !lock) {
      aa = turn
      reWrite()
    takeTurn()
  } 
}

document.getElementById('ab').onclick = function() {
  if (ab == "-" && !lock) {
  ab = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('ac').onclick = function() {
  if (ac == "-" && !lock) {
  ac = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('ba').onclick = function() {
  if (ba == "-" && !lock) {
  ba = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('bb').onclick = function() {
  if (bb == "-" && !lock) {
  bb = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('bc').onclick = function() {
  if (bc == "-" && !lock) {
  bc = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('ca').onclick = function() {
  if (ca == "-" && !lock) {
  ca = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('cb').onclick = function() {
  if (cb == "-" && !lock) {
  cb = turn
  reWrite()
  takeTurn()
  }
}

document.getElementById('cc').onclick = function() {
  if (cc == "-" && !lock) {
  cc = turn
  reWrite()
  takeTurn()
  }
}
document.getElementById('reset').onclick = function() {
  reSet()
  reWrite()
  takeTurn()
}
reWrite()
takeTurn()

