import headerImg from '../../images/milk-logo.jpg';
import mobileGrapesImgOne from '../../images/grapes-mobile.png';
import mobileFruitSplashImgTwo from '../../images/splashing-fruits.png';
import desktopGrapesImg from '../../images/desktop-grapes.svg';
import desktopSplashingFruitImg from '../../images/desktop-splashing-fruit.svg';


export default function about(){

    const aboutDiv = document.createElement('div'),
          headerSection= document.createElement('section'),
          header_LogoSection = document.createElement('section'),
          header_headingSection = document.createElement('section'),
          grapeSection = document.createElement('section'),
          cupSection = document.createElement('section'),
          informationSection = document.createElement('section'),
          infoDivOne = document.createElement('div'),
          infoDivTwo = document.createElement('div'),
          logoImg = new Image(),
          mobileGrapes1 =  new Image(),
          mobileCup2 = new Image(),
          desktopGrapes = new Image(),
          desktopSplashingFruit = new Image();


    //MEDIA QUERIES:

    //IMAGE SRC:
    logoImg.src = headerImg;
    mobileGrapes1.src = mobileGrapesImgOne;
    mobileCup2.src = mobileFruitSplashImgTwo;
    desktopGrapes.src = desktopGrapesImg;
    desktopSplashingFruit.src = desktopSplashingFruitImg;

    //TEXT CONTENT
    header_headingSection.textContent = 'IronShake';
    infoDivOne.textContent = 'Morbi luctus erat neque, vel scelerisque mi feugiat consequat. Vivamus dapibus dictum pellentesque. Fusce quis elit tempus mi sodales iaculis eu vel dolor. Integer urna magna, gravida eu quam vitae, cursus interdum libero. Nam convallis eros a dolor aliquet, nec gravida justo finibus. Mauris fermentum augue et sem auctor, eu maximus diam euismod. Morbi at tortor risus. Donec eu porta est.'
    infoDivTwo.textContent = 'In hac habitasse platea dictumst. Curabitur eu ex risus. Phasellus porttitor porta volutpat. Quisque vel mi.';
    
    //CLASS LIST ADDITION
    headerSection.classList.add('header--container');
    grapeSection.classList.add('image--grapes-container');
    mobileGrapes1.classList.add('image--grapes');
    cupSection.classList.add('image--cup-container');
    mobileCup2.classList.add('image--cup-of-fruits');
    desktopGrapes.classList.add('image--desktop-grapes');
    desktopSplashingFruit.classList.add('image--desktop-cup-of-fruits');
    informationSection.classList.add('section__info');
    aboutDiv.classList.add('about--main-container');

    //ANIMATION CLASS ADDITION

    header_LogoSection.classList.add('ani-about--slide-in-bottom-1s-nd');
    header_headingSection.classList.add('ani-about--slide-in-bottom-1s-wd-p5');
    infoDivOne.classList.add('ani-about--slide-in-bottom-1s-wd-1s');
    infoDivTwo.classList.add('ani-about--slide-in-bottom-1s-wd-1p2s');
    mobileCup2.classList.add('ani-about--slide-in-right');
    desktopSplashingFruit.classList.add('ani-about--slide-in-right');
    mobileGrapes1.classList.add('ani-about--slide-in-left');
    desktopGrapes.classList.add('ani-about--slide-in-left');

    // IMAGE RENDERING BASED ON SCREEN SIZE
   function displayMobileImage(x){
       if(x.matches){
           mobileCup2.classList.remove('hidden');
           mobileGrapes1.classList.remove('hidden');
           desktopSplashingFruit.classList.add('hidden');
           desktopGrapes.classList.add('hidden');
       }
       else{
           mobileGrapes1.classList.add('hidden');
           mobileCup2.classList.add('hidden')
           desktopSplashingFruit.classList.remove('hidden');
           desktopGrapes.classList.remove('hidden');
       }
   }
   let mobileMax = window.matchMedia("(max-width: 1199px)");
       displayMobileImage(mobileMax);
       mobileMax.addListener(displayMobileImage);
    

    //SECTION APPENDING
    header_LogoSection.append(logoImg);
    grapeSection.append(mobileGrapes1, desktopGrapes);
    headerSection.append(header_LogoSection, header_headingSection);
    cupSection.append(mobileCup2, desktopSplashingFruit);
    informationSection.append(infoDivOne, infoDivTwo);
    aboutDiv.append(headerSection, grapeSection,cupSection, informationSection);
    
    return aboutDiv;
}