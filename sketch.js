var ship;
var enemies = [];
var bullets = [];

function setup() {
  createCanvas(600,400);
  ship = new Ship();
  // bullet = new Bullet(width/2,width/2);
  for (var i = 0; i < 5; i ++){
  enemies[i] = new Enemy(i * 115 + 60, 60);
  console.log(enemies);
  }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < bullets.length; i++){
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < enemies.length; j++){
      if (bullets[i].hits(enemies[j])){
          enemies[j].destroy();
          bullets[i].destroy();
        }
      }
    }

  for (var i = 0; i < bullets.length; i++){
  if (bullets[i].toDelete){
      bullets.splice(i, 1);
    }
  }

  for (var i = 0; i < enemies.length; i++){
  if (enemies[i].toDelete){
      enemies.splice(i, 1);
    }
  }

  for (var i = 0; i < enemies.length; i++){
    enemies[i].show();
    }
  }

function keyPressed() {
    if (key === ' '){
    var bullet = new Bullet(ship.x + 10,350);
    bullets.push(bullet)
    }
    if (keyCode === RIGHT_ARROW){
      ship.move(10);
    } else if (keyCode === LEFT_ARROW)
      ship.move(-10);
  }
