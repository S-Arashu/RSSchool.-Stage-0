'use strict';

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
// `)
