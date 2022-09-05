function collision(player, obj) {
    if (player.x < obj.x + obj.width &&
        player.x + player.width > obj.x &&
        player.y < obj.y + obj.height &&
        player.y + player.height > obj.y) {
        return true
    } else {
        return false
    }
}