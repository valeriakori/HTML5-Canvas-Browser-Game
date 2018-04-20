const allEnemies = []

var Enemy = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    (this.x += randomSpeed())*dt
};

// Make bugs appear on random stone row
function randomRow(){
    let possibleRow = [219, 136, 53]
    let randRow = Math.floor(Math.random() * possibleRow.length)
    return possibleRow[randRow]
}

function randomSpeed(){
    let randomSpeedVar = Math.floor(Math.random() * (8-1)+1)
    return randomSpeedVar
}

function randomInterval() {
    return Math.floor(Math.random() * (5-2)+2)
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

setInterval(function() {}, randomInterval()*1000)

const enemy1 = new Enemy(-101,randomRow())
const enemy3 = new Enemy(-202,randomRow())
const enemy4 = new Enemy(-350,randomRow())
allEnemies.push(enemy1)
allEnemies.push(enemy3)
allEnemies.push(enemy4)


// Check Collision
function checkCollision(ent1,ent2) {
    var vx = ent1.x - ent2.x
    var vy = ent1.y - ent2.y
    var distance = Math.sqrt(vx*vx+vy*vy)
    
    return distance < 50
}

const Player = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/char-cat-girl.png'
}

var player = new Player(202,405); //202,405

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.update = function(){}

Player.prototype.handleInput = function(key){

    if (key == 'up') {
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

// Write function to reset player.y
