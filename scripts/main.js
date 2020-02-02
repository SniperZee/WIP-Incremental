var player = { //player stats
  name: "Hero",
  health: 100,
  maxHealth: 100,
  attack: 1,
  gold: 0,
  swordLevel: 1
};

function rename() {//lets the player name themselves
  document.getElementById("playerName").innerText = document.getElementById("newName").value
}

function updateValues(){ //updates displayed values
  document.getElementById("playerHealth").innerText = "Your HP: " + player.health + "/" + player.maxHealth;
  document.getElementById("monsterHealth").innerText = "Monster HP: " + monster.health + "/" + monster.maxHealth;
  document.getElementById("gold").innerText = "Gold: " + player.gold;
  document.getElementById("swordLevel").innerText = "Sword Level: " + player.swordLevel;
  document.getElementById("swordPrice").innerText= "Buy new sword for " + store.swordPrice + " gold";
  rng();
}

var randomNumber = 0;
function rng() { //Random number generator.
  randomNumber = Math.random();
  console.log("Current random number is " + randomNumber);
}
//--------------------------------------------------------------------------------
//DEBUG FUNCTIONS

function gimmeGold() { //Gives the player some gold.
  player.gold += 100;
  console.log("Gold has been gimme'd");
  updateValues();
}

function hurtMe() {//brings the player to 1 hp
  player.health = 1;
  console.log("Player has been hurt");
  updateValues();
}