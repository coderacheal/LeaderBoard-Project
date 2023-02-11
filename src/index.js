import './style.css';
import { submitScoreToAPI, retrieveScoreFromAPI } from './modules/apiCalls.js';
import displayToScreen from './modules/displayScore.js';

const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const form = document.querySelector('form');
const allPlayers = document.querySelector('.all-score');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScoreToAPI(playerName.value, playerScore.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  allPlayers.innerHTML = '';
  retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));
});

window.addEventListener('load', () => {
  retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));
});
