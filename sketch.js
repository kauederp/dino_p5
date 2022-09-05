function setup() {
    createCanvas(800, 600)
    player = createGraphics(200, 200)
    player.x = 80
    player.y = 600 / 2
    player.width = 60
    player.height = 60

    cactus = createGraphics(200, 200)
    cactus.x = 800
    cactus.y = 600 / 2
    cactus.width = 60
    cactus.height = 120
    score = 0
}

function draw() {
    background(220)

    fill(0, 30);
    rect(0, 330, 800, 270);
    fill(255);
    noStroke();
    rect(player.x, player.y, player.width, player.height);

    fill(5);
    noStroke();
    rect(cactus.x, cactus.y, cactus.width, cactus.height);

    // pulo e grávidade
    if (player.pulo) {
        player.y -= 10
        if (player.y <= (300 - 120))
            player.pulo = false
    } else {
        if (player.y != 300)
            player.y += 2
    }
    if (cactus.x < 0) {
        cactus.x = 800
    } else {
        cactus.x -= 5
    }
    console.log(player.y)
    if (collision(player, cactus))
        alert("faleceu! score: " + score)

    score += 1

}

function keyPressed() {
    if (key == 'w') {
        player.pulo = true
    }
}