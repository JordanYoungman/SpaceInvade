function Bullet(x, y){
  this.x = x; //Starts enemy in the center of the canvas
  this.y = y;
  this.r = 6;
  this.toDelete = false;

    this.show = function(){
      fill(50,0,200);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.move = function(){
      this.y = this.y - 5;
    }

    this.hits = function(enemy){
      var d = dist(this.x, this.y, enemy.x, enemy.y);
      if (d < this.r + enemy.r){
          return true;
      } else {
          return false;
      }
    }

    this.destroy = function(){
      this.toDelete = true;
    }

}
