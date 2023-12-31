import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const promiseBtn = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
}, delay);
   });
}

promiseBtn.addEventListener('click', onClickPromase)

function onClickPromase(e) {
e.preventDefault();
let firstDelay = Number(delay.value);
let delayStep = Number(step.value);
for (let i = 0; i < amount.value; i++) {
  createPromise(1 + i, firstDelay + i * delayStep)
  .then(
    ({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
  .catch(({position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}