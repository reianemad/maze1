namespace SpriteKind {
    export const bully = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.sayText("ew ramona your outfit is so ugly", 5000, false)
    sdaknasd = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111f11111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111b111f1111b11fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111f1111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111f1111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111f1111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f11111ffff11f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111b1111111b111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111f11111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111111111111111111111111111111111111111111111111111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111111111111181111111111111111111111171111111111111111111111111171111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111114111111a1111111111117111111411111111111111111ffff1111111111111111111117ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111118111111111111111171111111411111111111111111111117111ff11f1117114111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111a111111111111111111111111181111111ff11111ff1111ff11ff11111111118111a7111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111171811114111111111171111111111f1f111fff1f111f111f1f111111111117111118111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1171111111111111111111111811111111ffffff11111fff1111ff11f111f1f111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111111111111111111111111111111f111ff11111ff111111ff1ff11f11f11111711111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111141114111111111111171111f11111f1111f11111ff1111111f11ffff11111111111111111411111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111a1111a4111111111fff1111f1111f111111f1111111f11111111114111a11141111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111111111111111ff11f11f111f111ff111111111111111111111111111111111111111a1111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111118111111111111ff1ff111ff11ffff111111111111111111111111181111111111111111711aebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe18111a1111111111111111f111f1111f1111111111111111111111111141111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111111ffff11f1f1111111111111111114111111111111111111111111111181111114111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111fff11ff111f111ff11111111111111111111111111111111111111111111111111a1111a11111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111181f11ff1f1111ff111f111111111111171111111111fffff11111111141111411111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111f1f11111f111ffff11f11111111111111111111111ff111111111141111111111111111171117111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111ff111111f11f11ff1111a1111111a11111f111111f11111111111111111a1111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111ff111111fff111111111111111111111111f11ff1ff111111111111111181111ffff11111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111f111111111111111111114111111111111f11f1111fffff111111111111111f1111f1111181111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111f1111111111111111117111111ffff11111fff1111111ff111111111111111f1111f1111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1118111111111111111111111111111f111111111fff111111f11111111111111111ff111f1111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111114111111111111ff111111111f1fffff1111111111ffff1f11111fffff1111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111111111111111f111111f1111111111f1111111111111811f1111fff11111ff11111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111a111111111111111ff11111f1111111111f1111111111111111f1111f11f11111111111117111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111111111ff111ff111fff1111f11fff11111111111111111111a1f1111f11f11111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111711111111ffff11f11111f1f111ffff111111111111111111111111f111f111f11111111111714111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111f11111f1111ff11ff11111111111111111111111111111f111f111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111114111111f11111f1111f1111111111111111111111111ffffff1111fff1111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111f11111fffff1111111111111111a117111111f1111ff111111111111111111ff11111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111111111fffff111111111111111111111111111111f111111f1111111111111111fff111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111111111f111111111111111411111811111111f1111111111111111111ffff111111111711ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111711111111f1ff11111111111111111111111111111f11111111111111111ff11111a1111711111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111441111ff1f11171111111111a111111111ffffff111111111111111ff111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1114111111111111fff111111111111111111111111f111ff111111111111fff11111111111111118111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111111111111111111111111111f11111ff111f1111f1111111111ff11111111111111118111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111111111111411111111f11111ff11f1111111111111ff1111111111111411111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111181111171111111111111111111111f111111fff111111111111f111111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111111a11111111111811111111111111f111111ff111111111111f1111111111811111111a1114111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111411111111117111111111f111111ff1111111111f1111111111111117111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111141111111111111141111111811111f1111111111111111f11111111411111417111181111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11111a111111111111111111111111a1111111f11111111111111f111111111111111111111111117111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111111111171111111111111111111111111111111111111f1111118111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe1111111111111111111111111111111111111111111111111111f111111111111a111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111fffff181111fffff14111111111111111fffff1211111fffff1311111111fffff17111fffff1f1111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe111111111111111111111111111111111111111111111111111111111111111111111111111111111111ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        dddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeee
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        eeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeedddddeeeeeddddd
        `)
    tiles.setTilemap(tilemap`level7`)
    scene.centerCameraAt(x, y)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f c c c c c c f . . . . 
        . . . f c c c c c c c c f . . . 
        . . . f c c f f f f c c f . . . 
        . . . f c f f d d f f c f . . . 
        . . f c f d f d d f d f c f . . 
        . . f c f d c d d c d f c f . . 
        . . f c c f d d d d f c c f . . 
        . f c c f 6 f f f f 6 f c c f . 
        . . f f d 6 5 6 6 5 6 d f f . . 
        . . f d d f 6 5 5 6 f d d f . . 
        . . . f f 6 6 6 6 6 6 f f . . . 
        . . . f 6 6 5 6 6 5 6 6 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(80, 229)
    mySprite2.setStayInScreen(true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    pause(1000)
    mySprite2.sayText("smile!", 5000, false)
    pause(5000)
})
let y = 0
let x = 0
let sdaknasd = false
let mySprite2: Sprite = null
music.smallCrash.play()
game.showLongText("HEYYYYY so today we're gonna follow the story of alice, a reformed cyberbully.", DialogLayout.Full)
game.showLongText("press the \"b\" button to talk to the people you see!", DialogLayout.Full)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e f f f f f f f f e f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e f 1 8 d d 8 1 f e e f . 
    . f f e f d d d d d d f e f f . 
    . . f f f f 4 4 4 4 f f f f . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 200)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
forever(function () {
    y = mySprite.y
    x = mySprite.x
})
