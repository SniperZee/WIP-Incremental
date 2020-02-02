var player = { //player stats
  name: "Hero",
  health: 100,
  maxHealth: 100,
  attack: 1,
  gold: 0,
  swordLevel: 1
};

var monster = { //monster stats
  level: 1,
  health: 10,
  maxHealth: 10,
  attack: 1,
  goldReward: 10
};

function rename() {//lets the player name themselves
  document.getElementById("playerName").innerText = document.getElementById("newName").value
}

function attack() { //attacks the monster
  monster.health -= player.attack + player.swordLevel;
  if(monster.health <= 0){ // if the monster has no health, give gold, and bring back the monster
    console.log("Monster has died.");
    monster.health = monster.maxHealth;
    player.gold += monster.goldReward
  }else{ // if the monster is alive, it'll attack the player
    player.health -= monster.attack;
    if(player.health <= 0){//if the player dies, take half% of their gold
      console.log("Player has died.");
      player.gold -= Math.round(player.gold /= 2);
      player.health = player.maxHealth;
    }
  }
  updateValues();
}

var store = { //store prices
  swordPrice: 10,
  potionPrice: 10
};

function buySword() { //lets the player upgrade their sword if they have enough gold.
  if (player.gold >= store.swordPrice){
    console.log("Attempted to buy sword.");
    player.gold -= store.swordPrice;
    player.attack += 1;
    player.swordLevel += 1;
    store.swordPrice = Math.floor(store.swordPrice / 0.8); //TODO: find an even better way for this to scale.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Thank you! That'll definitely make you deal more damage."
  }else if (randomNumber <= 0.10){ //yes i'm easter egg-ing already
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry " + player.name + ", I can't give credit. Come back when you're a little... Mmmmmm... richer!"
  }else{ //tells the player that they don't have enough gold.
    document.getElementById("shopkeeper").innerText = "Shopkeeper: Sorry, you don't have the gold to afford that."
  }
  updateValues();
}

function buyPotion() { //let's the player buy a potion to restore health
  console.log("Attempted to buy potion.");
  if (player.gold >= store.potionPrice){
    player.gold -= store.potionPrice;
    player.health += 100;
    if (player.health >= player.maxHealth + 1) {
      player.health = player.maxHealth;
    }
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