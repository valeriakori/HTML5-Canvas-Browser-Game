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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const enemy1 = new Enemy(101,202)
//allEnemies.push(enemy1)


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
        if (this.y < 20) {
            return
        } else this.y -= 85
    } else if (key == 'left') {
        if (this.x < 25) {
            return
        } else this.x -= 100
    } else if (key == 'down') {
        if (this.y > 404) {
            return
        } else this.y += 85
    } else if (key == 'right') {
        if (this.x > 400) {
            return
        } else this.x += 100
    }
}

const player = new Player(202,405); //202,405

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//comment
