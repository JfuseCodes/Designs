import variables from '../../Sass/variables.scss';

export default function displayContent(mainElement, elementArray){
    for(let i = 1; i < elementArray.length; i++)elementArray[i].classList.add('hidden');
    mainElement.addEventListener('click', e => {
        if(e.target.classList.contains('display-only') && e.target.textContent == 'skip'){
            for(let i = 0; i <= elementArray.length - 1; i++) elementArray[i].classList.add('hidden');
            elementArray[0].classList.remove('hidden');
        }
        if(e.target.classList.contains('display-only') && e.target.textContent == 'About'){
            for(let i = 0; i <= elementArray.length - 1; i++) elementArray[i].classList.add('hidden');
            // elementArray[0].classList.add('hidden');
            elementArray[1].classList.remove('hidden');

            // elementArray[0].classList.add('slide-in-bottom');
        }
        if(e.target.classList.contains('display-only') && e.target.textContent == 'Location'){
            for(let i = 0; i <= elementArray.length - 1; i++) elementArray[i].classList.add('hidden');
            elementArray[2].classList.remove('hidden');
        }        
        if(e.target.classList.contains('display-only') && e.target.textContent == 'Menu'){
            for(let i = 0; i <= elementArray.length - 1; i++) elementArray[i].classList.add('hidden');
            elementArray[3].classList.remove('hidden');
        }        
        if(e.target.classList.contains('display-only') && e.target.textContent == 'Franchise'){
            for(let i = 0; i <= elementArray.length - 1; i++) elementArray[i].classList.add('hidden');
            elementArray[4].classList.remove('hidden');
        }        
    });
}