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