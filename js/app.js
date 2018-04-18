const allEnemies = []
// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    dt*this.x ++
};

// Make bugs appear on random stone row
function randomRow(){
    let possibleRow = [219, 136, 53]
    let randRow = Math.floor(Math.random() * possibleRow.length)
    return possibleRow[randRow]
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const enemy1 = new Enemy(101,randomRow())
allEnemies.push(enemy1)


const Player = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/char-cat-girl.png'
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.update = function(){}

Player.prototype.handleInput = function(key){

    if (key == 'up') {
        console.log(this.y)
        if (this.y === 73) {    // player --> Water
            this.y = 405        // Reset player to grass
        } else {this.y -= 83}
    } else if (key == 'left') {
        if (this.x < 25) {
            return
        } else this.x -= 100
    } else if (key == 'down') {
        if (this.y > 404) {
            return
        } else this.y += 83
    } else if (key == 'right') {
        if (this.x > 400) {
            return
        } else this.x += 100
    }
}

const player = new Player(202,405); //202,405

// This listens for key presses and sends the keys to
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

