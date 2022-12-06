import flatpickr from 'flatpickr';
// импортировали функцию flatpickr из библиотеки "flatpickr".
import 'flatpickr/dist/flatpickr.min.css';
// импортировали стили css из библиотеки "flatpickr".

const refs = {
  datetimePickerInputRef: document.querySelector('input'),
  daysRemainingSpanRef: document.querySelector('[data-days]'),
  hoursRemainingSpanRef: document.querySelector('[data-hours]'),
  minutesRemainingSpanRef: document.querySelector('[data-minutes]'),
  secondsRemainingSpanRef: document.querySelector('[data-seconds]'),
  startCountBtnRef: document.querySelector('[data-start]'),
};
// создали обьект с элементами DOMa, с которыми будем работать и присвоили ссылку на него переменной.

let selectedDateMs = null;
// задали глобальную переменную в которую будет записываться выбранная в инпуте дата, каждый раз, когда объект выбора даты будет закрываться.
let timeBeforeEventMs = null;
// задали переменнную, значение которой - это разница между выбранным временем и временем текущего момента.
let timeBeforeEventObj = {};
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    refs.startCountBtnRef.setAttribute('disabled', true);
  },
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      alert('Please choose a date in the future');
      return;
    }
    selectedDateMs = selectedDates[0].getTime();
    refs.startCountBtnRef.removeAttribute('disabled');
  },
};
// создали обьект с настройками для будущего объекта flatpickr.

refs.startCountBtnRef.setAttribute('disabled', true);
// добавили атрибут disabled, чтобы кнопка  start изначально была не активна до оперделенного события.

flatpickr(refs.datetimePickerInputRef, options);
// создали объект flatpickr на базе refs.datetimePickerInputRef (инпут с типом текст в разметке страницы) и настройками из объекта options.

refs.startCountBtnRef.addEventListener('click', onStartCountBtnClick);
// добавили прослушку на событие 'click' - вызывается функция onStartCountBtnClick

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

function onStartCountBtnClick() {
  refs.startCountBtnRef.setAttribute('disabled', true);
  intervalId = setInterval(createCountingTimer, 1000);
}

function createCountingTimer() {
  timeBeforeEventMs = selectedDateMs - new Date().getTime();
  if (timeBeforeEventMs < 0) {
    alert('Время вышло');
    clearInterval(intervalId);
    return;
  }
  timeBeforeEventObj = convertMs(timeBeforeEventMs);
  addTimeDataToElement(timeBeforeEventObj);
}

function addTimeDataToElement(timeData) {
  refs.daysRemainingSpanRef.textContent = addLeadingZero(timeData.days);
  refs.hoursRemainingSpanRef.textContent = addLeadingZero(timeData.hours);
  refs.minutesRemainingSpanRef.textContent = addLeadingZero(timeData.minutes);
  refs.secondsRemainingSpanRef.textContent = addLeadingZero(timeData.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
