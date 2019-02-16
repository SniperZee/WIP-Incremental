var player = { //player stats
  attack: 1,
  gold: 0,
  swordLevel: 0
};

var monster = { //monster stats
  health: 10,
  maxHealth: 10,
  goldReward: 10
};

function gimmeGold() { //debug
  player.gold += 100;
  console.log("Gold has been gimme'd");
  updateValues();
}

function attack() { //attacks the monster, if monster has no hp, rewards gold
  monster.health -= player.attack + player.swordLevel;
  if(monster.health <= 0){
    console.log("Monster has died.");
    monster.health = monster.maxHealth;
    player.gold += monster.goldReward
    }
  updateValues();
}

var swordPrice = 10;

function buySword() { //lets the player upgrade their sword if they have enough gold.
  if (player.gold >= swordPrice){
    player.gold -= swordPrice;
    player.attack += 1;
    swordPrice *= 2; //TODO: find a better way for this to scale.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Thank you! That'll definitely make you deal more damage."
  }else if (randomNumber <= 0.15){ //yes i'm easter egg-ing already
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry hero, I can't give credit. Come back when you're a little... Mmmmmm... richer!"
  }else{ //tells the player that they don't have enough gold.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry, you don't have the gold to afford that."
  }
  updateValues();
}

function updateValues(){ //updates displayed values
  document.getElementById("monsterHealth").innerText = "Monster HP: " + monster.health + "/" + monster.maxHealth;
  document.getElementById("gold").innerText = "Gold: " + player.gold;
  document.getElementById("swordPrice").innerText= "Buy new sword for " + swordPrice + " gold";
  rng();
}

var randomNumber = 0;

function rng() { //random number generator
  randomNumber = Math.random();
  console.log("Current random number is " + randomNumber);
}