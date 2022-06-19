import brownieShakeImport from '../../images/menu/1-Smoothies/brownie-shake.png';
import oreoShakeImport from '../../images/menu/1-Smoothies/oreo-shake.png';
import strawberrySmoothieImport from '../../images/menu/1-Smoothies/strawberry-shake.png';
import chickenWrapImport from '../../images/menu/2-Burgers,Pitas, Wraps/chicken-wrap.png';
import sausageEggWrapImport from '../../images/menu/2-Burgers,Pitas, Wraps/egg-wrap.png';
import pitaFillImport from '../../images/menu/2-Burgers,Pitas, Wraps/pita-fill.png';
import berryBowlImport from '../../images/menu/3-bowls/berry-bowl.png';
import shrimpBowlImport from '../../images/menu/3-bowls/shrimp-bowl.png';
import strawberryBowlImport from '../../images/menu/3-bowls/strawberry-bowl.png';
import veganBowlImport from '../../images/menu/3-bowls/vegan-bowl.png';
import blueberryCheesecakeImport from '../../images/menu/4-snacks/blueberry-cheesecake.png';
import donutImport from '../../images/menu/4-snacks/donut-pile.png';
import vanillaIceCreamImport from '../../images/menu/4-snacks/vanilla-icecream.png';
import setTextContent from '../functional/setTextContent';
import displaySelectedLinkContent from '../functional/toggleNavBarLinks';
import displayContent from '../functional/displayContent';
import toggleMenuCategory from '../functional/toggleMenuCategory';

