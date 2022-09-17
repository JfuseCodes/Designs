// 'use strict';
let DateTime = luxon.DateTime;
// const myAPI_KEY = 'a85aa800562806583036443df79565de';
const myAPI_KEY = config.myAPI_KEY,
      secretKey = config.SECRET_KEY;

const html = document.documentElement,
      body = document.body,
      main = document.createElement('main'),
      formContainer = document.createElement('div'),
      form = document.createElement('form'),
      searchInputContainer = document.createElement('div'),
      searchInput = document.createElement('input'),
      buttonInput = document.createElement('input'),
      unitChangeButton = document.createElement('button'),
      fahrenheitIcon = document.createElement('img'),
      celsiusIcon = document.createElement('img'),
      unitToggleContainer = document.createElement('div'),
      weatherDetailContainer = document.createElement('div');

// let fahrenheitIcon = new Image();
celsiusIcon.src = 'assets/images/temp-icon--celsius.svg';
fahrenheitIcon.src = 'assets/images/temp-icon--fahrenheit.svg';
fahrenheitIcon.classList.add('icon--fahrenheit', );
celsiusIcon.classList.add('icon--celsius', 'hidden');
unitChangeButton.append(fahrenheitIcon, celsiusIcon);
const cloudySunIconImg = 'assets/images/cloudy-sun-icon.svg',
      airQualityIconImg = 'assets/images/air-quality-icon.svg';

unitToggleContainer.classList.add('unit-toggle--container')
unitToggleContainer.append(unitChangeButton);   
formContainer.classList.add('form--container')
const dashboardSection = document.createElement('section');
      dashboardSection.classList.add('dashboard--container');
const currentWeatherCard = document.createElement('article');
      currentWeatherCard.classList.add('card--current-weather', 'card--container');
const airQualityCard = document.createElement('article');
      airQualityCard.classList.add('card--air-quality', 'card--container');
const weatherTodaySection = document.createElement('article');
      weatherTodaySection.classList.add('weather-today__container');
const sideSection_Mobile = document.createElement('article');
      sideSection_Mobile.classList.add('mobile--section');

      weatherDetailContainer.classList.add('container--dashboard__side');
const windDirection = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];

const getWindDirection = degreeValue => {
    degreeValue = Math.round(degreeValue * 8/360); 
    degreeValue = (degreeValue + 8) % 8
    return windDirection[degreeValue];
}

const aqiSelector = (element1, element2) => {
    element1.classList.remove('hidden');
    element2.style.color = 'white';
};

const convertAirQualityIndex = async aqiValue => {
    await aqiValue;
    let goodToolTip = document.querySelector('.aqi-tooltip--good'),
        standardToolTip = document.querySelector('.aqi-tooltip--standard'),
        hazardousToolTip = document.querySelector('.aqi-tooltip--hazardous'),
        aqiTextGood = document.querySelector('.aqi-text--good'),
        aqiTextStandard = document.querySelector('.aqi-text--standard'),
        aqiTextHazardous = document.querySelector('.aqi-text--hazardous');
    let aqiText;
    if(!aqiValue) aqiSelector(goodToolTip, aqiTextGood);

    if(aqiValue == 1) {
        aqiText = 'Good';
        aqiSelector(goodToolTip, aqiTextGood);
    };
    if(aqiValue >= 2 && aqiValue <= 4) {
        aqiText = 'Standard';
        aqiSelector(standardToolTip, aqiTextStandard)
    }
    
    if(aqiValue == 5) {
        aqiText = 'Hazardous';
        aqiSelector(hazardousToolTip, aqiTextHazardous);
    }

}

getWeatherIcon = image => {
    iconImage = `https://openweathermap.org/img/wn/${image}@2x.png`;
    return iconImage;
}

getDate = () => {
    const now = DateTime.now();
          weekDay = now.weekdayShort,
          month = now.monthShort,
          day = now.day,
          year = now.year,
          text = `${weekDay}, ${month} ${day} ${year}`;
    return text;    
}

getDates = (day2Fetch = "" ) => {
    const now = DateTime.now();
    weekDay = now.weekdayShort,
    month = now.monthShort,
    day = now.day;
    if(day2Fetch) day = day + day2Fetch;
    if(day < 10) day = `0${day}`;
    let year = now.year,
    text = `${month} ${day}`;
    return text;
};

