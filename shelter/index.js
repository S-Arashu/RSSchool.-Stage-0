'use strict';

let path = './pets.json';

function random(arr) {
    arr.sort(() => Math.random() - 0.5);
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }
}

    let bt_l = document.querySelector('.arrow-left');
    let bt_r = document.querySelectorAll('.arrow-right')[0];
    let wrapper = document.querySelector('.our-friends-carousel');
    let wrapperForSlider = document.querySelector('.our-friends-new-block');
    

    let count = 0;
    let numOfClick_l = 0;
    let numOfClick_r = 0;

fetch(path)
.then(response => response.json())
.then(petsInfo => {
    let sliderBlock = [];

    let numOfPet_check = [];
    let listOfCard;
    let comp = [];
    let cards_active = [];
        listOfCard = random(petsInfo);
    repeat: for (let k = 0; k<3; k++){
        let petCard = document.createElement('div');
        
        let p = Math.floor(Math.random() * 6);
        if(comp.includes(p) || comp.includes(p+1) || comp.includes(p+2)){
            k--
            continue repeat
        }
        comp.push(p);
        numOfPet_check.push(p)
        sliderBlock.push(p);
        console.log(comp)
        console.log(numOfPet_check)
        petCard.classList.add('our-pets-items');
        wrapper.prepend(petCard);
        petCard.innerHTML = `
                            <a class="our-friends-card-link" href="#">
                                <div class="our-friends-card">
                                    <p class="id">${listOfCard[comp[k]].id}</p>
                                    <img src=${listOfCard[comp[k]].img} alt=${listOfCard[comp[k]].name} class="card-img">
                                    <p class="card-title">${listOfCard[comp[k]].name}</p>
                                    <div class="card-button"><span class="card-button-link">Learn more</span></div>
                                </div>
                            </a>
                            <a class="our-friends-card-link" href="#">
                                <div class="our-friends-card">
                                    <p class="id">${listOfCard[comp[k]+1].id}</p>
                                    <img src=${listOfCard[comp[k]+1].img} alt=${listOfCard[comp[k]+1].name} class="card-img">
                                    <p class="card-title">${listOfCard[comp[k]+1].name}</p>
                                    <div class="card-button"><span class="card-button-link">Learn more</span></div>
                                </div>
                            </a>
                            <a class="our-friends-card-link" href="#">
                                <div class="our-friends-card">
                                    <p class="id">${listOfCard[comp[k]+2].id}</p>
                                    <img src=${listOfCard[comp[k]+2].img} alt=${listOfCard[comp[k]+2].name} class="card-img">
                                    <p class="card-title">${listOfCard[comp[k]+2].name}</p>
                                    <div class="card-button"><span class="card-button-link">Learn more</span></div>
                                </div>
                            </a>
        `
    }
    bt_l.addEventListener('click', function(event){
    sliderBlock.length = 0;
        let elem = this.nextElementSibling.children[0].children[0].children;
        for (let item of elem){
            sliderBlock.push(+item.children[0].children[0].innerHTML);
        }
    })


    let createSlider = () => {
        let petCard = document.createElement('a');
        petCard.classList.add('our-friends-card-link');
        petCard.setAttribute('href', '#');
        return petCard;
    }    
let pets = document.querySelectorAll('.our-pets-items')[1];
let pets_prev = document.querySelectorAll('.our-pets-items')[0];
let pets_next = document.querySelectorAll('.our-pets-items')[2];
let pets_1;
let pets_2;
let pets_3;
        pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
        pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
        pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
let pets_1_active = pets.children[0].children[0].children[0].innerHTML;
let pets_2_active = pets.children[1].children[0].children[0].innerHTML;
let pets_3_active = pets.children[2].children[0].children[0].innerHTML;

let petsState;
let numOfPet;
let id;
let numOfPet_after = [];

let moveLeft = () => {
    cards_active.length = 0;
    pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
    pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
    pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
    pets_1_active = pets.children[0].children[0].children[0].innerHTML;
    pets_2_active = pets.children[1].children[0].children[0].innerHTML;
    pets_3_active = pets.children[2].children[0].children[0].innerHTML;
    cards_active.push(+pets_1);
    cards_active.push(+pets_2);
    cards_active.push(+pets_3);

    numOfClick_l++;
    wrapper.classList.add("transition-left");
    bt_l.removeEventListener("click", moveLeft);
    bt_r.removeEventListener("click", moveRight);
    if(numOfClick_l < 2){
        pets_prev.innerHTML = petsState || pets_prev.innerHTML;
        numOfClick_r = 0;

    }
};

let moveRight = () => {
    cards_active.length = 0;
    pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
    pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
    pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
    pets_1_active = pets.children[0].children[0].children[0].innerHTML;
    pets_2_active = pets.children[1].children[0].children[0].innerHTML;
    pets_3_active = pets.children[2].children[0].children[0].innerHTML;
    cards_active.push(+pets_1);
    cards_active.push(+pets_2);
    cards_active.push(+pets_3);
    numOfClick_r++;
    wrapper.classList.add("transition-right");
    bt_l.removeEventListener("click", moveLeft);
    bt_r.removeEventListener("click", moveRight);
    if(numOfClick_r < 2){
        pets_next.innerHTML = petsState || pets_next.innerHTML;
        numOfClick_l = 0;
    };
};

bt_l.addEventListener("click", moveLeft);
bt_r.addEventListener("click", moveRight);

wrapper.addEventListener("animationend", (animationEvent) => {
    
    let numOfPet_check_aside = [];
    let changedItem;
    if (animationEvent.animationName === "move-left") {
    wrapper.classList.remove("transition-left");
    changedItem = pets_prev;
    petsState = pets.innerHTML;
    pets.innerHTML = pets_prev.innerHTML;
    id = document.querySelectorAll('.id');
        numOfPet_check_aside.length = 0;
        if(numOfPet_check.length == 6){
        numOfPet_check.splice(0,3);
    }
        numOfPet_after.length = 0;
        numOfPet_check_aside.push(+id[0].innerHTML);
        numOfPet_check_aside.push(+id[1].innerHTML);
        numOfPet_check_aside.push(+id[2].innerHTML);
    } else {
    wrapper.classList.remove("transition-right");
    changedItem = pets_next;
    petsState = pets.innerHTML;

    pets.innerHTML = pets_next.innerHTML;
    
    id = document.querySelectorAll('.id');
        numOfPet_check_aside.length = 0;
        if(numOfPet_check.length == 6){
        numOfPet_check.splice(0,3);
    }
        numOfPet_after.length = 0;
        numOfPet_check_aside.push(+id[6].innerHTML);
        numOfPet_check_aside.push(+id[7].innerHTML);
        numOfPet_check_aside.push(+id[8].innerHTML);
    }

    changedItem.innerHTML = "";

check:    for (let i = 0; i < 3; i++) {
    let card = createSlider();

    numOfPet = Math.floor(Math.random() * 8);

        if(numOfPet_check.includes(numOfPet)){
        i--;
        continue check;
    }

    numOfPet_check.push(numOfPet);
    
    card.innerHTML = `
                    <div class="our-friends-card">
                        <p class="id">${listOfCard[numOfPet].id}</p>
                        <img src=${listOfCard[numOfPet].img} alt=${listOfCard[numOfPet].name} class="card-img">
                        <p class="card-title">${listOfCard[numOfPet].name}</p>
                        <div class="card-button"><span class="card-button-link">Learn more</span></div>
                    </div>
    `;
    
    changedItem.appendChild(card);

let itemDelete = document.querySelectorAll('.our-pets-items');
        if(body.offsetWidth > 1099){
            itemDelete[1].lastElementChild.classList.remove('delete');
        }
        if(body.offsetWidth >= 768 && body.offsetWidth <= 1099){
            itemDelete[1].lastElementChild.classList.add('delete');
        console.dir(itemDelete[0].children)
    }
    if(body.offsetWidth < 768){
        itemDelete[1].lastElementChild.classList.add('delete');
            itemDelete[1].children[1].classList.add('delete');
        console.dir(itemDelete[0].children)
    }
    }

    bt_l.addEventListener("click", moveLeft);
    bt_r.addEventListener("click", moveRight);
})
});


