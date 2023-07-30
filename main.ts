let maxTemp = 0
power.fullPowerEvery(15000, function () {
    led.setBrightness(10)
    maxTemp = 25
    if (input.temperature() >= maxTemp) {
        basic.showString("" + (input.temperature()))
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    power.lowPowerRequest()
})
