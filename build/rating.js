/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"create-block/hero-image-rating","version":"0.1.0","title":"Hero Image Rating","category":"media","icon":"smiley","description":"Hero Image Block mit Bewertung","supports":{"html":false},"textdomain":"hero-image-rating","editorScript":"file:./build/index.js","viewScript":"file:./build/rating.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","attributes":{"title":{"type":"string","source":"html","selector":"h2"},"titleSize":{"type":"number","default":"3"},"titleColor":{"type":"string","default":"white"},"mediaUrl":{"type":"string"},"bgColor":{"type":"string","default":""},"bgOpacity":{"type":"number","default":10},"bgWidth":{"type":"number","default":100},"bgHeight":{"type":"number","default":80},"rating":{"type":"number","default":1},"ratingColor":{"type":"string","default":"#fcba03"},"ratingSize":{"type":"string","default":1},"ratingHover":{"type":"number","default":null}}}');

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/rating.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block.json */ "./block.json");
 // Kann nicht auf die Value ratingColor Attribute zugreifen die in block.json definiert ist

console.log(_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes.ratingColor);
const allStars = document.querySelectorAll(".star");
const ratingColor = allStars[0].style.color;
console.log(ratingColor);
allStars.forEach((star, clickedIndex) => {
  star.addEventListener("click", () => {
    allStars.forEach((otherStar, otherIndex) => {
      if (otherIndex <= clickedIndex) {
        otherStar.style.color = ratingColor;
      } else {
        otherStar.style.color = "white";
      }
    });
  });
});
}();
/******/ })()
;
//# sourceMappingURL=rating.js.map