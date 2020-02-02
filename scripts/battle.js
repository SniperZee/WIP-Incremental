var monster = { //monster stats
  level: 1,
  health: 10,
  maxHealth: 10,
  attack: 1,
  goldReward: 10
};

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