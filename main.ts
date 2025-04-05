input.onButtonPressed(Button.A, function () {
    basic.showString("Zeno")
})
input.onButtonPressed(Button.AB, function () {
    basic.forever(function () {

       basic.showString("youre sus")
        basic.pause(1900)
        
        basic.showLeds(`
    . . # # #
    # # . . .
    # # . . .
    . # # # #
    . # . . #
    `)
        basic.pause(10000)

        basic.clearScreen()
    })
})
input.onButtonPressed(Button.B, function () {
    basic.showString("De Wit")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(11)
    basic.pause(1000)
    basic.showNumber(12)
    basic.pause(1000)
    basic.showNumber(13)
    basic.pause(1000)
    basic.showNumber(14)
    basic.pause(1000)
    basic.showNumber(15)
    basic.pause(1000)
    basic.showNumber(16)
    basic.pause(1000)
    basic.showNumber(17)
    basic.pause(1000)
    basic.showNumber(18)
    basic.pause(1000)
    basic.showNumber(19)
    basic.pause(1000)
    basic.showNumber(20)
})
    
    basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
   
    
    basic.showLeds(`
    # # . # #
    . # . # .
    . # # # .
    . # . # .
    # # . # #
    `)


    basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)