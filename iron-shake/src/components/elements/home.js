import msHeroImg from '../../images/iron-shake-hero-img.png';

export default function home() {
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
    milkShake.src = msHeroImg;
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