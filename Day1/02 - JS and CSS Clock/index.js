const secondsHand = document.querySelector(".second-hand")
const minsHand = document.querySelector(".min-hand")
const hoursHand = document.querySelector(".hour-hand")

function setTime() {
    const time = new Date();

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const clockSeconds = (seconds / 60) * 360 + 90;
    const clockMinutes = (minutes / 60) * 360 + 90;
    const clockHours = (hours / 12) * 360 + 90;

    secondsHand.style.transform = `rotate(${clockSeconds}deg)`;
    minsHand.style.transform = `rotate(${clockMinutes}deg)`;
    hoursHand.style.transform = `rotate(${clockHours}deg)`;
}

setInterval(setTime, 1000);

setTime()