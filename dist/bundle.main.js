/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allSongsArray.js":
/*!******************************!*\
  !*** ./src/allSongsArray.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 0,\n  title: \"Rain Outside Your Window\",\n  src: \"./musics/rain-outside-your-window.mp3\",\n  artist: \"OYStudio\",\n  style: \"classical\",\n  time: \"2:10\"\n}, {\n  id: 1,\n  title: \"Rising Sun\",\n  src: \"./musics/rising-sun.mp3\",\n  artist: \"OYStudio\",\n  style: \"classical\",\n  time: \"2:43\"\n}, {\n  id: 2,\n  title: \"Endless Snowfall\",\n  src: \"./musics/endless-snowfall.mp3\",\n  artist: \"Eugene Barduja\",\n  style: \"classical\",\n  time: \"2:08\"\n}, {\n  id: 3,\n  title: \"Beethoven Piano Sonata No 14\",\n  src: \"./musics/beethoven-piano-sonata-no-14.mp3\",\n  artist: \"OYStudio\",\n  style: \"classical\",\n  time: \"6:54\"\n}, {\n  id: 4,\n  title: \"Corporate Harmonics\",\n  src: \"./musics/corporate-harmonics.mp3\",\n  artist: \"Motion Array\",\n  style: \"rock\",\n  time: \"1:49\"\n}, {\n  id: 5,\n  title: \"Pop Rock Music Kit\",\n  src: \"./musics/demo-song.mp3\",\n  artist: \"Motion Array\",\n  style: \"rock\",\n  time: \"1:27\"\n}, {\n  id: 6,\n  title: \"In The Dark\",\n  src: \"./musics/in-the-dark.mp3\",\n  artist: \" LemonMusicStudio\",\n  style: \"rock\",\n  time: \"1:41\"\n}, {\n  id: 7,\n  title: \"Back In Time\",\n  src: \"./musics/back-in-time.mp3\",\n  artist: \"Eugene Barduja\",\n  style: \"eletronic\",\n  time: \"2:11\"\n}, {\n  id: 8,\n  title: \"Acid Network\",\n  src: \"./musics/acid-network.mp3\",\n  artist: \"Motion Array\",\n  style: \"eletronic\",\n  time: \"1:35\"\n}, {\n  id: 9,\n  title: \"Ready To Take Off\",\n  src: \"./musics/ready-to-take-off.mp3\",\n  artist: \"GvidonAudio\",\n  style: \"eletronic\",\n  time: \"2:13\"\n}]);\n\n//# sourceURL=webpack://mysic/./src/allSongsArray.js?");

/***/ }),

