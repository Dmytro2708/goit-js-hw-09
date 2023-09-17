import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
          Notiflix.Notify.failure('Please choose a date in the future');
          startBtn.disabled = true;
        } else {
          startBtn.disabled = false;
        }
      },
    };

    flatpickr(input, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  function onClickBtn(e) {
    let timer = setInterval(() => {
      let count = new Date(input.value) - Date.now();
      startBtn.disabled = true;
      if (count >= 0) {
        let timerValue = convertMs(count);
        days.textContent = addLeadingZero(timerValue.days);
        hours.textContent = addLeadingZero(timerValue.hours);
        minutes.textContent = addLeadingZero(timerValue.minutes);
        seconds.textContent = addLeadingZero(timerValue.seconds);
      } else {
        Notiflix.Notify.success('Countdown finished');
        clearInterval(timer);
      }}, 1000);
  }

  startBtn.addEventListener('click', onClickBtn)
    
    