const padTo2Digits = num => num.toString().padStart(2, '0');
getTimeFromMS = (milliseconds = "") => {

    let seconds = Math.floor( milliseconds / 1000), // seconds
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60); 
        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
        minutes = minutes % 60;
        hours = hours % 24;

    
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    
};


getUVICategory = uvi => {
    if(uvi >= 0 && uvi <= 2) return 'Minimal'
    if(uvi > 2 && uvi <= 4) return 'Low'
    if(uvi > 4 && uvi <= 6) return 'Moderate'
    if(uvi > 6 && uvi <= 9) return 'High'
    if(uvi > 9) return 'Very High'
}

const NoDecimalPoint = number => `${(Math.round(number * 100)/100).toFixed(0)}`;

const firstLetterUpperCase = string => {
    let theString = string.split(''),
        firstLetter = theString[0].toUpperCase(),
        restofString = theString.slice(1).join(''),
        result = `${firstLetter}${restofString}`;
    return result;
}

const toggleSearchBarAndArrow = ()=> {
    // element.style.display == 'none' ? element.style.display = 'flex' : element.style.display = 'none';
    if(searchInputContainer.style.display == 'none') searchInputContainer.style.display = 'flex'
    else searchInputContainer.style.display = 'none'; 
}

const getArrowButton = async element => {
    await element;
    const arrowBtn = document.querySelector(`.${element}`);

    window.addEventListener('resize', () => {
        if(window.outerWidth < 1200) {
            arrowBtn.addEventListener('click',toggleSearchBarAndArrow); 
            searchInputContainer.style.display = 'none';
        }  

        if(window.outerWidth >= 1200) {
            arrowBtn.removeEventListener('click', toggleSearchBarAndArrow);
            searchInputContainer.style.display = 'flex';
        }
    })

    if(window.outerWidth < 1200) {
        arrowBtn.addEventListener('click',toggleSearchBarAndArrow);
    }
    if(window.outerWidth >= 1200) {
        arrowBtn.removeEventListener('click', toggleSearchBarAndArrow);
        searchInputContainer.style.display = 'flex';
    }

    window.addEventListener('click', e => {
        if(window.outerWidth < 1200){
            if(e.target.localName == "input" || e.target.outerHTML == `<img src="\assets/images/arrow-down.svg\">` ) return;
            if(searchInputContainer.style.display == 'flex') searchInputContainer.style.display = 'none';
        }   
    })
}

const toggleNextFive = (firstTwoCards,text,list) => {
    for(let i = 0; i < list.length; i++){
        let result = list[i].classList.toggle('hidden');
        if(!result){
            console.log('not result'); // everythin not hidden
            text.textContent = `Show 2 days`;
            list[i].style.padding = `10px 0 10px 0`;
            
        }
        else{
            console.log('is result'); // everythin hidden
            text.textContent = `Next 5 days`;
        }
    }

    for(let i = 0; i <= 1; i++ ){
        if(list[i].classList.contains('hidden')){
            return;
        }
        else{
            firstTwoCards[i].style.margin = `10px 0 10px 0`;
            firstTwoCards[i].style.padding = `10px 0 10px 0`;
        }
    }
}

const showNextFive = async (element1,element2,element3, element4) => {
    await element1;
    const nextFiveButton = document.querySelector(`.${element1}`),
          buttonText = document.querySelector(`.${element2}`)
          dailyPredictionCards = document.querySelectorAll(`.${element3}`),
          originalPredictionCards = document.querySelectorAll(`.${element4}`)
    nextFiveButton.addEventListener('click', () => toggleNextFive(originalPredictionCards,buttonText,dailyPredictionCards));

}

