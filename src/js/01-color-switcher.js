function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let colorSwitchInterval;

const buttons = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};
buttons.stopButton.disabled = true;
// start switching colors
buttons.startButton.addEventListener('click', handlerStartColorSwitch);
function handlerStartColorSwitch() {
  const [startButton, stopButton] = document.querySelectorAll(
    '[data-start], [data-stop]'
  );

  startButton.disabled = true;
  stopButton.disabled = false;

  colorSwitchInterval = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}
// stop switching colors
buttons.stopButton.addEventListener('click', handlerStopColorSwitch);
function handlerStopColorSwitch() {
  const [startButton, stopButton] = document.querySelectorAll(
    '[data-start], [data-stop]'
  );

  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(colorSwitchInterval);
}
