export default function setTextContent( list1, list2 ) {
    for(let i = 0; i <= list1.length - 1; i++){
        list1[i].textContent = list2[i];
        if(list1[0] && list2[0] == 'skip' ) continue;
    };
};