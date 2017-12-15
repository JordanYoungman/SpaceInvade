function Ship(){
  this.x = width/2; //Starts ship in the center of the canvas

    this.show = function(){
      fill(255);
      rect(this.x, height-50, 20, 20);
    }

    this.move = function(dir){
      this.x += dir*2;
    }

}
