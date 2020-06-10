/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var maindiv = document.getElementById('container');
var addBtn = document.createElement('button');
var input1 = document.createElement('input');
var memory = [];
var nomerID = 0;
var localStorageKey = 2;
addBtn.innerHTML = 'Добавить';
maindiv.appendChild(addBtn);
maindiv.appendChild(input1);
var mainSpisok = document.createElement('ul');
maindiv.appendChild(mainSpisok);

if (localStorage.getItem(localStorageKey) != null) {
  memory = localStorage.getItem(localStorageKey).split(',');
} // console.log(memory);


function OnStart() {
  for (var a = 0; a < memory.length; a += 1) {
    var element = document.createElement('li');
    element.id = "stroka_nomer_".concat(nomerID);
    nomerID += 1;
    mainSpisok.appendChild(element);
    input1.value = null;
    var elementToAdd = document.getElementById("stroka_nomer_".concat(a));
    elementToAdd.innerHTML = memory[a];
  }
}

OnStart();

function Adder() {
  if (input1.value !== '') {
    memory.push(input1.value);
    memory.sort();
    var element = document.createElement('li');
    element.id = "stroka_nomer_".concat(nomerID);
    nomerID += 1;
    mainSpisok.appendChild(element);
    input1.value = null;

    for (var a = 0; a < memory.length; a += 1) {
      var elementToAdd = document.getElementById("stroka_nomer_".concat(a));
      elementToAdd.innerHTML = memory[a];
    }

    localStorage.setItem(localStorageKey, memory);
  }
}

addBtn.addEventListener('click', Adder);
document.addEventListener('keydown', function (event) {
  var keyName = event.key;

  if (keyName === 'Enter') {
    Adder();
  }
}, false);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1haW5kaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkQnRuIiwiY3JlYXRlRWxlbWVudCIsImlucHV0MSIsIm1lbW9yeSIsIm5vbWVySUQiLCJsb2NhbFN0b3JhZ2VLZXkiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm1haW5TcGlzb2siLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3BsaXQiLCJPblN0YXJ0IiwiYSIsImxlbmd0aCIsImVsZW1lbnQiLCJpZCIsInZhbHVlIiwiZWxlbWVudFRvQWRkIiwiQWRkZXIiLCJwdXNoIiwic29ydCIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlOYW1lIiwia2V5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNB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QWhCLEVBQXlCO0FBQ3ZCTixTQUFLO0FBQ047QUFDRixDQVBILEVBUUUsS0FSRixFIiwiZmlsZSI6Im1haW4uOWIwM2E4NzdiZTc0ZTg3OGNmNDMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBtYWluZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubGV0IG1lbW9yeSA9IFtdO1xubGV0IG5vbWVySUQgPSAwO1xuY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gMjtcbmFkZEJ0bi5pbm5lckhUTUwgPSAn0JTQvtCx0LDQstC40YLRjCc7XG5tYWluZGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5tYWluZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG5jb25zdCBtYWluU3Bpc29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm1haW5kaXYuYXBwZW5kQ2hpbGQobWFpblNwaXNvayk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpICE9IG51bGwpIHtcbiAgbWVtb3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KS5zcGxpdCgnLCcpO1xufVxuXG4vLyBjb25zb2xlLmxvZyhtZW1vcnkpO1xuXG5mdW5jdGlvbiBPblN0YXJ0KCkge1xuICBmb3IgKGxldCBhID0gMDsgYSA8IG1lbW9yeS5sZW5ndGg7IGEgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVsZW1lbnQuaWQgPSBgc3Ryb2thX25vbWVyXyR7bm9tZXJJRH1gO1xuICAgIG5vbWVySUQgKz0gMTtcbiAgICBtYWluU3Bpc29rLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGlucHV0MS52YWx1ZSA9IG51bGw7XG4gICAgY29uc3QgZWxlbWVudFRvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0cm9rYV9ub21lcl8ke2F9YCk7XG4gICAgZWxlbWVudFRvQWRkLmlubmVySFRNTCA9IG1lbW9yeVthXTtcbiAgfVxufVxuXG5PblN0YXJ0KCk7XG5cbmZ1bmN0aW9uIEFkZGVyKCkge1xuICBpZiAoaW5wdXQxLnZhbHVlICE9PSAnJykge1xuICAgIG1lbW9yeS5wdXNoKGlucHV0MS52YWx1ZSk7XG4gICAgbWVtb3J5LnNvcnQoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBlbGVtZW50LmlkID0gYHN0cm9rYV9ub21lcl8ke25vbWVySUR9YDtcbiAgICBub21lcklEICs9IDE7XG4gICAgbWFpblNwaXNvay5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBpbnB1dDEudmFsdWUgPSBudWxsO1xuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgbWVtb3J5Lmxlbmd0aDsgYSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50VG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3Ryb2thX25vbWVyXyR7YX1gKTtcbiAgICAgIGVsZW1lbnRUb0FkZC5pbm5lckhUTUwgPSBtZW1vcnlbYV07XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgbWVtb3J5KTtcbiAgfVxufVxuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRlcik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICdrZXlkb3duJyxcbiAgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGtleU5hbWUgPSBldmVudC5rZXk7XG4gICAgaWYgKGtleU5hbWUgPT09ICdFbnRlcicpIHtcbiAgICAgIEFkZGVyKCk7XG4gICAgfVxuICB9LFxuICBmYWxzZVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=