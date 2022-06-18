import toggleLink from "../functional/toggleNavBarLinks";
import setTextContent from "../functional/setTextContent";
import logoImg from "../../images/milk-logo.jpg";

export default function navBar(){
    const navContainer = document.createElement('div'),
          navLogoContainer = document.createElement('div'),
          navLinksContainer = document.createElement('div'),
          navLogo = new Image(),
          navLinksList = document.createElement('ul');
    const link1 = document.createElement('li'),
          link2 = document.createElement('li'),
          link3 = document.createElement('li'),
          link4 = document.createElement('li'),
          linkArray = [navLogo, link1,link2,link3,link4],
          linkText = ['skip', 'About', 'Location', 'Menu', 'Franchise'];
        
    document.onload = linkArray[0].classList.add('display-only');
                      
    navLogo.src = logoImg;
    navLogo.style.width = "64px";
    navLogo.style.height = "64px";
    navLogo.style.borderRadius = "50%"
    navLogoContainer.append(navLogo);
    setTextContent(linkArray, linkText);
    navContainer.classList.add('nav-container', 'slide-in-top');
    navLinksList.append(link1, link2, link3, link4);
    navLinksContainer.append(navLinksList);
    navContainer.append(navLogoContainer,navLinksContainer);
    toggleLink(linkArray);
    return {navContainer, linkArray};
};