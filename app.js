const progress = document.getElementById('progress')
const song = document.getElementById('song')
const ctrlIcon = document.getElementById('ctrlIcon')
const btnPlayPause = document.getElementById('btnPlayPause')

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

btnPlayPause.onclick = function () {
    if (ctrlIcon.classList.contains('fa-play')) {
        song.play().then(() => {
            ctrlIcon.classList.add('fa-pause');
            ctrlIcon.classList.remove('fa-play');
            setInterval(() => {
                progress.value = song.currentTime;
            }, 500);
        }).catch(error => {
            console.error('Playback failed:', error);
        });
    } else {
        song.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');
    }
}

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}
