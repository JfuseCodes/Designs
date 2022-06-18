import iconFaceBookBlack from "../../images/social-media/icon-facebook-black.jpg";
import iconInstagram from "../../images/social-media/icon-instagram.png";
import iconTwitterBlack from "../../images/social-media/icon-twitter-black.png";
import bowlSpoonImport from '../../images/franchise/bowl-spoon.png';
import brownieShakeImport from '../../images/franchise/brownie-shake-fr.png';
import oreoShakeImport from '../../images/franchise/oreo-shake-fr.png';

export default function franchise(){
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

    const instagramContact = new SocialMediaContact("instagram", iconInstagram,),
          twitterContact = new SocialMediaContact("twitter", iconTwitterBlack),
          facebookContact = new SocialMediaContact("facebook", iconFaceBookBlack);
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

          bowlSpoonImg.src = bowlSpoonImport;
          brownieShakeImg.src = brownieShakeImport;
          oreoShakeImg.src = oreoShakeImport;



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