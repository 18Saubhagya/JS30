const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
skipButtons.forEach(button => button.addEventListener('click', skip));

function handleRangeUpdate() {
    video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

function move(e) {
    const moveTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = moveTime;
}
let mousedown = false;
progress.addEventListener('click', move);
progress.addEventListener('mousemove', (e) => mousedown && move(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);