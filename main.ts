basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    // 控制小车前方左右两侧探照灯的
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Red)
    basic.pause(500)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.OFF)
    basic.pause(500)
})
