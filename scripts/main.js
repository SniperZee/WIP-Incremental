var game = {
  thing: 0,
  thingPerClick: 1
}

function getThing() {
  game.thing += game.thingPerClick
  document.getElementById("things").innerHTML = game.thing + " Things"
}