/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function carousel(sliderSelector, slideSelector, currentIndex = 1) {
  const slider = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slideSelector);
  let leftArrow, rightArrow;
  let pos = [currentIndex - 1, currentIndex, currentIndex + 1];

  function update(method) {
    slides[pos[0]].classList.remove('prev');
    slides[pos[1]].classList.remove('current');
    slides[pos[2]].classList.remove('next');

    switch (method) {
      case 'prev':
        pos.forEach((item, i) => {
          item == 0 ? pos[i] = slides.length - 1 : pos[i]--;
        });
        break;
      case 'next':
        pos.forEach((item, i) => {
          item == slides.length - 1 ? pos[i] = 0 : pos[i]++;
        });
        break;
    }

    slides[pos[0]].classList.add('prev');
    slides[pos[1]].classList.add('current');
    slides[pos[2]].classList.add('next');
  }

  function createArrows() {
    leftArrow = document.createElement('button');
    rightArrow = document.createElement('button');
    leftArrow.classList.add('arrow', 'left-arrow');
    rightArrow.classList.add('arrow', 'right-arrow');
    
    slider.prepend(leftArrow);
    slider.append(rightArrow);
  }

  createArrows();

  leftArrow.addEventListener('click', () => update('prev'));
  rightArrow.addEventListener('click', () => update('next'));

  slides[pos[0]].classList.add('prev');
  slides[pos[2]].classList.add('next');

  slides.forEach(item => {

    item.addEventListener('click', e => {
      const target = e.currentTarget;

      if (target && target.classList.contains('prev')) {
        update('prev');
      }

      if (target && target.classList.contains('next')) {
        update('next');
      }
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.default)('.slider', '.slide');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map