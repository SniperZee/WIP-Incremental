var player = {
  attack: 1,
  gold: 0,
};

var monster = {
  health: 10,
  maxHealth: 10,
  goldReward: 10
};

function attack() {
  if(monster.health > 1){
    monster.health -= player.attack
  }else{
    monster.health = monster.maxHealth
    player.gold += monster.goldReward
  }
  updateValues();
}

function updateValues(){
  document.getElementById("HP").innerHTML = "Monster HP: " + monster.health + "/" + monster.maxHealth
  document.getElementById("gold").innerHTML = "Gold: " + player.gold
}