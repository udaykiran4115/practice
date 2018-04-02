function user(){
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetUser){
    targetUser.life += 1;
    this.life -= 1;
    console.log(this.name + " gave 1 life to " + targetUser.name)
  }
}

uday = new user()
ramani = new user()


uday.name = "Uday"
ramani.name = "Ramani"

uday.giveLife(ramani)
console.log("Uday " +uday.life )
console.log("Ramani "+ramani.life) 
