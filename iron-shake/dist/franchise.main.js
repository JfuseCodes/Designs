"use strict";
(self["webpackChunkiron_shake"] = self["webpackChunkiron_shake"] || []).push([["franchise"],{

/***/ "./src/components/elements/franchise.js":
/*!**********************************************!*\
  !*** ./src/components/elements/franchise.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ franchise)
/* harmony export */ });
/* harmony import */ var _images_social_media_icon_facebook_black_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/social-media/icon-facebook-black.jpg */ "./src/images/social-media/icon-facebook-black.jpg");
/* harmony import */ var _images_social_media_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/social-media/icon-instagram.png */ "./src/images/social-media/icon-instagram.png");
/* harmony import */ var _images_social_media_icon_twitter_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/social-media/icon-twitter-black.png */ "./src/images/social-media/icon-twitter-black.png");
/* harmony import */ var _images_franchise_bowl_spoon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/franchise/bowl-spoon.png */ "./src/images/franchise/bowl-spoon.png");
/* harmony import */ var _images_franchise_brownie_shake_fr_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/franchise/brownie-shake-fr.png */ "./src/images/franchise/brownie-shake-fr.png");
/* harmony import */ var _images_franchise_oreo_shake_fr_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/franchise/oreo-shake-fr.png */ "./src/images/franchise/oreo-shake-fr.png");







function franchise(){
    //MAIN CONTAINERS
    const franchiseDiv = document.createElement('div'),contentContainer = document.createElement('div');
    const textContentSection = document.createElement('section'), imageContentSection = document.createElement('section');
    
    //TEXT SECTION DOM ELEMENTS:
    
    //HEADING
    const headingContentContainer = document.createElement('div'),
          heading = document.createElement('h1');
          heading.textContent = 'Follow Our Social Media';

    //BODY
    const textBodyContentContainer = document.createElement('div');
    class SocialMediaContact {
        constructor(platform, imageImport, image){
            this.platform = platform;
            this.imageImport = imageImport;
            this.image = null;
        }
        setImage(){
            this.image = new Image();
            this.image.src = this.imageImport;
            return this.image;
        }
        getPlatform(){
            return `<div class="contact--${this.platform}-container contact-container"><div class='contact--image-container'><img src='${this.image.src}'></div><div class='contact--info-container'><p class='contact--info'>${this.platform}.com/ironshake</p></div></div>`;
        };
    }

    const instagramContact = new SocialMediaContact("instagram", _images_social_media_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__,),
          twitterContact = new SocialMediaContact("twitter", _images_social_media_icon_twitter_black_png__WEBPACK_IMPORTED_MODULE_2__),
          facebookContact = new SocialMediaContact("facebook", _images_social_media_icon_facebook_black_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const contacts = [instagramContact, twitterContact, facebookContact];
    contacts.forEach( contactInfo => {
        contactInfo.setImage();
        let contactDiv = document.createElement('div'),
            contact = contactInfo.getPlatform();

            if(contactInfo.platform == 'instagram'){
                contactDiv.classList.add('contact--info-container');
                contactDiv.innerHTML = contact;
                contactDiv.classList.add('ani-franchise--contact-slide-in-left-1s-wd-p4');
            }
            if(contactInfo.platform == 'twitter'){
                contactDiv.classList.add('contact--info-container');
                contactDiv.innerHTML = contact;
                contactDiv.classList.add('ani-franchise--contact-slide-in-left-1s-wd-p6');
            }
            if(contactInfo.platform == 'facebook'){
                contactDiv.classList.add('contact--info-container');
                contactDiv.innerHTML = contact;
                contactDiv.classList.add('ani-franchise--contact-slide-in-left-1s-wd-p8');
            }
        
        textBodyContentContainer.append(contactDiv);
    });
    //IMAGE SECTION DOM ELEMENTS
    const imageSectionContentContainer = document.createElement('div'),
          imageDivParent1 = document.createElement('div'),
          imageDivParent2 = document.createElement('div'),
          imageDivParent3 = document.createElement('div'),
          bowlSpoonImg = new Image(),
          brownieShakeImg = new Image(),
          oreoShakeImg = new Image();

          bowlSpoonImg.src = _images_franchise_bowl_spoon_png__WEBPACK_IMPORTED_MODULE_3__;
          brownieShakeImg.src = _images_franchise_brownie_shake_fr_png__WEBPACK_IMPORTED_MODULE_4__;
          oreoShakeImg.src = _images_franchise_oreo_shake_fr_png__WEBPACK_IMPORTED_MODULE_5__;



    //CLASSLISTS
    franchiseDiv.classList.add('franchise--main-container');
    contentContainer.classList.add('fr-content--container');
    textContentSection.classList.add('fr-content--text-section');
    headingContentContainer.classList.add('fr-text--heading-container', 'ani-franchise--heading-slide-in-left');
    heading.classList.add('fr-text--heading');
    textBodyContentContainer.classList.add('fr-text--body-container');
    imageContentSection.classList.add('fr-content--image-section');
    imageSectionContentContainer.classList.add('fr-image-container');
    imageDivParent1.classList.add('fr-image--div1','fr-image--div','ani-franchise--slide-in-right-1p4-nd');
    imageDivParent2.classList.add('fr-image--div2','fr-image--div', 'ani-franchise--slide-in-right-1p4-wd-p5');
    imageDivParent3.classList.add('fr-image--div3','fr-image--div', 'ani-franchise--slide-in-right-1p4-wd-1');
    
    //APPENDING
    headingContentContainer.append(heading);
    textContentSection.append(headingContentContainer, textBodyContentContainer);
    imageDivParent1.append(bowlSpoonImg);
    imageDivParent2.append(brownieShakeImg);
    imageDivParent3.append(oreoShakeImg);
    imageSectionContentContainer.append(imageDivParent1, imageDivParent2, imageDivParent3);
    imageContentSection.append(imageSectionContentContainer);
    contentContainer.append(textContentSection, imageContentSection );
    franchiseDiv.append(contentContainer);
    return franchiseDiv;
};

/***/ }),