const renderCards = function(dataOne = "", dataTwo = "", location = '') {
    let unit;
    if(main.classList.contains('fahrenheit')) unit = 'F';
    else unit = 'C';

    convertAirQualityIndex(dataTwo.list[0].main.aqi);
    getArrowButton('arrow');
    showNextFive('next5-btn','prediction-button__text-container','prediction-card__content', 'prediction-card--og');
    const cardOne = `
        <section class='content-container'>
            <section class='card-header--container'>
                <div class='card-header--logo-container'><img src=${cloudySunIconImg}></div>
                <div class='card-header--text-container'>
                    <div class='card-header--heading'><h1>Weather</h1></div>
                    <div class='card-header--description'><p>What's the weather.</p></div>
                </div>
            </section>
            <section class='card-body--container'>
                <div class='card-body--heading'><h1>${NoDecimalPoint(dataOne.current.temp)}°<span class='unit-type fahrenheit'>${unit}</span></h1></div>
                <div class='card-body--temp-description'><p>${dataOne.current.weather[0].description}</p></div>
            </section>
            <section class='card-footer--container'>
                <div class='card-footer--item1-container card-footer--item-container'>
                    <div class='card-footer--content-container'>
                        <div class='footer-item--heading'><h1 class='data-text__heading data--pressure_heading'>Pressure</h1></div>
                        <div class='footer-item--description'><p class='data-text__description data--pressure_description'>${dataOne.current.pressure} inHG</p></div>
                    </div>
                </div>
                <div class='card-footer--item2-container card-footer--item-container'>
                    <div class='card-footer--content-container'>
                        <div class='footer-item--heading'><h1 class='data-text__heading data--visibility_heading'>Visibility</h1></div>
                        <div class='footer-item--description'><p class='data-text__description data--visibility_description'>${dataOne.current.visibility} mi</p></div>
                    </div>
                </div>
                <div class='card-footer--item3-container card-footer--item-container'>
                    <div class='card-footer--content-container'>
                        <div class='footer-item--heading'><h1 class='data--humidity__heading'>Humidity</h1></div>
                        <div class='footer-item--description'><p class='data-text__description data--humidity_description'>${dataOne.current.humidity}%</p></div>
                    </div>
                </div>
            </section>
        </section>
    `;

    const cardTwo = `
    <section class='content-container card2--content-container'>
        <section class='card-header--container aqi-card-header__container'>
            <div class='card-header--logo-container aqi-card-header--logo__container'><img src='${airQualityIconImg}'></div>
            <div class='card-header--text-container'>
                <div class='card-header--heading aqi-card--header__heading-container'><h1>Air Quality</h1></div>
                <div class='card-header--description aqi-card--header__description-container'><p>Main Pollution - PM 2.5: ${dataTwo.list[0].components.pm2_5}</p></div>
            </div>
        </section>
        <section class='card-body--container aqi-card-body__container'>
            <div class='card-body--heading aqi-card-body__heading'><h1>${dataOne.current.wind_deg}</h1></div>
            <div class='card-body--description aqi-card-body__description'><p>${getWindDirection(dataOne.current.wind_deg)} Wind</p></div>
        </section>
        <section class='card-footer--container aqi-card-footer__container'>
            <section class='aqi-progress__container'>
                <div class="aqi-text__container">
                    <div class="aqi-text--good aqi-text">Good</div>
                    <div class="aqi-text--standard aqi-text">Standard</div>
                    <div class="aqi-text--hazardous aqi-text">Hazardous</div>
                </div>
                <div class="aqi-tooltip__container">
                    <div class='tool-tip__content-container'>
                        <div class="aqi-tooltip--good aqi-tooltip hidden"></div>
                        <div class="aqi-tooltip--standard aqi-tooltip hidden"></div>
                        <div class="aqi-tooltip--hazardous aqi-tooltip hidden"></div>
                    </div>
                </div>
                <div class='aqi-progress__bar'>
                    <div class='aqi-progress__background'></div>
                </div>
            </section>
        </section>
    </section>
    `

    const weatherToday = `
    <section class='weather-today--content-container'>
        <section class='weather-today-heading-container'>
            <h1>How's the temperature today?</h1>
        </section>
        <section class='weather-today--data-content'>
            <section class='weather-today__time--period weather-today__morning'>
                    <div class='weather-today__logo-container'><img src='${getWeatherIcon(dataOne.hourly[5].weather[0].icon)}'></div>
                    <div>            
                        <div class='weather-today__degree-container'><p>${NoDecimalPoint(dataOne.daily[0].temp.morn)}°</p></div>
                        <div class='weather-today__time-period'>Morning</div>
                    </div>
            </section>
            <hr>
            <section class='weather-today__time--period weather-today__afternoon'>
                    <div class='weather-today__logo-container'><img src='${getWeatherIcon(dataOne.hourly[12].weather[0].icon)}'></div>
                    <div>            
                        <div class='weather-today__degree-container'><p>${NoDecimalPoint(dataOne.daily[0].temp.day)}°</p></div>
                        <div class='weather-today__time-period'>Afternoon</div>
                    </div>
            </section>
            <hr>
            <section class='weather-today__time--period weather-today__evening'>
                <div class='weather-today__logo-container'><img src='${getWeatherIcon(dataOne.hourly[17].weather[0].icon)}'></div>
                <div>            
                    <div class='weather-today__degree-container'><p>${NoDecimalPoint(dataOne.daily[0].temp.eve)}°</p></div>
                    <div class='weather-today__time-period'>Evening</div>
                </div>
            </section>
            <hr>
            <section class='weather-today__time--period weather-today__night'>
                <div class='weather-today__logo-container'><img src='${getWeatherIcon(dataOne.hourly[5].weather[0].icon)}'></div>
                <div>            
                    <div class='weather-today__degree-container'><p>${NoDecimalPoint(dataOne.daily[0].temp.night)}°</p></div>
                    <div class='weather-today__time-period'>Night</div>
                </div>
            </section>     
            <hr>

        </section>
    </section>
    ` 

    const side = `
    <section class='side__container'>
        <section class='side__header--container'>
            <div class='side__header--date-location--container'>
                <div class='side__header--date--container'><p class='side__header--date'>${getDate()}</p></div>
                <div class='side__header--location--container'><p class='side__header--location'>${location} <span class='arrow'><img src='assets/images/arrow-down.svg'></span></p></div>
            </div>
            <div class='side__header__degree--container'><p class='side__header--degree'>${NoDecimalPoint(dataOne.current.temp)}°</p><span class='unit-type fahrenheit'>${unit}</span></div>
        </section>
        <hr class='side__header__divider'>
        <section class='side--body-sun__container'>
            <div class='side__body--sun-image--container'><img src='assets/images/sunset-dial.svg'></div>
            <div class='side__body--sunset-sundown--container'>
                <div class='side__sunset-sundown--heading'>
                    <div><p>Sunset</p></div>
                    <div><p>Sunrise</p></div>
                </div>

                <div class='side__sunset-sundown--time'>
                    <div><p>${getTimeFromMS(dataOne.current.sunrise)} am</p></div>
                    <div></p>${getTimeFromMS(dataOne.current.sunset)} pm</p></div>
                </div>
            </div>
        </section>
        <section class='side--body-card__container'>
            <div class='side--body-uvi-card__container'>
                <div class='uvi-card__logo--container'>
                    <img src='assets/images/uvi-logo.svg'>
                </div>
                <div class='uvi-card__description--container'>
                    <div class='uvi-card__description--heading__container'>
                        <div><p>${dataOne.current.uvi} UVI</p></div>
                        <div><p>${getUVICategory(dataOne.current.uvi)}</p></div>
                    </div>
                    <div class='uvi-card__description--sub-heading__container'><p>${getUVICategory(dataOne.current.uvi)} risk from UV rays</p></div>
                </div>
            </div>
        </section>
        <section class='side--footer-prediction__container'>
            <section class='side--footer--section__heading'>
                <div class='side--footer--heading__container'><p>Weather Prediction</p></div>
            </section>
            <section class='side--footer--prediction-cards__container'>
                <div class='prediction-card__container prediction-card--one prediction-card--og'>
                    <div class='prediction-card__weather-logo__container'>
                        <img src='${getWeatherIcon(dataOne.daily[1].weather[0].icon)}'>
                    </div>
                    <div class='prediction-card__weather-description__container'>
                        <div class='prediction-card__weather-date__container'>
                            <p>${getDates(1)}</p>
                        </div>
                        <div class='prediction-card__weather-description-para__container'>
                            <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[1].weather[0].description)}</p></div>
                            <div class='prediction-card__degrees__container'>
                                <p><span>${NoDecimalPoint(dataOne.daily[1].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[1].temp.max)}</span>°</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-card__container prediction-card--two prediction-card--og'>
                    <div class='prediction-card__weather-logo__container'>
                        <img src='${getWeatherIcon(dataOne.daily[2].weather[0].icon)}'>
                    </div>
                    <div class='prediction-card__weather-description__container'>
                        <div class='prediction-card__weather-date__container'>
                            <p>${getDates(2)}</p>
                        </div>
                        <div class='prediction-card__weather-description-para__container'>
                            <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[2].weather[0].description)}</p></div>
                            <div class='prediction-card__degrees__container'>
                                <p><span>${NoDecimalPoint(dataOne.daily[2].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[2].temp.max)}</span>°</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='prediction-card__content hidden'>
                    <div class='prediction-card__container prediction-card--three hidden'>
                        <div class='prediction-card__weather-logo__container'>
                            <img src='${getWeatherIcon(dataOne.daily[3].weather[0].icon)}'>
                        </div>
                        <div class='prediction-card__weather-description__container'>
                            <div class='prediction-card__weather-date__container'>
                                <p>${getDates(3)}</p>
                            </div>
                            <div class='prediction-card__weather-description-para__container'>
                                <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[3].weather[0].description)}</p></div>
                                <div class='prediction-card__degrees__container'>
                                    <p><span>${NoDecimalPoint(dataOne.daily[3].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[3].temp.max)}</span>°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-card__content hidden'>
                    <div class='prediction-card__container prediction-card--four hidden'>
                        <div class='prediction-card__weather-logo__container'>
                            <img src='${getWeatherIcon(dataOne.daily[4].weather[0].icon)}'>
                        </div>
                        <div class='prediction-card__weather-description__container'>
                            <div class='prediction-card__weather-date__container'>
                                <p>${getDates(4)}</p>
                            </div>
                            <div class='prediction-card__weather-description-para__container'>
                                <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[4].weather[0].description)}</p></div>
                                <div class='prediction-card__degrees__container'>
                                    <p><span>${NoDecimalPoint(dataOne.daily[4].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[4].temp.max)}</span>°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-card__content hidden'>
                    <div class='prediction-card__container prediction-card--five hidden'>
                        <div class='prediction-card__weather-logo__container'>
                            <img src='${getWeatherIcon(dataOne.daily[5].weather[0].icon)}'>
                        </div>
                        <div class='prediction-card__weather-description__container'>
                            <div class='prediction-card__weather-date__container'>
                                <p>${getDates(5)}</p>
                            </div>
                            <div class='prediction-card__weather-description-para__container'>
                                <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[5].weather[0].description)}</p></div>
                                <div class='prediction-card__degrees__container'>
                                    <p><span>${NoDecimalPoint(dataOne.daily[5].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[5].temp.max)}</span>°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-card__content hidden'>
                    <div class='prediction-card__container prediction-card--six hidden'>
                        <div class='prediction-card__weather-logo__container'>
                            <img src='${getWeatherIcon(dataOne.daily[6].weather[0].icon)}'>
                        </div>
                        <div class='prediction-card__weather-description__container'>
                            <div class='prediction-card__weather-date__container'>
                                <p>${getDates(6)}</p>
                            </div>
                            <div class='prediction-card__weather-description-para__container'>
                                <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[6].weather[0].description)}</p></div>
                                <div class='prediction-card__degrees__container'>
                                    <p><span>${NoDecimalPoint(dataOne.daily[6].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[6].temp.max)}</span>°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-card__content hidden'>
                    <div class='prediction-card__container prediction-card--seven'>
                        <div class='prediction-card__weather-logo__container'>
                            <img src='${getWeatherIcon(dataOne.daily[7].weather[0].icon)}'>
                        </div>
                        <div class='prediction-card__weather-description__container'>
                            <div class='prediction-card__weather-date__container'>
                                <p>${getDates(7)}</p>
                            </div>
                            <div class='prediction-card__weather-description-para__container'>
                                <div class='prediction-card__clouds__container'><p>${firstLetterUpperCase(dataOne.daily[7].weather[0].description)}</p></div>
                                <div class='prediction-card__degrees__container'>
                                    <p><span>${NoDecimalPoint(dataOne.daily[7].temp.min)}</span>° / <span>${NoDecimalPoint(dataOne.daily[7].temp.max)}</span>°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='prediction-button__parent'>
                <div class='prediction-button__container next5-btn'>
                    <div class='prediction-button__content-container'>
                        <div class='prediction-button__logo-container'>
                            <img src='assets/images/calender-logo.svg'>
                        </div>
                        <div class='prediction-button__text-container'>
                            <p>Next 5 days</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    </section>
    `

    currentWeatherCard.innerHTML = cardOne;
    airQualityCard.innerHTML = cardTwo;
    weatherTodaySection.innerHTML = weatherToday;
    sideSection_Mobile.innerHTML = side;
}

