input.onPinPressed(TouchPin.P1, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    basic.showIcon(IconNames.Happy)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
