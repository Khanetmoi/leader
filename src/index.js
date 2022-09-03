import './styles/index.css';

import { postData, getApiData } from './api.js';

const resetBtn = document.querySelector('#refresh');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
});

resetBtn.addEventListener('click', getApiData);
window.addEventListener('load', getApiData);
