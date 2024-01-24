import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formSubmit = document.querySelector('.form');
formSubmit.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  formSubmit.disabled = true;
  const delayInput = document.querySelector(
    'input[name="delay"]'
  ).valueAsNumber;
  const stepInput = document.querySelector('input[name="step"]').valueAsNumber;
  const amountInput = document.querySelector(
    'input[name="amount"]'
  ).valueAsNumber;

  for (let i = 0; i < amountInput; i++) {
    const currentDelay = delayInput + i * stepInput;
    const currentPosition = i + 1;

    createPromise(currentPosition, currentDelay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: `✅ Fulfilled promise ${position} in ${delay} ms`,
        });
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: `❌ Rejected promise ${position} in ${delay} ms`,
        });
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
      });
  }

  formSubmit.reset();
}
