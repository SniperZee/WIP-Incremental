var adjectives = ["Awful","Average","Good","Rare","Epic","Legendary"];
//various adjectives and nouns for our shitty weapons
var nouns = ["Sword","Axe","Bow","Staff"];

function newName() { //randomly picks an adjective and a noun and displays the result
  var randomAdjective = Math.floor(Math.random() * (adjectives.length));
  var randomNoun = Math.floor(Math.random() * (nouns.length));
  document.getElementById("itemName").innerText = adjectives[randomAdjective] + " " + nouns[randomNoun];
}