const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;
btnStop.disabled = true;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart(evt) {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onClickStop(evt) {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}