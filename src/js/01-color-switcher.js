const refs = {
  bodyRef: document.body,
  startBtnRef: document.querySelector('[data-start]'),
  stopBtnRef: document.querySelector('[data-stop]'),
};

// let isActive = false;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgcolor() {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStartBtnClick() {
  //   if (isActive) {
  //     return;
  //   }
  //   isActive = true;
  refs.startBtnRef.setAttribute('disabled', 'true');
  changeBodyBgcolor();

  intervalId = setInterval(changeBodyBgcolor, 1000);
}

function onStopBtnClick() {
  //   isActive = false;
  clearInterval(intervalId);
  refs.startBtnRef.removeAttribute('disabled');
}

refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);
