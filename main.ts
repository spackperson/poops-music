radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        poopsacoming()
    }
})
input.onButtonPressed(Button.A, function () {
    poopsacoming()
})
function poopsacoming () {
    music.playTone(175, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(175, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Breve))
}
radio.setGroup(2)
music.setTempo(60)
