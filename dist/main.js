/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './style.css';\n// import { submitScoreToAPI, retrieveScoreFromAPI } from './modules/apiCalls.js';\n// import displayToScreen from './modules/displayScore.js';\n\n// const playerName = document.getElementById('name');\n// const playerScore = document.getElementById('score');\n// const submitBtn = document.getElementById('submit');\n// const refreshBtn = document.getElementById('refresh');\n// const form = document.querySelector('form');\n// const allPlayers = document.querySelector('.all-score');\n// const blackboard = document.querySelector('.black-board');\n\n// submitBtn.addEventListener('click', (e) => {\n//   e.preventDefault();\n//   if (playerName.value === '' || playerScore.value === '') {\n//     return window;\n//   }\n//   { submitScoreToAPI(playerName.value, playerScore.value);\n//     blackboard.style.border = '2px solid red';\n//     form.reset();\n//     setTimeout(() => {\n//       blackboard.style.border = 'none';\n//     }, 2000);\n//   }\n// });\n\n// refreshBtn.addEventListener('click', () => {\n//   allPlayers.innerHTML = '';\n//   retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));\n// });\n\n// window.addEventListener('load', () => {\n//   retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));\n// });\n\nconst gameName = {\n  name: 'The Hunger Games',\n  id: 'nRSVEiwnNBe4rvQgyfEt',\n};\n\nconst apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\n\nconst createNewGame = async () => {\n  await fetch(apiURL, {\n    method: 'POST',\n    body: JSON.stringify(gameName[0]),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\ncreateNewGame();\n\n//# sourceURL=webpack://leaderboard-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;