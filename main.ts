music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.LoopingInBackground)
basic.showLeds(`
    . . . # .
    . # . # .
    # # # # #
    . # . # .
    . . . # .
    `)
basic.forever(function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    basic.pause(2000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 206)
    basic.pause(2000)
})
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(1000)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(1000)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(500)
})
