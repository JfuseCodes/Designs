import _ from 'lodash';
import navBar from './components/elements/navbar.js';
import home from './components/elements/home.js';
import about from './components/elements/about.js';
import menu from './components/elements/menu.js';
import location from './components/elements/location.js';
import franchise from './components/elements/franchise.js';
import displayContent from './components/functional/displayContent.js';
import './Styles/main.css';


function component() {
    const html = document.documentElement;
    const main = document.createElement('div'),
          homePageDiv = home(),
          aboutDiv = about(),
          menuDiv = menu(),
          locationDiv = location(),
          franchiseDiv = franchise(),
          navBarContainer = navBar().navContainer;
    console.log(navBarContainer);
    main.append(navBarContainer , aboutDiv, homePageDiv, locationDiv, menuDiv, franchiseDiv);
    const componentArrays = [homePageDiv, aboutDiv, locationDiv, menuDiv, franchiseDiv];
    displayContent(navBarContainer, componentArrays);
    
    if(navBar().linkArray[0].textContent == 'skip') html.style.backgroundColor = '#E5E5E5';
       

    return main;
};

document.body.appendChild( component() );
