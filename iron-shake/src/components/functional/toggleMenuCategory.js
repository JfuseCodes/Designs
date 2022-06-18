export default function toggleMenuCategory(mainElement, elementArray, itemArray) {
    document.onload = mainElement[0].classList.add('display-only');
    for(let i = 1; i < elementArray.length; i++)elementArray[i].classList.add('hidden');
    mainElement.forEach( element => {
        element.addEventListener('click', e => {
           itemArray.forEach( item => {
               if(e.target.textContent == item.category){
                for(let i = 0; i < elementArray.length; i++)elementArray[i].classList.add('hidden');
                   let categoryContainer = item.image.parentNode.parentNode.parentNode.parentNode;
                   categoryContainer.classList.remove('hidden');
               }
           })
        });
    });
};