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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEOztBQUU5QztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw0REFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXJvbi1zaGFrZS8uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1zSGVyb0ltZyBmcm9tICcuLi8uLi9pbWFnZXMvaXJvbi1zaGFrZS1oZXJvLWltZy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcbiAgICAgICAgICBtaXNzaW9uU3RhdGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgIG9yZGVyTm93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgICAgICAgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhhdmUgb25lJ3MgU2hha2UgYW5kIGVhdCBpdCB0b28hXCI7XG4gICAgbWlzc2lvblN0YXRlbWVudC50ZXh0Q29udGVudCA9ICdUbyBpbnNwaXJlIGFuZCBudXJ0dXJlIHRoZSBodW1hbiBzcGlyaXQgLSBvbmUgcGVyc29uLCBvbmUgY3VwIGFuZCBvbmUgbmVpZ2hib3Job29kIGF0IGEgdGltZS4nXG4gICAgb3JkZXJOb3dCdXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93JztcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluLWJvdHRvbScpO1xuICAgIG1pc3Npb25TdGF0ZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4tYm90dG9tLTFzZCcpO1xuICAgIG9yZGVyTm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluLWJvdHRvbS0yc2QnKTtcblxuICAgIGNvbnN0IG1pbGtTaGFrZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbGtTaGFrZS5zcmMgPSBtc0hlcm9JbWc7XG4gICAgaW1hZ2VEaXYuYXBwZW5kKG1pbGtTaGFrZSk7XG4gICAgbWlsa1NoYWtlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluLXJpZ2h0Jyk7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgbWlzc2lvblN0YXRlbWVudCwgb3JkZXJOb3dCdXR0b24pO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRleHRDb250YWluZXIsIGltYWdlRGl2KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgaG9tZVBhZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLWNvbnRhaW5lcicpO1xuICAgIGhvbWVQYWdlRGl2LmFwcGVuZChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLS1oZWFkaW5nJyk7XG4gICAgbWlzc2lvblN0YXRlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2UtLW1pc3Npb24tc3RhdGVtZW50Jyk7XG4gICAgb3JkZXJOb3dCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLS1vcmRlci1idG4nKTtcbiAgICBvcmRlck5vd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYWxlcnQoJ09yZGVyIG92ZXIgYXQgdGhlIG1lbnUgdGFiIScpKTtcblxuICAgIGhlYWRpbmcuc3R5bGUuZm9udEZhbWlseSA9ICd1bmlxdWVGb250JztcbiAgICBtaXNzaW9uU3RhdGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnbWFpbkZvbnQtLWJvbGQnO1xuICAgIGhvbWVQYWdlRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRTVFNUU1JztcbiAgICByZXR1cm4gaG9tZVBhZ2VEaXY7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==