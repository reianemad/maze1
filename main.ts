namespace SpriteKind {
    export const bully = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, null, function (sprite, undefined) {
	
})
game.showLongText("HEYYYYY so today we're gonna follow the story of alice, a reformed cyberbully.", DialogLayout.Full)
game.showLongText("follow the orbs to learn more about cyberbullying and how it sucks ", DialogLayout.Full)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 200)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
