"use strict";
(self["webpackChunkiron_shake"] = self["webpackChunkiron_shake"] || []).push([["home"],{

/***/ "./src/components/elements/home.js":
/*!*****************************************!*\
  !*** ./src/components/elements/home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _images_iron_shake_hero_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/iron-shake-hero-img.png */ "./src/images/iron-shake-hero-img.png");

// import menu from '../elements/menu.js';
// import navBar from '../elements/navbar.js';

function home() {
    const homePageDiv = document.createElement('div'),
          contentContainer = document.createElement('div'),
          textContainer = document.createElement('div'),
          heading = document.createElement('h1'),
          missionStatement = document.createElement('p'),
          orderNowButton = document.createElement('button'),
          imageDiv = document.createElement('div');

    heading.textContent = "Have one's Shake and eat it too!";
    missionStatement.textContent = 'To inspire and nurture the human spirit - one person, one cup and one neighborhood at a time.'
    orderNowButton.textContent = 'Order Now';
    heading.classList.add('slide-in-bottom');
    missionStatement.classList.add('slide-in-bottom-1sd');
    orderNowButton.classList.add('slide-in-bottom-2sd');

    const milkShake = new Image();
    milkShake.src = _images_iron_shake_hero_img_png__WEBPACK_IMPORTED_MODULE_0__;
    imageDiv.append(milkShake);
    milkShake.classList.add('slide-in-right');
    textContainer.append(heading, missionStatement, orderNowButton);
    contentContainer.append(textContainer, imageDiv);
    contentContainer.classList.add('home--content-container');
    homePageDiv.classList.add('home-page-container');
    homePageDiv.append(contentContainer);

    heading.classList.add('home-page--heading');
    missionStatement.classList.add('home-page--mission-statement');
    orderNowButton.classList.add('home-page--order-btn');
    orderNowButton.addEventListener('click', e => alert('Order over at the menu tab!'));


    heading.style.fontFamily = 'uniqueFont';
    missionStatement.style.fontFamily = 'mainFont--bold';
    homePageDiv.style.backgroundColor = '#E5E5E5';
    return homePageDiv;
};

/***/ }),

/***/ "./src/images/iron-shake-hero-img.png":
/*!********************************************!*\
  !*** ./src/images/iron-shake-hero-img.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f14190f3fffc4b1db386.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/elements/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQzdEO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNERBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcm9uLXNoYWtlLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXNIZXJvSW1nIGZyb20gJy4uLy4uL2ltYWdlcy9pcm9uLXNoYWtlLWhlcm8taW1nLnBuZyc7XG4vLyBpbXBvcnQgbWVudSBmcm9tICcuLi9lbGVtZW50cy9tZW51LmpzJztcbi8vIGltcG9ydCBuYXZCYXIgZnJvbSAnLi4vZWxlbWVudHMvbmF2YmFyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgICAgICAgbWlzc2lvblN0YXRlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgICBvcmRlck5vd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgICAgICAgIGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIYXZlIG9uZSdzIFNoYWtlIGFuZCBlYXQgaXQgdG9vIVwiO1xuICAgIG1pc3Npb25TdGF0ZW1lbnQudGV4dENvbnRlbnQgPSAnVG8gaW5zcGlyZSBhbmQgbnVydHVyZSB0aGUgaHVtYW4gc3Bpcml0IC0gb25lIHBlcnNvbiwgb25lIGN1cCBhbmQgb25lIG5laWdoYm9yaG9vZCBhdCBhIHRpbWUuJ1xuICAgIG9yZGVyTm93QnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbi1ib3R0b20nKTtcbiAgICBtaXNzaW9uU3RhdGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluLWJvdHRvbS0xc2QnKTtcbiAgICBvcmRlck5vd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbi1ib3R0b20tMnNkJyk7XG5cbiAgICBjb25zdCBtaWxrU2hha2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtaWxrU2hha2Uuc3JjID0gbXNIZXJvSW1nO1xuICAgIGltYWdlRGl2LmFwcGVuZChtaWxrU2hha2UpO1xuICAgIG1pbGtTaGFrZS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbi1yaWdodCcpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIG1pc3Npb25TdGF0ZW1lbnQsIG9yZGVyTm93QnV0dG9uKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0ZXh0Q29udGFpbmVyLCBpbWFnZURpdik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGhvbWVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZS1jb250YWluZXInKTtcbiAgICBob21lUGFnZURpdi5hcHBlbmQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZS0taGVhZGluZycpO1xuICAgIG1pc3Npb25TdGF0ZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLS1taXNzaW9uLXN0YXRlbWVudCcpO1xuICAgIG9yZGVyTm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZS0tb3JkZXItYnRuJyk7XG4gICAgb3JkZXJOb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGFsZXJ0KCdPcmRlciBvdmVyIGF0IHRoZSBtZW51IHRhYiEnKSk7XG5cblxuICAgIGhlYWRpbmcuc3R5bGUuZm9udEZhbWlseSA9ICd1bmlxdWVGb250JztcbiAgICBtaXNzaW9uU3RhdGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnbWFpbkZvbnQtLWJvbGQnO1xuICAgIGhvbWVQYWdlRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRTVFNUU1JztcbiAgICByZXR1cm4gaG9tZVBhZ2VEaXY7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==