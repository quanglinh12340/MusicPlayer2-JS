const progress = document.getElementById('progress')
console.log("🚀 ~ progress:", progress)
const song = document.getElementById('song')
console.log("🚀 ~ song:", song)
const ctrlIcon = document.getElementById('ctrlIcon')
const btnPlayPause = document.getElementById('btnPlayPause')

song.onloadeddata = function () {
    progress.max = song.duration
    progress.value = song.currentTime
}

btnPlayPause.onclick = function () {
    if (ctrlIcon.classList.contains('fa-play')) {
        song.play()
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    } else {
        song.pause()
        ctrlIcon.classList.add('fa-play')
        ctrlIcon.classList.remove('fa-pause')
    }
}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}
progress.onchange = function () {
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.add('fa-pause')
    ctrlIcon.classList.remove('fa-play')
}