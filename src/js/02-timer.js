import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// double zero
function addZero(value) {
  return value.toString().padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

// downcounter function
startButton.addEventListener('click', handlerStartTimer);
function handlerStartTimer() {
  const targetDate = new Date(datetimePicker.value).getTime();
  startButton.disabled = true;
  datetimePicker.disabled = true;

  // refreshing timer by seconds
  const timerInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      iziToast.success({
        title: 'Counter',
        message: 'Time is up!',
      });
      startButton.disabled = false;
      datetimePicker.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      daysElement.textContent = addZero(days);
      hoursElement.textContent = addZero(hours);
      minutesElement.textContent = addZero(minutes);
      secondsElement.textContent = addZero(seconds);
    }
  }, 1000);
}
