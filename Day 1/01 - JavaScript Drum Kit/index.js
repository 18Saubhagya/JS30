window.addEventListener("keydown", function(e) {
    console.log(e);
    const audioClicked = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const keyClicked = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (audioClicked == null)
        return
    keyClicked.classList.add("playing");
    audioClicked.currentTime = 0;
    audioClicked.play();

})

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", function(e) {
    if (e.propertyName !== "transform")
        return;
    this.classList.remove("playing");
}))