/***/ "./src/fillButtons.js":
/*!****************************!*\
  !*** ./src/fillButtons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  for (var _len = arguments.length, buttons = new Array(_len), _key = 0; _key < _len; _key++) {\n    buttons[_key] = arguments[_key];\n  }\n  buttons.forEach(function (btn) {\n    btn.onfocus = function () {\n      btn.classList.add(\"fill-button\");\n    };\n    btn.onblur = function () {\n      btn.classList.remove(\"fill-button\");\n    };\n  });\n});\n\n//# sourceURL=webpack://mysic/./src/fillButtons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allSongsArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allSongsArray.js */ \"./src/allSongsArray.js\");\n/* harmony import */ var _fillButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillButtons.js */ \"./src/fillButtons.js\");\n/* harmony import */ var _sortAlphabetcal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortAlphabetcal.js */ \"./src/sortAlphabetcal.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _toggleButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleButton.js */ \"./src/toggleButton.js\");\n\n\n\n\n\nvar playButton = document.querySelector(\"#play\");\nvar pauseButton = document.querySelector(\"#pause\");\nvar previousButton = document.querySelector(\"#previous\");\nvar nextButton = document.querySelector(\"#next\");\nvar shuffleButton = document.querySelector(\"#shuffle\");\nvar playerSongTitle = document.querySelector(\"#player-song-title\");\nvar playerSongArtist = document.querySelector(\"#player-song-artist\");\nvar playlistSongs = document.querySelector(\"#playlist-songs\");\nvar audio = new Audio();\nvar allSongs = _allSongsArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar userData = {\n  songs: (0,_sortAlphabetcal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allSongs),\n  currentSong: null,\n  songCurrentTime: 0\n};\n(0,_fillButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playButton, pauseButton, previousButton, nextButton, shuffleButton);\nvar playSong = function playSong(id) {\n  var _userData$currentSong;\n  var song = userData === null || userData === void 0 ? void 0 : userData.songs.find(function (song) {\n    return song.id === id;\n  });\n  audio.src = song.src;\n  audio.title = song.title;\n  if ((userData === null || userData === void 0 || (_userData$currentSong = userData.currentSong) === null || _userData$currentSong === void 0 ? void 0 : _userData$currentSong.id) === song.id) {\n    audio.currentTime = userData.songCurrentTime;\n  } else if ((userData === null || userData === void 0 ? void 0 : userData.currentSong) !== song) {\n    userData.currentSong = song;\n    userData.songCurrentTime = 0;\n    audio.currentTime = 0;\n  }\n  markCurrentSong(\"song-\".concat(id));\n  setPlayerDisplaySong();\n  (0,_toggleButton_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playButton, pauseButton);\n  audio.play();\n};\nvar pauseSong = function pauseSong() {\n  if (userData !== null && userData !== void 0 && userData.currentSong) {\n    userData.songCurrentTime = audio.currentTime;\n    (0,_toggleButton_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pauseButton, playButton);\n    audio.pause();\n  }\n};\nvar playNextSong = function playNextSong() {\n  var currentSongIndex = getCurrentSongIndex();\n  if ((userData === null || userData === void 0 ? void 0 : userData.currentSong) === null || currentSongIndex === (userData === null || userData === void 0 ? void 0 : userData.songs.length) - 1) {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.songs[0].id);\n  } else {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.songs[currentSongIndex + 1].id);\n  }\n  nextButton.focus();\n};\nvar playPreviousSong = function playPreviousSong() {\n  if ((userData === null || userData === void 0 ? void 0 : userData.currentSong) === null) {\n    return;\n  }\n  var currentSongIndex = getCurrentSongIndex();\n  if (currentSongIndex === 0) {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.songs[(userData === null || userData === void 0 ? void 0 : userData.songs.length) - 1].id);\n  } else {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.songs[currentSongIndex - 1].id);\n  }\n  previousButton.focus();\n};\nvar shuffle = function shuffle() {\n  userData === null || userData === void 0 || userData.songs.sort(function () {\n    return Math.random() - 0.5;\n  });\n  playSong(userData === null || userData === void 0 ? void 0 : userData.songs[0].id);\n};\nvar deleteSong = function deleteSong() {};\nvar renderSongs = function renderSongs(array) {\n  var songsHTML = array.map(function (song) {\n    return \"<li id=\\\"song-\".concat(song.id, \"\\\" class=\\\"playlist-song\\\">\\n            <button class=\\\"song-info\\\" data-songId=\\\"\").concat(song.id, \"\\\">\\n                <span class=\\\"playlist-song-title\\\">\").concat(song.title, \"</span>\\n                <span class=\\\"plalist-song-artist\\\">\").concat(song.artist, \"</span>\\n                <span class=\\\"playlist-song-time\\\">\").concat(song.time, \"</span>\\n            </button>\\n            <button class=\\\"delete\\\">\\n                <i class=\\\"bi bi-x-circle\\\"></i>\\n            </button>\\n        </li>\");\n  });\n  playlistSongs.innerHTML = songsHTML.join(\"\");\n};\nvar markCurrentSong = function markCurrentSong(id) {\n  document.querySelectorAll(\".playlist-song\").forEach(function (songElement) {\n    if (songElement.id === id) {\n      songElement.setAttribute(\"aria-current\", \"true\");\n    } else {\n      songElement.removeAttribute(\"aria-current\");\n    }\n  });\n};\nvar setPlayerDisplaySong = function setPlayerDisplaySong() {\n  playerSongTitle.textContent = userData !== null && userData !== void 0 && userData.currentSong ? userData.currentSong.title : \"\";\n  playerSongArtist.textContent = userData !== null && userData !== void 0 && userData.currentSong ? userData.currentSong.artist : \"\";\n};\nvar getCurrentSongIndex = function getCurrentSongIndex() {\n  return userData === null || userData === void 0 ? void 0 : userData.songs.indexOf(userData === null || userData === void 0 ? void 0 : userData.currentSong);\n};\nrenderSongs(userData === null || userData === void 0 ? void 0 : userData.songs);\nplayButton.addEventListener(\"click\", function () {\n  if ((userData === null || userData === void 0 ? void 0 : userData.currentSong) === null) {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.songs[0].id);\n  } else {\n    playSong(userData === null || userData === void 0 ? void 0 : userData.currentSong.id);\n  }\n});\ndocument.querySelectorAll(\".song-info\").forEach(function (btn) {\n  return btn.addEventListener(\"click\", function () {\n    return playSong(Number(btn.dataset.songid));\n  });\n});\npauseButton.addEventListener(\"click\", function () {\n  return pauseSong();\n});\nnextButton.addEventListener(\"click\", function () {\n  return playNextSong();\n});\npreviousButton.addEventListener(\"click\", function () {\n  return playPreviousSong();\n});\nshuffleButton.addEventListener(\"click\", function () {\n  return shuffle();\n});\naudio.addEventListener(\"ended\", function () {\n  return playNextSong();\n});\n\n//# sourceURL=webpack://mysic/./src/index.js?");

/***/ }),

/***/ "./src/sortAlphabetcal.js":
/*!********************************!*\
  !*** ./src/sortAlphabetcal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (array) {\n  var newArray = _toConsumableArray(array);\n  newArray.sort(function (a, b) {\n    if (a.title < b.title) {\n      return -1;\n    }\n    if (a.title > b.title) {\n      return 1;\n    }\n    return 0;\n  });\n  return newArray;\n});\n\n//# sourceURL=webpack://mysic/./src/sortAlphabetcal.js?");

/***/ }),

/***/ "./src/toggleButton.js":
/*!*****************************!*\
  !*** ./src/toggleButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (toHidden, toDisplay) {\n  toHidden.classList.add(\"hidden\");\n  toDisplay.classList.remove(\"hidden\");\n  toDisplay.focus();\n});\n\n//# sourceURL=webpack://mysic/./src/toggleButton.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mysic/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;