const allEnemies = []
let pointsCounter = 0;

let pointsSpan = document.querySelector(".scorePoints")

class Element {
    constructor(x,y,sprite) {
        this.x = x
        this.y = y
        this.sprite = sprite
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


class Enemy extends Element {
    constructor(x,y,sprite) {
        super (x,y,sprite)
    }

    update(dt) {
 
        if (this.x < 500) {
            (this.x += randomSpeed())*dt
        } else {
            this.x = random_x()
            this.y = random_y()
        }
    };
}

(function instantiateEnemies() {
    for (let i = 0; i < 4; i++) {
        var bug = new Enemy(random_x(),random_y(),'images/enemy-bug.png')
        allEnemies.push(bug)
    }
})();

// Make bugs appear on random stone row
function random_y(){
    let possibleRow = [219, 136, 53]
    let randRow = Math.floor(Math.random() * possibleRow.length)
    return possibleRow[randRow]
}

//Make bugs appear at random distance left from canvas
function random_x(){
    let random_xPosition = Math.floor(Math.random() * ((-50)+200)-200)
    return random_xPosition
}

//Give bugs a random speed
function randomSpeed(){
    let randomSpeedVar = Math.floor(Math.random() * (4-2)+2)
    return randomSpeedVar
}


// Check Collision
function checkCollision(ent1,ent2) {
    var vx = ent1.x - ent2.x
    var vy = ent1.y - ent2.y
    var distance = Math.sqrt(vx*vx+vy*vy)
    
    return distance < 50
}

class Player extends Element {
    constructor(x,y,sprite) {
        super (x,y,sprite)
        this.lifes = 3
        this.points = 0
    }

    reset_y() {
        this.y = 405
    }

    addPoints() {
        this.points += 8
    }
}

var player = new Player(202,405,'images/char-cat-girl.png'); //202,405


Player.prototype.update = function() {

    // for (let i = 0; i < allEnemies.length; i++) {
    //     var vx = ent1.x - ent2.x
    //     var vy = ent1.y - ent2.y
    //     var distance = Math.sqrt(vx*vx+vy*vy)
            
    //     return distance < 50
    // }

    
}

Player.prototype.handleInput = function(key){

    switch(key) {
        case ('up'):
            if (this.y === 73) {    // player --> Water
                this.reset_y()     // Reset player to grass 
                this.addPoints()
            } else {this.y -= 83}
            break;

        case ('left'):
            if (this.x < 25) {
                return
            } else this.x -= 100
            break;

        case ('down'):
            if (this.y > 404) {
                return
            } else this.y += 83
            break;

        case ('right'): 
            if (this.x > 400) {
                return
            } else this.x += 100
            break;
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