// burger

let body = document.querySelector('body');
let modal = document.getElementsByClassName('modal_window');
let hamb = document.querySelectorAll('.hamb');
let hambPets = document.querySelectorAll('.hamb-pets');
let menu = document.getElementById('menu');
let wraper = document.createElement('div');
wraper.classList.add('dark-block');
menu.onclick = open;
function open (){

        let div = document.createElement('div');
        div.classList.add('modal_window');
        div.setAttribute('id', 'modal_menu');

        if(hamb.length != 0){
        div.innerHTML = `
        <ul class="header-item-modal">
            <li class="nav-item modal-item nav-item-active""><a href="#" class="nav-link modal">About the shelter</a></li>
            <li class="nav-item modal-item"><a href="./Pages/Our-pets-page.html" class="nav-link modal">Our pets</a></li>
            <li class="nav-item modal-item"><a href="#help" class="nav-link modal">Help the shelter</a></li>
            <li class="nav-item modal-item"><a href="#footer" class="nav-link modal">Contacts</a></li>
        </ul>
        `
        div.style.cssText = `
        width: 320px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: -320px;
        background-color: #292929;
        animation: open 1s ease-in forwards;
        z-index: 2;
        `
        } else if (hambPets.length != 0){
        div.innerHTML = `
        <ul class="header-item-modal">
            <li class="nav-item modal-item"><a href="../index.html" class="nav-link modal">About the shelter</a></li>
            <li class="nav-item modal-item nav-item-active"><a href="#" class="nav-link modal">Our pets</a></li>
            <li class="nav-item modal-item"><a href="../index.html#help" class="nav-link modal">Help the shelter</a></li>
            <li class="nav-item modal-item"><a href="#footer" class="nav-link modal">Contacts</a></li>
        </ul>
        `
        div.style.cssText = `
        width: 320px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: -320px;
        background-color: rgb(255 249 245);
        animation: open 1s ease-in forwards;
        z-index: 2;
        `
        }
        
    if(modal.length == 0){

        document.body.style.overflow = "hidden";

        body.prepend(div);
        body.prepend(wraper);

        let nav = document.querySelectorAll('.modal');
        let modal_menu = document.querySelector('.header-item-modal');
        let item = document.querySelectorAll('.modal-item');
        
        modal_menu.style.cssText = `
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        padding: 0;
        justify-content: center;
        gap: 40px;
        `

        for(let str of nav){
            str.style.cssText = `
            margin-right: 0;
            font-size: 32px;
            line-height: 160%;
            font-weight: 400;
            `
            if (hambPets.length != 0){
                str.style.color = 'rgb(0 0 0)';
            }
        }

        for(let link of item){
            link.style.cssText = `
            margin-right: 0;
            `
        }


        menu.style.cssText = `
        margin: 0;
        padding: 11% 0 11% 0;
        `

        if(hamb.length != 0){
            hamb[2].style.transform = 'rotate(90deg) translate(-10px, 10px)';
            hamb[1].style.transform = 'rotate(90deg) translate(0px, -10px)';
            hamb[0].style.transform = 'rotate(90deg) translateX(10px)';
        } else if (hambPets.length != 0){
            hambPets[2].style.transform = 'rotate(90deg) translate(-10px, 10px)';
            hambPets[1].style.transform = 'rotate(90deg) translate(0px, -10px)';
            hambPets[0].style.transform = 'rotate(90deg) translateX(10px)';
        }
        
    } else if (modal.length != 0) {
        animation_close ()
    }
};

