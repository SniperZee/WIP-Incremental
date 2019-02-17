var player = { //player stats
  name: "Hero", //TODO: Let player name themselves
  health: 100,
  maxHealth: 100,
  attack: 1,
  gold: 0,
  swordLevel: 0
};

var monster = { //monster stats
  health: 10,
  maxHealth: 10,
  attack: 1,
  goldReward: 10
};

function gimmeGold() { //debug
  player.gold += 100;
  console.log("Gold has been gimme'd");
  updateValues();
}

function attack() { //attacks the monster
  monster.health -= player.attack + player.swordLevel;
  if(monster.health <= 0){ // if the monster has no health, give gold, and bring back the monster
    console.log("Monster has died.");
    monster.health = monster.maxHealth;
    player.gold += monster.goldReward
  }else{ // if the monster is alive, it'll attack the player TODO: Make something happen if the player dies.
    player.health -= monster.attack;
  }
  updateValues();
}

var store = { //store prices
  swordPrice: 10,
  potionPrice: 10
};

function buySword() { //lets the player upgrade their sword if they have enough gold.
  if (player.gold >= store.swordPrice){
    player.gold -= store.swordPrice;
    player.attack += 1;
    store.swordPrice *= 2; //TODO: find a better way for this to scale.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Thank you! That'll definitely make you deal more damage."
  }else if (randomNumber <= 0.10){ //yes i'm easter egg-ing already
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry " + player.name + ", I can't give credit. Come back when you're a little... Mmmmmm... richer!"
  }else{ //tells the player that they don't have enough gold.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry, you don't have the gold to afford that."
  }
  updateValues();
}

function buyPotion() { //let's the player buy a potion to restore health
  if (player.gold >= store.potionPrice){
    player.gold -= store.potionPrice;
    player.health += 100;
    if (player.health >= player.maxHealth + 1) {
      player.health = player.maxHealth;
    } //TODO: Have shopkeeper comments in a separate function?
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Thank you!";
  }else{
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry, you don't have the gold to afford that.";
  }
  updateValues();
}

function updateValues(){ //updates displayed values
  document.getElementById("playerHealth").innerText = "Your HP: " + player.health + "/" + player.maxHealth;
  document.getElementById("monsterHealth").innerText = "Monster HP: " + monster.health + "/" + monster.maxHealth;
  document.getElementById("gold").innerText = "Gold: " + player.gold;
  document.getElementById("swordPrice").innerText= "Buy new sword for " + store.swordPrice + " gold";
  rng();
}

var randomNumber = 0;

function rng() { //random number generator
  randomNumber = Math.random();
  console.log("Current random number is " + randomNumber);
}