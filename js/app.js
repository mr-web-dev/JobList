/* search start */
let searchInp = document.querySelector('#search-inp');
let card = document.querySelectorAll('.card');
let cardLevel = document.querySelectorAll('.card__level');

searchInp.addEventListener('input', function(){
    let a = searchInp.value.toLowerCase();
    for(let i = 0; i < cardLevel.length; i++){
        const element = cardLevel[i];
        if (searchInp.value == "") {
            card[i].classList.remove('card-hidden');
        } else {
            if (element.innerText.toLowerCase().indexOf(a) > -1) {
                card[i].classList.remove('card-hidden');
            } else {
                card[i].classList.add('card-hidden');
            };
        }
    };
});
/* search end */

/* clear start */
let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
    searchInp.value = "";
});
/* clear end */

/* form start */
let form = document.querySelector('#main-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
});
/* form end */