/***/ "./src/images/franchise/bowl-spoon.png":
/*!*********************************************!*\
  !*** ./src/images/franchise/bowl-spoon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7858f72fa64efeef67b0.png";

/***/ }),

/***/ "./src/images/franchise/brownie-shake-fr.png":
/*!***************************************************!*\
  !*** ./src/images/franchise/brownie-shake-fr.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a292319b40b829a41136.png";

/***/ }),

/***/ "./src/images/franchise/oreo-shake-fr.png":
/*!************************************************!*\
  !*** ./src/images/franchise/oreo-shake-fr.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b558c59e200377b7e37.png";

/***/ }),

/***/ "./src/images/social-media/icon-facebook-black.jpg":
/*!*********************************************************!*\
  !*** ./src/images/social-media/icon-facebook-black.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b77670c0aff4792845cd.jpg";

/***/ }),

/***/ "./src/images/social-media/icon-instagram.png":
/*!****************************************************!*\
  !*** ./src/images/social-media/icon-instagram.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94b0f0a97d39e8369264.png";

/***/ }),

/***/ "./src/images/social-media/icon-twitter-black.png":
/*!********************************************************!*\
  !*** ./src/images/social-media/icon-twitter-black.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b15248c5158f8c15a3c9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/elements/franchise.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbmNoaXNlLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRjtBQUNUO0FBQ087QUFDWjtBQUNTO0FBQ047O0FBRXhEO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjLGdGQUFnRixlQUFlLHdFQUF3RSxjQUFjO0FBQzlPO0FBQ0E7O0FBRUEsaUVBQWlFLG9FQUFhO0FBQzlFLDZEQUE2RCx3RUFBZ0I7QUFDN0UsK0RBQStELHlFQUFpQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsNkRBQWU7QUFDNUMsZ0NBQWdDLG1FQUFrQjtBQUNsRCw2QkFBNkIsZ0VBQWU7Ozs7QUFJNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcm9uLXNoYWtlLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvZnJhbmNoaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29uRmFjZUJvb2tCbGFjayBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NvY2lhbC1tZWRpYS9pY29uLWZhY2Vib29rLWJsYWNrLmpwZ1wiO1xuaW1wb3J0IGljb25JbnN0YWdyYW0gZnJvbSBcIi4uLy4uL2ltYWdlcy9zb2NpYWwtbWVkaWEvaWNvbi1pbnN0YWdyYW0ucG5nXCI7XG5pbXBvcnQgaWNvblR3aXR0ZXJCbGFjayBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NvY2lhbC1tZWRpYS9pY29uLXR3aXR0ZXItYmxhY2sucG5nXCI7XG5pbXBvcnQgYm93bFNwb29uSW1wb3J0IGZyb20gJy4uLy4uL2ltYWdlcy9mcmFuY2hpc2UvYm93bC1zcG9vbi5wbmcnO1xuaW1wb3J0IGJyb3duaWVTaGFrZUltcG9ydCBmcm9tICcuLi8uLi9pbWFnZXMvZnJhbmNoaXNlL2Jyb3duaWUtc2hha2UtZnIucG5nJztcbmltcG9ydCBvcmVvU2hha2VJbXBvcnQgZnJvbSAnLi4vLi4vaW1hZ2VzL2ZyYW5jaGlzZS9vcmVvLXNoYWtlLWZyLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyYW5jaGlzZSgpe1xuICAgIC8vTUFJTiBDT05UQUlORVJTXG4gICAgY29uc3QgZnJhbmNoaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHRDb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSwgaW1hZ2VDb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBcbiAgICAvL1RFWFQgU0VDVElPTiBET00gRUxFTUVOVFM6XG4gICAgXG4gICAgLy9IRUFESU5HXG4gICAgY29uc3QgaGVhZGluZ0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZvbGxvdyBPdXIgU29jaWFsIE1lZGlhJztcblxuICAgIC8vQk9EWVxuICAgIGNvbnN0IHRleHRCb2R5Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzIFNvY2lhbE1lZGlhQ29udGFjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtLCBpbWFnZUltcG9ydCwgaW1hZ2Upe1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUltcG9ydCA9IGltYWdlSW1wb3J0O1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW1hZ2UoKXtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5pbWFnZUltcG9ydDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgICAgICB9XG4gICAgICAgIGdldFBsYXRmb3JtKCl7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb250YWN0LS0ke3RoaXMucGxhdGZvcm19LWNvbnRhaW5lciBjb250YWN0LWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9J2NvbnRhY3QtLWltYWdlLWNvbnRhaW5lcic+PGltZyBzcmM9JyR7dGhpcy5pbWFnZS5zcmN9Jz48L2Rpdj48ZGl2IGNsYXNzPSdjb250YWN0LS1pbmZvLWNvbnRhaW5lcic+PHAgY2xhc3M9J2NvbnRhY3QtLWluZm8nPiR7dGhpcy5wbGF0Zm9ybX0uY29tL2lyb25zaGFrZTwvcD48L2Rpdj48L2Rpdj5gO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhZ3JhbUNvbnRhY3QgPSBuZXcgU29jaWFsTWVkaWFDb250YWN0KFwiaW5zdGFncmFtXCIsIGljb25JbnN0YWdyYW0sKSxcbiAgICAgICAgICB0d2l0dGVyQ29udGFjdCA9IG5ldyBTb2NpYWxNZWRpYUNvbnRhY3QoXCJ0d2l0dGVyXCIsIGljb25Ud2l0dGVyQmxhY2spLFxuICAgICAgICAgIGZhY2Vib29rQ29udGFjdCA9IG5ldyBTb2NpYWxNZWRpYUNvbnRhY3QoXCJmYWNlYm9va1wiLCBpY29uRmFjZUJvb2tCbGFjayk7XG4gICAgY29uc3QgY29udGFjdHMgPSBbaW5zdGFncmFtQ29udGFjdCwgdHdpdHRlckNvbnRhY3QsIGZhY2Vib29rQ29udGFjdF07XG4gICAgY29udGFjdHMuZm9yRWFjaCggY29udGFjdEluZm8gPT4ge1xuICAgICAgICBjb250YWN0SW5mby5zZXRJbWFnZSgpO1xuICAgICAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgY29udGFjdCA9IGNvbnRhY3RJbmZvLmdldFBsYXRmb3JtKCk7XG5cbiAgICAgICAgICAgIGlmKGNvbnRhY3RJbmZvLnBsYXRmb3JtID09ICdpbnN0YWdyYW0nKXtcbiAgICAgICAgICAgICAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtLWluZm8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdERpdi5pbm5lckhUTUwgPSBjb250YWN0O1xuICAgICAgICAgICAgICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnYW5pLWZyYW5jaGlzZS0tY29udGFjdC1zbGlkZS1pbi1sZWZ0LTFzLXdkLXA0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjb250YWN0SW5mby5wbGF0Zm9ybSA9PSAndHdpdHRlcicpe1xuICAgICAgICAgICAgICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC0taW5mby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RGl2LmlubmVySFRNTCA9IGNvbnRhY3Q7XG4gICAgICAgICAgICAgICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdhbmktZnJhbmNoaXNlLS1jb250YWN0LXNsaWRlLWluLWxlZnQtMXMtd2QtcDYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNvbnRhY3RJbmZvLnBsYXRmb3JtID09ICdmYWNlYm9vaycpe1xuICAgICAgICAgICAgICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC0taW5mby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RGl2LmlubmVySFRNTCA9IGNvbnRhY3Q7XG4gICAgICAgICAgICAgICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdhbmktZnJhbmNoaXNlLS1jb250YWN0LXNsaWRlLWluLWxlZnQtMXMtd2QtcDgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRleHRCb2R5Q29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdERpdik7XG4gICAgfSk7XG4gICAgLy9JTUFHRSBTRUNUSU9OIERPTSBFTEVNRU5UU1xuICAgIGNvbnN0IGltYWdlU2VjdGlvbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBpbWFnZURpdlBhcmVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBpbWFnZURpdlBhcmVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBpbWFnZURpdlBhcmVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBib3dsU3Bvb25JbWcgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBicm93bmllU2hha2VJbWcgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBvcmVvU2hha2VJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgIGJvd2xTcG9vbkltZy5zcmMgPSBib3dsU3Bvb25JbXBvcnQ7XG4gICAgICAgICAgYnJvd25pZVNoYWtlSW1nLnNyYyA9IGJyb3duaWVTaGFrZUltcG9ydDtcbiAgICAgICAgICBvcmVvU2hha2VJbWcuc3JjID0gb3Jlb1NoYWtlSW1wb3J0O1xuXG5cblxuICAgIC8vQ0xBU1NMSVNUU1xuICAgIGZyYW5jaGlzZURpdi5jbGFzc0xpc3QuYWRkKCdmcmFuY2hpc2UtLW1haW4tY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmci1jb250ZW50LS1jb250YWluZXInKTtcbiAgICB0ZXh0Q29udGVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZnItY29udGVudC0tdGV4dC1zZWN0aW9uJyk7XG4gICAgaGVhZGluZ0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZnItdGV4dC0taGVhZGluZy1jb250YWluZXInLCAnYW5pLWZyYW5jaGlzZS0taGVhZGluZy1zbGlkZS1pbi1sZWZ0Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmci10ZXh0LS1oZWFkaW5nJyk7XG4gICAgdGV4dEJvZHlDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZyLXRleHQtLWJvZHktY29udGFpbmVyJyk7XG4gICAgaW1hZ2VDb250ZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmci1jb250ZW50LS1pbWFnZS1zZWN0aW9uJyk7XG4gICAgaW1hZ2VTZWN0aW9uQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmci1pbWFnZS1jb250YWluZXInKTtcbiAgICBpbWFnZURpdlBhcmVudDEuY2xhc3NMaXN0LmFkZCgnZnItaW1hZ2UtLWRpdjEnLCdmci1pbWFnZS0tZGl2JywnYW5pLWZyYW5jaGlzZS0tc2xpZGUtaW4tcmlnaHQtMXA0LW5kJyk7XG4gICAgaW1hZ2VEaXZQYXJlbnQyLmNsYXNzTGlzdC5hZGQoJ2ZyLWltYWdlLS1kaXYyJywnZnItaW1hZ2UtLWRpdicsICdhbmktZnJhbmNoaXNlLS1zbGlkZS1pbi1yaWdodC0xcDQtd2QtcDUnKTtcbiAgICBpbWFnZURpdlBhcmVudDMuY2xhc3NMaXN0LmFkZCgnZnItaW1hZ2UtLWRpdjMnLCdmci1pbWFnZS0tZGl2JywgJ2FuaS1mcmFuY2hpc2UtLXNsaWRlLWluLXJpZ2h0LTFwNC13ZC0xJyk7XG4gICAgXG4gICAgLy9BUFBFTkRJTkdcbiAgICBoZWFkaW5nQ29udGVudENvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG4gICAgdGV4dENvbnRlbnRTZWN0aW9uLmFwcGVuZChoZWFkaW5nQ29udGVudENvbnRhaW5lciwgdGV4dEJvZHlDb250ZW50Q29udGFpbmVyKTtcbiAgICBpbWFnZURpdlBhcmVudDEuYXBwZW5kKGJvd2xTcG9vbkltZyk7XG4gICAgaW1hZ2VEaXZQYXJlbnQyLmFwcGVuZChicm93bmllU2hha2VJbWcpO1xuICAgIGltYWdlRGl2UGFyZW50My5hcHBlbmQob3Jlb1NoYWtlSW1nKTtcbiAgICBpbWFnZVNlY3Rpb25Db250ZW50Q29udGFpbmVyLmFwcGVuZChpbWFnZURpdlBhcmVudDEsIGltYWdlRGl2UGFyZW50MiwgaW1hZ2VEaXZQYXJlbnQzKTtcbiAgICBpbWFnZUNvbnRlbnRTZWN0aW9uLmFwcGVuZChpbWFnZVNlY3Rpb25Db250ZW50Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0ZXh0Q29udGVudFNlY3Rpb24sIGltYWdlQ29udGVudFNlY3Rpb24gKTtcbiAgICBmcmFuY2hpc2VEaXYuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuICAgIHJldHVybiBmcmFuY2hpc2VEaXY7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==