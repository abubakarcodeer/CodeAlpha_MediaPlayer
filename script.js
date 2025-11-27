let progress = document.getElementById("progress");
let song = document.getElementById("song");
let time = document.getElementById("duration");
let ctrlIcon = document.getElementById("ctrl_icon");
const volumeSlider = document.getElementById('volumeSlider');


song.onloadedmetadata = () => {
    let minutes = Math.floor(song.duration / 60);
    let seconds = Math.floor(song.duration % 60);
    song.volume = 0.5; // 50%

    if (seconds < 10) seconds = '0' + seconds;
    time.innerHTML = `${minutes}:${seconds}`;
    progress.max = song.duration;
};

volumeSlider.onchange=()=>{
    song.volume = volumeSlider.value;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
    let minutes = Math.floor(song.currentTime / 60);
    let seconds = Math.floor(song.currentTime % 60);

    if (seconds < 10) seconds = '0' + seconds;
    time.innerHTML = `${minutes}:${seconds}`;
});

progress.onchange = () => {
    song.currentTime = progress.value;
    let minutes = Math.floor(song.currentTime / 60);
    let seconds = Math.floor(song.currentTime % 60);

    if (seconds < 10) seconds = '0' + seconds;
    time.innerHTML = `${minutes}:${seconds}`;
};
