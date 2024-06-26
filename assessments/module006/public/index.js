const drawBtn = document.querySelector("#draw");
const choicesDiv = document.querySelector("#choices");
const compDuoDiv = document.querySelector("#comp-duo");
const playerDuoDiv = document.querySelector("#player-duo");
const seeAllBtn = document.querySelector("#see-all");
const allBotsDiv = document.querySelector("#all-bots");
const duelBtn = document.querySelector("#duel");
const resultsText = document.querySelector("#results");
const playAgainBtn = document.querySelector("#play-again");
const winsText = document.querySelector("#wins");
const lossesTest = document.querySelector("#losses");
const chooseHeader = document.querySelector("#choose-header");
const yourDuoHeader = document.querySelector("#your-duo-header");
const compDuoHeader = document.querySelector("#comp-duo-header");

// Define playerRecord on the client-side
const playerRecord = {
  wins: 0,
  losses: 0,
};

let choices = [];
let compDuo = [];
let playerDuo = [];

duelBtn.classList.add("hide");
playAgainBtn.classList.add("hide");
chooseHeader.classList.add("hide");
yourDuoHeader.classList.add("hide");
compDuoHeader.classList.add("hide");

const makeRobotChoiceCard = (bot) => {
  return `
        <div class="bot-card outline">
        <img src='${bot.imgAddress}' alt='${bot.name}'/>
        <h3>${bot.name}</h3>
        <h4>Health: ${bot.health}</h4>
        <p>Attack 1: ${bot.attacks[0].damage} damage</p>
        <p>Attack 2: ${bot.attacks[1].damage} damage</p>
        <button class="bot-btn" onclick="chooseBot(${bot.id})">Add to Duo</button>
        </div>
    `;
};

const makeRobotPlayerCard = (bot) => {
  return `
        <div class="bot-card outline">
        <img src='${bot.imgAddress}' alt='${bot.name}'/>
        <h3>${bot.name}</h3>
        <h4>Health: ${bot.health}</h4>
        <p>Attack 1: ${bot.attacks[0].damage} damage</p>
        <p>Attack 2: ${bot.attacks[1].damage} damage</p>
        <button class="bot-btn" onclick="putBotBack(${bot.id})">Remove from Duo</button>
        </div>
    `;
};

const makeRobotDisplayCard = (bot) => {
  return `
        <div class="bot-card outline">
        <img src='${bot.imgAddress}' alt='${bot.name}'/>
        <h3>${bot.name}</h3>
        <h4>Health: ${bot.health}</h4>
        <p>Attack 1: ${bot.attacks[0].damage} damage</p>
        <p>Attack 2: ${bot.attacks[1].damage} damage</p>
        </div>
    `;
};

const renderChoices = () => {
  choicesDiv.innerHTML = "";
  chooseHeader.classList.remove("hide");

  choices.forEach((choice) => {
    let botHtml = makeRobotChoiceCard(choice);
    choicesDiv.innerHTML += botHtml;
  });
};

const renderCompDuo = () => {
  compDuoDiv.innerHTML = "";
  compDuoHeader.classList.remove("hide");

  compDuo.forEach((bot) => {
    let botHtml = makeRobotDisplayCard(bot);
    compDuoDiv.innerHTML += botHtml;
  });
};

const renderPlayerDuo = () => {
  playerDuoDiv.innerHTML = "";
  yourDuoHeader.classList.remove("hide");

  playerDuo.forEach((bot) => {
    let botHtml = makeRobotPlayerCard(bot);
    playerDuoDiv.innerHTML += botHtml;
  });
};

const chooseBot = (id) => {
  if (playerDuo.length === 2) {
    return alert("You can only choose two bots!");
  }
  let index = choices.findIndex((bot) => bot.id === id);
  playerDuo.push(choices[index]);
  choices.splice(index, 1);
  renderChoices();
  renderPlayerDuo();
  if (playerDuo.length === 2) {
    duelBtn.classList.remove("hide");
  }
};

const putBotBack = (id) => {
  let index = playerDuo.findIndex((bot) => bot.id === id);
  choices.push(playerDuo[index]);
  playerDuo.splice(index, 1);
  renderChoices();
  renderPlayerDuo();
  duelBtn.classList.add("hide");
  if (playerDuo.length === 0) {
    yourDuoHeader.classList.add("hide");
  }
};

const drawFive = () => {
  axios.get("/api/robots/shuffled").then((res) => {
    const shuffledBots = res.data;
    choices = shuffledBots.slice(0, 5);
    compDuo = shuffledBots.slice(6, 8);

    renderChoices();

    drawBtn.classList.add("hide");
  });
};

const duel = () => {
  resultsText.textContent = "Dueling...";
  duelBtn.classList.add("hide");
  choicesDiv.innerHTML = "";
  chooseHeader.classList.add("hide");
  renderCompDuo();
  document
    .querySelectorAll(".bot-btn")
    .forEach((btn) => btn.classList.add("hide"));
  setTimeout(() => {
    axios.post("/api/duel", { compDuo, playerDuo }).then(({ data }) => {
      resultsText.textContent = data;
      playAgainBtn.classList.remove("hide");
      //getPlayerStats();
      if (data === "You won!") {
        playerRecord.wins++; // Update wins on win
      } else {
        playerRecord.losses++; // Update losses on loss
      }

      updateStats();
    });
  }, 1500);
};

//move logic to client side
const updateStats = () => {
  winsText.textContent = `Wins: ${playerRecord.wins}`;
  lossesTest.textContent = `Losses: ${playerRecord.losses}`;
};

const reset = () => {
  resultsText.textContent = "";
  choices = [];
  compDuo = [];
  playerDuo = [];
  playAgainBtn.classList.add("hide");
  renderChoices();
  renderCompDuo();
  renderPlayerDuo();
  drawBtn.classList.remove("hide");
  compDuoHeader.classList.add("hide");
};

// const getPlayerStats = () => {
//   axios.get("/api/player").then(({ data: { wins, losses } }) => {
//     winsText.textContent = `Wins: ${wins}`;
//     lossesTest.textContent = `Losses: ${losses}`;
//   });
// };

const getAllBots = () => {
  axios.get("/api/robots").then(({ data }) => {
    allBotsDiv.innerHTML = "";

    data.forEach((bot) => {
      let botHtml = makeRobotDisplayCard(bot);
      allBotsDiv.innerHTML += botHtml;
    });
  });
};

drawBtn.addEventListener("click", drawFive);
duelBtn.addEventListener("click", duel);
playAgainBtn.addEventListener("click", reset);
seeAllBtn.addEventListener("click", getAllBots);

//getPlayerStats();
updateStats();
