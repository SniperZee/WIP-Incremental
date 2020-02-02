var monster = { //monster stats
  count: 0,
  level: 1,
  health: 10,
  maxHealth: 10,
  attack: 1,
  goldReward: 10
};

function attack() { //attacks the monster
  monster.health -= player.attack + player.swordLevel;
  if(monster.health <= 0){ // if the monster has no health, give gold, and bring back the monster
    monsterDie();
  }else{ // if the monster is alive, it'll attack the player
    player.health -= monster.attack;
    if(player.health <= 0){//if the player dies, take half of their gold
      playerDie();
    }
  }
  updateValues();
}
function monsterDie(){
  console.log("Monster has died.");
  monster.health = monster.maxHealth;
  player.gold += monster.goldReward;
  monster.count += 1;
  if (monster.count === 10){
    levelUp();
  }
}
function levelUp(){
  monster.count = 0;
  monster.level += 1;
  monster.health = (10 * monster.level);
  monster.maxHealth = (10 * monster.level);
  monster.attack = (monster.level);
  monster.goldReward = (10 * monster.level);
}
function playerDie(){
  console.log("Player has died.");
  player.gold -= Math.round(player.gold /= 2);
  player.health = player.maxHealth;
  monster.count = 0;
  monster.level -= 1;
  if(monster.level === 0){
    monster.level = 1
  }
}
