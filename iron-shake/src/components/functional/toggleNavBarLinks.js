import variables from '../../Sass/variables.scss';

export default function displaySelectedLinkContent(list){
    list.forEach( item => {
        item.addEventListener('click', e => {
            for(let i = 0; i < list.length; i++) list[i].classList.remove('display-only');
            e.currentTarget.classList.add('display-only');
        });
    });
};