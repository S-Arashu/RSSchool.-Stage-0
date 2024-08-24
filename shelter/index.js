'use strict';

let body = document.querySelector('body');
let modal = document.getElementsByClassName('modal_window');
let hamb = document.querySelectorAll('.hamb');
let menu = document.getElementById('menu');
let wraper = document.createElement('div');
wraper.classList.add('dark-block');
menu.onclick = open;
function open (){

        let div = document.createElement('div');
        div.classList.add('modal_window');
        
        div.setAttribute('id', 'modal_menu');
        div.innerHTML = `
        <ul class="header-item-modal">
            <li class="nav-item modal-item nav-item-active"><a href="#" class="nav-link modal">About the shelter</a></li>
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
    if(modal.length == 0){

        document.body.style.overflow = "hidden";
        // document.body.style.filter = "brightness(0.3)";

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
        // modal_menu.style.height = `${body.offsetHeight + body.scrollTop}px`;

        for(let str of nav){
            str.style.cssText = `
            margin-right: 0;
            font-size: 32px;
            line-height: 160%;
            font-weight: 400;
            `
        }

        for(let link of item){
            link.style.cssText = `
            margin-right: 0;
            `
        }

        // for(let elem of hamb){
        //     elem.style.cssText = `
        //     transform: rotate(90deg);
        //     `
        // }

        menu.style.cssText = `
        margin: 0;
        padding: 11% 0 11% 0;
        `

        hamb[2].style.transform = 'rotate(90deg) translate(-10px, 10px)';
        hamb[1].style.transform = 'rotate(90deg) translate(0px, -10px)';
        hamb[0].style.transform = 'rotate(90deg) translateX(10px)';
        
    } else if (modal.length != 0) {
        animation_close ()
    }
};

function animation_close (){
    document.body.style.overflow = "";
    wraper.remove();
    modal[0].style.animation = 'close 1s ease-in forwards';
        hamb[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
        hamb[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
        hamb[0].style.transform = 'rotate(180deg) translateX(0px)';

        setTimeout(() => modal[0].remove(), 1000);
}

body.onclick = function (event){
    let target = event.target;
    console.log(target.tagName, this)
    if (modal.length != 0) {
        if (target.id !== 'menu' && target.tagName !== 'UL' && target.tagName !== 'SPAN'){
            console.log(target.tagName)
        animation_close ();
        }
        
    }
}

addEventListener("resize", (event) => {
    if(body.offsetWidth > 767 && modal.length != 0){
    wraper.remove();
    modal[0].style.animation = 'close 0.3s ease-in forwards';
        hamb[2].style.transform = 'rotate(180deg) translate(0px, 10px)';
        hamb[1].style.transform = 'rotate(180deg) translate(0px, -10px)';
        hamb[0].style.transform = 'rotate(180deg) translateX(0px)';

        setTimeout(() => modal[0].remove(), 300);
}
});


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
