"use strict";
(self["webpackChunkiron_shake"] = self["webpackChunkiron_shake"] || []).push([["location"],{

/***/ "./src/components/elements/location.js":
/*!*********************************************!*\
  !*** ./src/components/elements/location.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ location)
/* harmony export */ });
/* harmony import */ var _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/restaurant-location.png */ "./src/images/restaurant-location.png");
/* harmony import */ var _images_location_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/location-icon.png */ "./src/images/location-icon.png");



function location(){

    const locationDiv = document.createElement('div'),
          textSection = document.createElement('section'),
          imageSection = document.createElement('section'),
          textHeaderContainer = document.createElement('div'),
          textParagraphContainer = document.createElement('div'),
          textLocationContainer = document.createElement('div'),
          textLocationLogo = document.createElement('div'),
          textLocationDescription= document.createElement('div'),
          restaurantImg = new Image(),
          locationLogoImg = new Image();

    //IMAGE SRC:
    restaurantImg.src = _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__;
    // restaurantMobileImg.src = restaurantImageMobileImport;
    locationLogoImg.src = _images_location_icon_png__WEBPACK_IMPORTED_MODULE_1__;

    //CLASS LIST ADDITION:
    locationDiv.classList.add('location--main-container');
    textSection.classList.add('text--container');
    imageSection.classList.add('image--container');
    textHeaderContainer.classList.add('text--header-container', 'ani-loc--slide-in-bottom-1s-nd');
    textParagraphContainer.classList.add('text--paragraph-container', 'ani-loc--slide-in-bottom-1s-wd-p5');
    textLocationContainer.classList.add('text--location-container', 'ani-loc--slide-in-bottom-1s-wd-1s');
    restaurantImg.classList.add('image--restaurant-img', 'ani-loc--slide-in-right');
    
    //ANIMATION CLASS ADDITION
    textHeaderContainer.classList.add('ani-loc--slide-in-bottom-1s-nd');
    textParagraphContainer.classList.add( 'ani-loc--slide-in-bottom-1s-wd-p5');
    textLocationContainer.classList.add( 'ani-loc--slide-in-bottom-1s-wd-1s');
    restaurantImg.classList.add('ani-loc--slide-in-right');


    //TEXT CONTENT:
    textHeaderContainer.textContent = 'OUR LOCATION';
    textParagraphContainer.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor magna at elit scelerisque, bibendum dignissim orci venenatis. Pellentesque habitant.'
    textLocationDescription.textContent = '282 Kevin Brook, Imogeneborough, CA 58517'


    //SECTION APPENDING:
    textLocationLogo.append(locationLogoImg);
    textLocationContainer.append(textLocationLogo, textLocationDescription);
    textSection.append(textHeaderContainer, textParagraphContainer, textLocationContainer);
    imageSection.append(restaurantImg);
    locationDiv.append(textSection, imageSection);

    return locationDiv;
};

/***/ }),

/***/ "./src/images/location-icon.png":
/*!**************************************!*\
  !*** ./src/images/location-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0b7902281c66bf913fe.png";

/***/ }),

