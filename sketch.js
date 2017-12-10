var ship;
var enemies = [];

function setup() {
  createCanvas(600,400);
  ship = new Ship();
  for (var i = 0; i < 5; i ++){
  enemies[i] = new Enemy(i * 115 + 60, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < enemies.length; i++){
    enemies[i].show();
    }
  }

function keyPressed() {
    if (keyCode === RIGHT_ARROW){
      ship.move(10);
    } else if (keyCode === LEFT_ARROW)
      ship.move(-10);
}
