// generate computer choice
function generateComputerChoice() {
  const choices = ["stone", "paper", "scissor"];
  const compChoice = choices[Math.floor(Math.random() * 3)];
  return compChoice;
}

// play game handler
function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  console.log(userChoice, computerChoice);

  // game rules and conditions
  let winUser;
  if (userChoice === computerChoice) {
    displayMsg("Game Draw!");
    return;
  }

  //   user choices rock
  if (userChoice === "stone") {
    winUser = computerChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    winUser = computerChoice === "rock" ? true : false;
  } else if (userChoice === "scissor") {
    winUser = computerChoice === "paper" ? true : false;
  }

  if (winUser) {
    displayMsg("You won!!", winUser);
  } else {
    console.log(winUser);
    displayMsg("oh ho, Computer won!", winUser);
  }
}

// get user choices
document
  .getElementById("choices")
  .querySelectorAll(".choice")
  .forEach((choice) => {
    choice.addEventListener("click", function () {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

let userCount = 0;
let compCount = 0;
function displayMsg(msg, winUser) {
  const showMsg = document.getElementById("msg");
  if (winUser) {
    userCount++;
    document.getElementById("user-count").innerText = userCount;
    showMsg.innerText = msg;
    showMsg.style.backgroundColor = "green";
  } else if (winUser === false) {
    compCount++;
    document.getElementById("comp-count").innerText = compCount;
    showMsg.innerText = msg;
    showMsg.style.backgroundColor = "red";
  } else {
    showMsg.style.backgroundColor = "gray";
    showMsg.innerText = msg;
  }
}