export default function menu(){
    //MAIN DOM ELEMENTS
    const menuDiv = document.createElement('div'),
          contentParent = document.createElement('div');

    //DOM ELEMENTS => SECTIONS:
    const contentHeaderContainer = document.createElement('section'),
          contentSubHeaderContainer = document.createElement('section'),
          contentImagesContainer = document.createElement('section');
    
    //DOM ELEMENTS => DIV CONTAINERS:
    const shakeSmoothieContainer = document.createElement('div'),
          wrapsPitaContainer = document.createElement('div'),
          saladFruitContainer = document.createElement('div'),
          snacksContainer = document.createElement('div');
    
    //=> MENU CONTENT CONTAINER
    const shakeSmoothiesContent = document.createElement('div'),
          wrapsPitaContent = document.createElement('div'),
          saladFruitContent = document.createElement('div'),
          snacksContent = document.createElement('div');

    const menuContainers = [shakeSmoothieContainer, wrapsPitaContainer, saladFruitContainer, snacksContainer],
          menuContent = [shakeSmoothiesContent, wrapsPitaContent, saladFruitContent, snacksContent];
    for(let i = 0; i <= menuContainers.length - 1; i++){
        menuContainers[i].append(menuContent[i]);
    }
    //SUB HEADING CATEGORIES

    const subHeadingCategoryContainerOne = document.createElement('div'),
          subHeadingCategoryContainerTwo= document.createElement('div'),
          subHeadingCategoryContainerThree = document.createElement('div'),
          subHeadingCategoryContainerFour = document.createElement('div');

    //CATEGORY SUB HEADINGS
    const subHeadingCategoryOne = document.createElement('h3'),
          subHeadingCategoryTwo = document.createElement('h3'),
          subHeadingCategoryThree = document.createElement('h3'),
          subHeadingCategoryFour = document.createElement('h3');

    const mainHeading = document.createElement('h1');

    mainHeading.classList.add('ani-menu--slide-in-bottom-1s-nd');
    subHeadingCategoryContainerOne.classList.add('ani-menu-category-heading--slide-in-bottom-1s-wd-p5');
    subHeadingCategoryContainerTwo.classList.add('ani-menu-category-heading--slide-in-bottom-1s-wd-p6');
    subHeadingCategoryContainerThree.classList.add('ani-menu-category-heading--slide-in-bottom-1s-wd-p7');
    subHeadingCategoryContainerFour.classList.add('ani-menu-category-heading--slide-in-bottom-1s-wd-p8');

    class Card {
        constructor(price, name, summary, imageImport, category, rowNumber, image, ){
           this.price = price;
           this.name = name;
           this.summary = summary;
           this.imageImport = imageImport;
           this.image = null;
           this.category = category;
           this.rowNumber = rowNumber;
        };
        setImage(){
         this.image = new Image();
         this.image.src = this.imageImport;
         return this.image;
        }
        getPrice(){return `<div class='card--price-container'><p class='card--price-heading'>${this.price}</p></div>`;}
        getName(){return `<div class='card--name-container'><p class='card--name-heading'>${this.name}</p></div>`}
        getSummary(){return `<div class='card--summary-container'><p class='card--summary-heading'>${this.summary}</p></div>`}    
    }
    const brownieShake = new Card('$12', 'Brownie Shake', 'Quisque gravida nulla ullamcorper, tristique mi et, accumsan nulla. Lorem ipsum dolor.',  brownieShakeImport, "Shakes & Smoothies", 1),
          oreoShake = new Card('$12', 'Oreo Shake', 'Fusce ac fermentum odio, id accumsan odio. Aliquam eget magna at ligula.', oreoShakeImport,"Shakes & Smoothies",2),
          strawBerrySmoothie = new Card('$6', 'Strawberry Smoothie', 'Sed sed enim sagittis erat sagittis ultricies. Pellentesque a quam ut turpis.', strawberrySmoothieImport,"Shakes & Smoothies", 3),
          sausageEggWrap = new Card('$14', 'Sausage Egg Wrap', 'Nunc vehicula massa at dolor varius tristique. Proin quis nibh in neque commodo.', sausageEggWrapImport,"Wraps & Pitas", 4),
          chickenWrap = new Card('$14', 'Chicken Wrap', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus.', chickenWrapImport,"Wraps & Pitas", 5),
          beefPita = new Card('$6', 'Beef Pita', 'Maecenas sed ullamcorper nulla. Etiam ullamcorper.', pitaFillImport,"Wraps & Pitas", 6),
          berryBoost = new Card('$10', 'Berry Boost', 'Integer molestie suscipit turpis quis hendrerit.', berryBowlImport,"Salad & Fruit Bowls", 4),
          shrimpVeggie = new Card('$18', 'Shrimp Veggie', 'In consectetur porta eros ac ultricies. Vestibulum eget lorem erat.', shrimpBowlImport,"Salad & Fruit Bowls", 5),
          veganDelight = new Card('$13', "Vegan’s Delight", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales dui nec velit pretium.', veganBowlImport,"Salad & Fruit Bowls", 6),
          cheeseCake = new Card('$6', 'Cheesecake Slice', 'Ut a massa vitae turpis elementum aliquam. Nunc pharetra finibus elit sed.', blueberryCheesecakeImport,"Snacks" , 4),
          donut = new Card('$4', 'Fist Sized Donut', 'Vestibulum ullamcorper non.', donutImport, "Snacks",5),
          vanillaWarfare = new Card('$8', 'Vanilla Warfare', 'Nunc molestie feugiat ultricies. Aliquam in nibh vehicula, scelerisque mi consectetur, finibus arcu.', vanillaIceCreamImport,"Snacks", 6);
    
    const menuItems = [brownieShake, oreoShake, strawBerrySmoothie,sausageEggWrap, chickenWrap, beefPita, berryBoost, shrimpVeggie, veganDelight, cheeseCake, donut, vanillaWarfare,];
    //IMAGE SRC:
    let cardImageDiv,imageDiv, cardDiv;
    menuItems.forEach( item => {
        item.setImage();
         cardImageDiv = document.createElement('div');
         imageDiv = document.createElement('div');
         cardDiv = document.createElement('div');
        if(item.rowNumber == 4) {cardImageDiv.classList.add('ani-menu-extra-category-card--slide-in-bottom-1p3s-nd');}
        if(item.rowNumber == 5) cardImageDiv.classList.add('ani-menu-extra-category-card--slide-in-bottom-1p3s-wd-p3');
        if(item.rowNumber == 6) cardImageDiv.classList.add('ani-menu-extra-category-card--slide-in-bottom-1p3s-wd-1p2');
        if(item.category == 'Shakes & Smoothies'){
            imageDiv.classList.add('item-image--container');
            cardDiv.classList.add('card--container');
            cardImageDiv.classList.add('item-container');
            let itemPrice = item.getPrice(),
                itemHeading = item.getName(),
                itemSummary = item.getSummary(),
                itemImage = item.image;
            imageDiv.appendChild(itemImage);
            if(item.rowNumber == 1) cardImageDiv.classList.add('ani-menu-category-card--slide-in-bottom-1s-wd-p8');
            if(item.rowNumber == 2) cardImageDiv.classList.add('ani-menu-category-card--slide-in-bottom-1s-wd-p9');
            if(item.rowNumber == 3) cardImageDiv.classList.add('ani-menu-category-card--slide-in-bottom-1s-wd-1s');

            cardDiv.innerHTML = `${itemPrice}${itemHeading}${itemSummary}`;
            cardImageDiv.append(imageDiv, cardDiv);
            shakeSmoothiesContent.append(cardImageDiv);
        }
        if(item.category == 'Wraps & Pitas'){
            cardDiv.classList.add('category-container--wraps-pitas');
            imageDiv.classList.add('item-image--container');
            cardDiv.classList.add('card--container');
            cardImageDiv.classList.add('item-container');
        
            let itemPrice = item.getPrice(),
                itemHeading = item.getName(),
                itemSummary = item.getSummary(),
                itemImage = item.image;
            imageDiv.appendChild(itemImage);
            cardDiv.innerHTML = `${itemPrice}${itemHeading}${itemSummary}`;
            cardImageDiv.append(imageDiv, cardDiv);
            wrapsPitaContent.append(cardImageDiv);
        }
        if(item.category == 'Salad & Fruit Bowls'){
            cardDiv.classList.add('category-container--bowls');
            imageDiv.classList.add('item-image--container');
            cardDiv.classList.add('card--container');
            cardImageDiv.classList.add('item-container');
        
            let itemPrice = item.getPrice(),
                itemHeading = item.getName(),
                itemSummary = item.getSummary(),
                itemImage = item.image;
            imageDiv.appendChild(itemImage);
            
            
            cardDiv.innerHTML = `${itemPrice}${itemHeading}${itemSummary}`;
            cardImageDiv.append(imageDiv, cardDiv);
            saladFruitContent.append(cardImageDiv);
        }        
        if(item.category == 'Snacks'){
            cardDiv.classList.add('category-container--snacks');
            imageDiv.classList.add('item-image--container');
            cardDiv.classList.add('card--container');
            cardImageDiv.classList.add('item-container');
        
            let itemPrice = item.getPrice(),
                itemHeading = item.getName(),
                itemSummary = item.getSummary(),
                itemImage = item.image;
            imageDiv.appendChild(itemImage);
        
        
            cardDiv.innerHTML = `${itemPrice}${itemHeading}${itemSummary}`;
            cardImageDiv.append(imageDiv, cardDiv);
            snacksContent.append(cardImageDiv);
        };
    });

    
    //ELEMENT CLASSLISTS
    shakeSmoothieContainer.classList.add('container--shakes-smoothies');
    wrapsPitaContainer.classList.add('container--wraps-pitas');
    saladFruitContainer.classList.add('container--salad-fruit');
    snacksContainer.classList.add('container--snacks');

    //ELEMENT TEXT CONTENTS
    mainHeading.textContent = 'Featured Menu';

    //SUB HEADINGS
    subHeadingCategoryOne.textContent = 'Shakes & Smoothies';
    subHeadingCategoryTwo.textContent = 'Wraps & Pitas';
    subHeadingCategoryThree.textContent = 'Salad & Fruit Bowls';
    subHeadingCategoryFour.textContent = 'Snacks';
    const subHeadingCategories = [subHeadingCategoryOne, subHeadingCategoryTwo, subHeadingCategoryThree, subHeadingCategoryFour];

    //CLASSLISTS
    menuDiv.classList.add('menu--main-container');
    contentParent.classList.add('content--container');
    contentParent.style.backgroundColor = '#FFFFFF';
    contentHeaderContainer.classList.add('content--header-container');
    contentSubHeaderContainer.classList.add('content--sub-header-container');
    contentImagesContainer.classList.add('content--images-card-container');
    shakeSmoothiesContent.classList.add('container--smoothies', 'menu-items--container');
    wrapsPitaContent.classList.add('container--wraps-pita', 'menu-items--container')
    saladFruitContent.classList.add('container--salads-fruit', 'menu-items--container')
    snacksContent.classList.add('container--snacks', 'menu-items--container', 'test-class');
    // snacksContent.classList.add('test-class');
    
    //EVENT LISTENERS
    displaySelectedLinkContent(subHeadingCategories);
    toggleMenuCategory(subHeadingCategories, menuContainers, menuItems);


    //ELEMENT APPENDING
    subHeadingCategoryContainerOne.append(subHeadingCategoryOne);
    subHeadingCategoryContainerTwo.append(subHeadingCategoryTwo);
    subHeadingCategoryContainerThree.append(subHeadingCategoryThree);
    subHeadingCategoryContainerFour.append(subHeadingCategoryFour);
    contentHeaderContainer.append(mainHeading);
    contentSubHeaderContainer.append(subHeadingCategoryContainerOne, subHeadingCategoryContainerTwo, subHeadingCategoryContainerThree, subHeadingCategoryContainerFour);
    contentImagesContainer.append(shakeSmoothieContainer, wrapsPitaContainer, saladFruitContainer, snacksContainer);
    
    contentParent.append(contentHeaderContainer, contentSubHeaderContainer, contentImagesContainer);
    menuDiv.append(contentParent);

    return menuDiv;
}