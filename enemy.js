function Enemy(x, y){
  var color = ["red", "blue", "yellow", "green", "purple"];
  var rand = Math.floor(Math.random()*color.length);
  this.x = x; //Starts enemy in the center of the canvas
  this.y = y;
  this.r = 20;
  this.toDelete = false;

    this.show = function(){
      fill(color[rand]);
      rect(this.x, this.y, this.r*2, this.r*2);
    }

    function PowerUpColour() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    this.destroy = function(){
      this.toDelete = true;
    }

}