//input types
searchInput.type = 'text';
buttonInput.type = 'button';
//input placeholder

searchInput.placeholder = 'Search city, state or zipcode';

form.append(searchInputContainer, unitToggleContainer);
searchInputContainer.append(searchInput, buttonInput);
formContainer.append(form);
dashboardSection.append(currentWeatherCard,airQualityCard, weatherTodaySection);
weatherDetailContainer.append(sideSection_Mobile, dashboardSection)
main.append(formContainer,weatherDetailContainer);
body.append(main);

//class lists
main.classList.add('main', 'fahrenheit');
body.classList.add('body');
searchInputContainer.classList.add('searchbar--container');
searchInput.classList.add('searchbar--input');
buttonInput.classList.add('searchbar--button');


const getUnits = element => {
    let unitToFetch;
    if(element.classList.contains('fahrenheit')) unitToFetch = 'imperial';
    else unitToFetch = 'metric';
    return unitToFetch;
} 

const saveSearchValue = () => searchInput.value;

const getLocationByName = async (cityName = '', stateCode = '', countryCode = '',part = '', units = '') => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${myAPI_KEY}`),
          [responseData] = await response.json(),
          locationLat = responseData.lat,
          locationLon = responseData.lon,
          locationName = `${responseData.name}`;
          
    console.log(responseData);// get country city and statename from here

    units = getUnits(main);

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${locationLat}&lon=${locationLon}&exclude=${part}&units=${units}&appid=${myAPI_KEY}`),
          weatherResponseData = await weatherResponse.json();
          console.log(weatherResponseData); // weather data from here

    const AQIResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${locationLat}&lon=${locationLon}&units=${units}&appid=${myAPI_KEY}`);
    const AQIResponseData = await AQIResponse.json();
          console.log(AQIResponseData);
          renderCards(weatherResponseData, AQIResponseData, locationName);
    
}

const getLocationByZipCode = async(zipCode='', countryCode = '', part='', units = '') => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${myAPI_KEY}`),
          responseData = await response.json(),
          locationLat = responseData.coord.lat,
          locationLon = responseData.coord.lon,
          locationName = responseData.name;
          console.log(responseData);
          units = getUnits(main);

    const updatedWeatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${locationLat}&lon=${locationLon}&exclude=${part}&units=${units}&appid=${myAPI_KEY}`),
          updatedWeatherResponseData = await updatedWeatherResponse.json();
          console.log(updatedWeatherResponseData);

    const AQIResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${locationLat}&lon=${locationLon}&units=${units}&appid=${myAPI_KEY}`),
          AQIResponseData = await AQIResponse.json();
          console.log(AQIResponseData);
          renderCards(updatedWeatherResponseData, AQIResponseData, locationName);
          
}

