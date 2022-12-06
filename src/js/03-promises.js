const refs = {
  form: document.querySelector('.form'),
  firstDelayDataInput: document.querySelector('[name="delay"]'),
  stepDelayDataInput: document.querySelector('[name="step"]'),
  amountDataInput: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', onSubmitBtnClick);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function onSubmitBtnClick(evt) {
  evt.preventDefault();

  let delay = null;

  for (let i = 1; i <= Number(refs.amountDataInput.value); i += 1) {
    i === 1
      ? (delay = Number(refs.firstDelayDataInput.value))
      : (delay += Number(refs.stepDelayDataInput.value));

    let position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