/***/ "./src/images/restaurant-location.png":
/*!********************************************!*\
  !*** ./src/images/restaurant-location.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f7e0b562d935d17f310.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/elements/location.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24ubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDSjs7QUFFdEQ7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNERBQXFCO0FBQzdDO0FBQ0EsMEJBQTBCLHNEQUF1Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXJvbi1zaGFrZS8uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0YXVyYW50SW1hZ2VJbXBvcnQgZnJvbSAnLi4vLi4vaW1hZ2VzL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nJztcbmltcG9ydCBsb2NhdGlvbkxvZ29JbWFnZUltcG9ydCBmcm9tICcuLi8uLi9pbWFnZXMvbG9jYXRpb24taWNvbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhdGlvbigpe1xuXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICB0ZXh0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICAgICAgICBpbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgICAgdGV4dEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIHRleHRQYXJhZ3JhcGhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICB0ZXh0TG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICB0ZXh0TG9jYXRpb25Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgdGV4dExvY2F0aW9uRGVzY3JpcHRpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIHJlc3RhdXJhbnRJbWcgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBsb2NhdGlvbkxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8vSU1BR0UgU1JDOlxuICAgIHJlc3RhdXJhbnRJbWcuc3JjID0gcmVzdGF1cmFudEltYWdlSW1wb3J0O1xuICAgIC8vIHJlc3RhdXJhbnRNb2JpbGVJbWcuc3JjID0gcmVzdGF1cmFudEltYWdlTW9iaWxlSW1wb3J0O1xuICAgIGxvY2F0aW9uTG9nb0ltZy5zcmMgPSBsb2NhdGlvbkxvZ29JbWFnZUltcG9ydDtcblxuICAgIC8vQ0xBU1MgTElTVCBBRERJVElPTjpcbiAgICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi0tbWFpbi1jb250YWluZXInKTtcbiAgICB0ZXh0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LS1jb250YWluZXInKTtcbiAgICBpbWFnZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW1hZ2UtLWNvbnRhaW5lcicpO1xuICAgIHRleHRIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC0taGVhZGVyLWNvbnRhaW5lcicsICdhbmktbG9jLS1zbGlkZS1pbi1ib3R0b20tMXMtbmQnKTtcbiAgICB0ZXh0UGFyYWdyYXBoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtLXBhcmFncmFwaC1jb250YWluZXInLCAnYW5pLWxvYy0tc2xpZGUtaW4tYm90dG9tLTFzLXdkLXA1Jyk7XG4gICAgdGV4dExvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtLWxvY2F0aW9uLWNvbnRhaW5lcicsICdhbmktbG9jLS1zbGlkZS1pbi1ib3R0b20tMXMtd2QtMXMnKTtcbiAgICByZXN0YXVyYW50SW1nLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLS1yZXN0YXVyYW50LWltZycsICdhbmktbG9jLS1zbGlkZS1pbi1yaWdodCcpO1xuICAgIFxuICAgIC8vQU5JTUFUSU9OIENMQVNTIEFERElUSU9OXG4gICAgdGV4dEhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbmktbG9jLS1zbGlkZS1pbi1ib3R0b20tMXMtbmQnKTtcbiAgICB0ZXh0UGFyYWdyYXBoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoICdhbmktbG9jLS1zbGlkZS1pbi1ib3R0b20tMXMtd2QtcDUnKTtcbiAgICB0ZXh0TG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCggJ2FuaS1sb2MtLXNsaWRlLWluLWJvdHRvbS0xcy13ZC0xcycpO1xuICAgIHJlc3RhdXJhbnRJbWcuY2xhc3NMaXN0LmFkZCgnYW5pLWxvYy0tc2xpZGUtaW4tcmlnaHQnKTtcblxuXG4gICAgLy9URVhUIENPTlRFTlQ6XG4gICAgdGV4dEhlYWRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdPVVIgTE9DQVRJT04nO1xuICAgIHRleHRQYXJhZ3JhcGhDb250YWluZXIudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgYXVjdG9yIG1hZ25hIGF0IGVsaXQgc2NlbGVyaXNxdWUsIGJpYmVuZHVtIGRpZ25pc3NpbSBvcmNpIHZlbmVuYXRpcy4gUGVsbGVudGVzcXVlIGhhYml0YW50LidcbiAgICB0ZXh0TG9jYXRpb25EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcyODIgS2V2aW4gQnJvb2ssIEltb2dlbmVib3JvdWdoLCBDQSA1ODUxNydcblxuXG4gICAgLy9TRUNUSU9OIEFQUEVORElORzpcbiAgICB0ZXh0TG9jYXRpb25Mb2dvLmFwcGVuZChsb2NhdGlvbkxvZ29JbWcpO1xuICAgIHRleHRMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQodGV4dExvY2F0aW9uTG9nbywgdGV4dExvY2F0aW9uRGVzY3JpcHRpb24pO1xuICAgIHRleHRTZWN0aW9uLmFwcGVuZCh0ZXh0SGVhZGVyQ29udGFpbmVyLCB0ZXh0UGFyYWdyYXBoQ29udGFpbmVyLCB0ZXh0TG9jYXRpb25Db250YWluZXIpO1xuICAgIGltYWdlU2VjdGlvbi5hcHBlbmQocmVzdGF1cmFudEltZyk7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kKHRleHRTZWN0aW9uLCBpbWFnZVNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uRGl2O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=