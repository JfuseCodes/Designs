import restaurantImageImport from '../../images/restaurant-location.png';
import locationLogoImageImport from '../../images/location-icon.png';

export default function location(){

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
    restaurantImg.src = restaurantImageImport;
    // restaurantMobileImg.src = restaurantImageMobileImport;
    locationLogoImg.src = locationLogoImageImport;

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