function animation_close (){
    document.body.style.overflow = "";
    wraper.remove();
    modal[0].style.animation = 'close 1s ease-in forwards';
    if(hamb.length != 0){
            hamb[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
            hamb[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
            hamb[0].style.transform = 'rotate(180deg) translateX(0px)';
    } else if (hambPets.length != 0){
            hambPets[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
            hambPets[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
            hambPets[0].style.transform = 'rotate(180deg) translateX(0px)';
    }

        setTimeout(() => modal[0].remove(), 1000);
}

body.onclick = function (event){
    let target = event.target;
    if (modal.length != 0) {
        if (target.id !== 'menu' && target.tagName !== 'UL' && target.tagName !== 'SPAN'){
        animation_close ();
        }
    }
}

addEventListener("resize", (event) => {
    if(body.offsetWidth > 767 && modal.length != 0){
    wraper.remove();
    modal[0].style.animation = 'close 0.3s ease-in forwards';
    if(hamb.length != 0){
        hamb[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
        hamb[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
        hamb[0].style.transform = 'rotate(180deg) translateX(0px)';
    } else if (hambPets.length != 0){
        hambPets[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
        hambPets[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
        hambPets[0].style.transform = 'rotate(180deg) translateX(0px)';
    }

    setTimeout(() => modal[0].remove(), 300);
}
});

// slider Main





// console.log(`
//     Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
//         блок <header>: +2
//         блок Not only: +2
//         блок About: +2
//         блок Our Friends: +2
//         блок Help: +2
//         блок In addition: +2
//         блок <footer>: +2
//     Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
//         блок <header>: +2
//         блок Not only: +2
//         блок About: +2
//         блок Our Friends: +2
//         блок Help: +2
//         блок In addition: +2
//         блок <footer>: +2
//     Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
//         блок <header>: +2
//         блок Not only: +2
//         блок About: +2
//         блок Our Friends: +2
//         блок Help: +2
//         блок In addition: +2
//         блок <footer>: +2
//     Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
//         блок <header>: +2
//         блок Our Friends: +2
//         блок <footer>: +2
//     Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
//         блок <header>: +2
//         блок Our Friends: +2
//         блок <footer>: +2
//     Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
//         блок <header>: +2
//         блок Our Friends: +2
//         блок <footer>: +2
//     Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа       от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не    обрезается и не удаляется: +20
//         нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
//         нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5
//         нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5
//         нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5
//     Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под       этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга,    изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной     реализации): +8
//         на странице Main: +4
//         на странице Pets: +4
//     При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка       бургер-меню: +4
//         Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
//     Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.       w3.org/ : +8
// `)

// console.log(`
//     Реализация burger menu на обеих страницах: +26
//         при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
//         при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
//         высота адаптивного меню занимает всю высоту экрана: +2
//         при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство (оба варианта должны быть реализованы) адаптивное меню плавно скрывается, уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
//         бургер-иконка создана при помощи html+css, без использования изображений: +2
//         ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
//         при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
//         расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
//         область, свободная от бургер-меню, затемняется: +2
//         страница под бургер-меню не прокручивается: +4    

// Реализация слайдера-карусели на странице Main: +34
//     при нажатии на стрелки происходит переход к новому блоку элементов: +4
//         смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4
//         слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4
//         при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +3 (визуально прокручивается три и две на 320 и 768, по коду - 2 и 1)
//         каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
//         в текущем блоке слайда карточки с питомцами не повторяются: +4
//         в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +3 (пару раз проскакивают одинаковые)
//         сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4
//         при каждой перезагрузке страницы формируется новая последовательность карточек: +2
//         генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2
//     при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +3 (описано выше)
// `)
