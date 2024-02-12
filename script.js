var num;
var num2;
let playerImage = document.getElementById("playerimg");
let computerImage = document.getElementById("compimg");
let playerPoint = 0;
let computerPoint = 0;
setInterval(myTimer, 8000);

// player code
document.getElementById("rock").addEventListener("click", rockClicked);

function rockClicked() {
  playerImage.src = "images/rock.png";
  num2 == 1;
}

document.getElementById("paper").addEventListener("click", paperClicked);

function paperClicked() {
  playerImage.src = "images/paper.png";
  num2 == 2;
}

document.getElementById("scissors").addEventListener("click", scissorsClicked);

function scissorsClicked() {
  playerImage.src = "images/scissors.png";
  num2 == 3;
}

//computer code
document.getElementById("rock").addEventListener("click", rockClickedComp);

function rockClickedComp() {
  num = Math.round(Math.random() * 4);
  if (num == 1) {
    computerImage.src = "images/rock.png";
  }
  if (num == 2) {
    computerImage.src = "images/paper.png";
    computerPoint++;
    document.getElementById("p2").innerHTML = computerPoint;
  }
  if (num == 3) {
    computerImage.src = "images/scissors.png";
    playerPoint++;
    document.getElementById("p1").innerHTML = playerPoint;
  }
}

document.getElementById("paper").addEventListener("click", paperClickedComp);

function paperClickedComp() {
  num = Math.round(Math.random() * 4);
  if (num == 1) {
    computerImage.src = "images/rock.png";
    playerPoint++;
    document.getElementById("p1").innerHTML = playerPoint;
  }
  if (num == 2) {
    computerImage.src = "images/paper.png";
  }
  if (num == 3) {
    computerImage.src = "images/scissors.png";
    computerPoint++;
    document.getElementById("p2").innerHTML = computerPoint;
  }
}

document
  .getElementById("scissors")
  .addEventListener("click", scissorsClickedComp);

function scissorsClickedComp() {
  num = Math.round(Math.random() * 4);
  if (num == 1) {
    computerImage.src = "images/rock.png";
    computerPoint++;
    document.getElementById("p2").innerHTML = computerPoint;
  }
  if (num == 2) {
    computerImage.src = "images/paper.png";
    playerPoint++;
    document.getElementById("p1").innerHTML = playerPoint;
  }
  if (num == 3) {
    computerImage.src = "images/scissors.png";
  }
}

//for all images
function myTimer() {
  playerImage.src = "images/question.png";
  computerImage.src = "images/question.png";
}
