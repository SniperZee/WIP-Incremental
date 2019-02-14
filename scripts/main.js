var player = { //player stats
  attack: 1,
  gold: 0,
};

var monster = { //monster stats
  health: 10,
  maxHealth: 10,
  goldReward: 10
};

function attack() { //attacks the monster, if monster has no hp, rewards gold
  if(monster.health > 1){
    monster.health -= player.attack
  }else{
    monster.health = monster.maxHealth
    player.gold += monster.goldReward
  }
  updateValues();
}

function updateValues(){ //updates displayed values
  document.getElementById("HP").innerHTML = "Monster HP: " + monster.health + "/" + monster.maxHealth
  document.getElementById("gold").innerHTML = "Gold: " + player.gold
}