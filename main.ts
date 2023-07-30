power.fullPowerEvery(15000, function () {
    led.setBrightness(10)
    if (input.lightLevel() > 100) {
        if (input.temperature() >= 20) {
            basic.showString("" + input.temperature() + "-" + input.lightLevel())
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(10000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    power.lowPowerPause(30000)
})
