input.onButtonPressed(Button.A, function () {
    MotorEin = 1
})
input.onButtonPressed(Button.B, function () {
    MotorEin = 0
})
let ZaehlerLinks = 0
let MotorEin = 0
let TimeStamp = control.millis() + 10000
basic.forever(function () {
    ZaehlerLinks += 1
    if (control.millis() > TimeStamp) {
        TimeStamp = control.millis() + 10000
        serial.writeLine("" + (ZaehlerLinks))
        ZaehlerLinks = 0
    }
})
