import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'selectedFilters';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

onPageLoad();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.dir(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {};
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onPageLoad() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      formEl[key].value = value;
      formData[key] = value;
    });
  }
}