let inputValue;
let numberChecker = /^[0-9]*$/gm
formContainer.addEventListener('keypress', key => {
    if(key.code === 'Enter'){
        key.preventDefault();
        if(searchInput.value.match(numberChecker) ){

            getLocationByZipCode(searchInput.value);
            inputValue = searchInput.value;
        }
        else{

            getLocationByName(searchInput.value);
            inputValue = searchInput.value
        }
    }
})

buttonInput.addEventListener('click', e => {
    if (searchInput.value.match(numberChecker)){
        console.log(`search location by zipcode: ${searchInput.value}`)
        getLocationByZipCode(searchInput.value);
        inputValue = searchInput.value
    }
    else{
        console.log(`search location by name: ${searchInput.value}`)
        getLocationByName(searchInput.value);
        inputValue = searchInput.value
    }
});

const updateUnitIcon = () => {
    let result = main.classList.toggle('fahrenheit');
    if(!result){
        main.classList.add('celsius')
        celsiusIcon.classList.remove('hidden');
        fahrenheitIcon.classList.add('hidden');

    }
    else{
        main.classList.remove('celsius');
        fahrenheitIcon.classList.remove('hidden');
        celsiusIcon.classList.add('hidden');
    }
}

const updateUnitData = value => {
    if(value === undefined) {
        getLocationByName('new york');
    } 

    if(value){
        if(value.match(numberChecker)){
            getLocationByZipCode(value);
        }

        else{
            getLocationByName(value);
        }
    }
}

unitChangeButton.addEventListener('click', e => {
    e.preventDefault();
    updateUnitIcon();
    updateUnitData(inputValue);
})

document.onload = getLocationByName('new york')
