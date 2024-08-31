'use strict';

let path = './pets.json';

// let response = await fetch(path);
// if(response.ok){
//     let petsInfo = await response.json();
//     console.log(petsInfo[1].breed)
// } else {
//     console.log("Ошибка HTTP: " + response.status);
// }

// function createArr(first, last) {
//   let num = first + Math.random() * (last + 1 - first);
//     return Math.floor(num);
// }

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
    // bt_r.addEventListener('click', () => count += 130);
    // bt_r.onclick = function(){
    //     for(let li of document.querySelectorAll('li')) {
    //     li.style.right = count +'px';
    // }
    // }
    
    // bt_l.addEventListener('click', () => count -= 130);
    // bt_l.onclick = function () {
    //     for(let li of document.querySelectorAll('li')) {
    //         li.style.right = count +'px';
    //     }
    
    // }
fetch(path)
.then(response => response.json())
.then(petsInfo => {
    let listOfCard;
    let comp = [5,0,3];
        listOfCard = random(petsInfo);
    repeat: for (let k = 0; k<3; k++){
        let petCard = document.createElement('div');
        
        // let p = Math.floor(Math.random() * 6);
        // if(comp.includes(p)){
        //     k--
        //     continue repeat
        // }
        // comp.push(p);
        console.log(comp)
        
        // console.dir(document.querySelectorAll('.our-pets items .our-friends-card-link'))
        // console.dir(listOfCard[3].id)
        // console.log(listOfCard[3])
        petCard.classList.add('our-pets-items');
        // petCard.setAttribute('href', '#');
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
        // console.dir(document.querySelectorAll('.our-pets-items'))


    }

    let createSlider = () => {
        // let petCard_new = document.createElement('a');
        // petCard_new.classList.add('our-friends-card-link');
        // petCard_new.setAttribute('href', '#');
        // wrapperForSlider.prepend(petCard_new);
        // petCard_new.innerHTML = `
        //     <div class="our-friends-card">
        //         <img src=${card.img} alt=${card.name} class="card-img">
        //         <p class="card-title">${card.name}</p>
        //         <div class="card-button"><span class="card-button-link">Learn more</span></div>
        //     </div>
        // `
        // console.dir(listOfCard.at(-1))
        // console.log(listOfCard[7])
        let petCard = document.createElement('a');
        petCard.classList.add('our-friends-card-link');
        petCard.setAttribute('href', '#');
        return petCard;
    }    
let pets = document.querySelectorAll('.our-pets-items')[1];
let pets_prev = document.querySelectorAll('.our-pets-items')[0];
let pets_next = document.querySelectorAll('.our-pets-items')[2];
// console.log(pets)
let pets_1;
let pets_2;
let pets_3;
        pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
        pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
        pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
let pets_1_active = pets.children[0].children[0].children[0].innerHTML;
let pets_2_active = pets.children[1].children[0].children[0].innerHTML;
let pets_3_active = pets.children[2].children[0].children[0].innerHTML;
// console.log(pets.children[0].children[0].children[0].innerHTML);        
// console.log(pets.children[1].children[0].children[0].innerHTML);
// console.log(pets.children[2].children[0].children[0].innerHTML);
// console.log(pets_1);        
// console.log(pets_2);
// console.log(pets_3);

let petsState;
// console.log(pets_1)
// console.log(pets_prev)
// console.log(pets_next)
// let itemLeft = document.querySelector("#item-left");
// let itemRight = document.querySelector("#item-right");

// const createCardTemplate = () => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     return card;
// }

let numOfPet;
let id;
let numOfPet_after = [];
let cards_active = [];

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
//     console.log(pets_1);
// console.log(pets_2);
// console.log(pets_3);
    // pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
    // console.log(pets_1)
    // id = document.querySelectorAll('.id')
    // numOfClick_r = 0;
    // numOfPet_check_aside.length = 0;
    numOfClick_l++;
    wrapper.classList.add("transition-left");
    bt_l.removeEventListener("click", moveLeft);
    bt_r.removeEventListener("click", moveRight);
    if(numOfClick_l < 2){
        // console.log(pets_prev)
        pets_prev.innerHTML = petsState || pets_prev.innerHTML;
        numOfClick_r = 0;

    }
    // numOfPet_check_aside.push(+id[0].innerHTML);
    //     numOfPet_check_aside.push(+id[1].innerHTML);
    //     numOfPet_check_aside.push(+id[2].innerHTML);
        // console.log(id)
};

let pets_active = [];

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
    console.log(cards_active);
//     // console.log(numOfPet_after.at(-1));
    console.log(pets_1);
console.log(pets_2);
console.log(pets_3);
console.log(pets_1_active);
console.log(pets_2_active);
console.log(pets_3_active);
    // numOfClick_l = 0;
    // numOfPet_check_aside.length = 0;
    // id = document.querySelectorAll('.id')
    numOfClick_r++;
    wrapper.classList.add("transition-right");
    bt_l.removeEventListener("click", moveLeft);
    bt_r.removeEventListener("click", moveRight);
    if(numOfClick_r < 2){
        // console.log(pets_next)
        pets_next.innerHTML = petsState || pets_next.innerHTML;
        numOfClick_l = 0;

    };
    
    // numOfPet_check_aside.push(+id[6].innerHTML);
    //     numOfPet_check_aside.push(+id[7].innerHTML);
    //     numOfPet_check_aside.push(+id[8].innerHTML);

    
};
let numOfPet_check = [3,5,7];
bt_l.addEventListener("click", moveLeft);
bt_r.addEventListener("click", moveRight);
// console.dir(pets_next.children[0].children[0].children[0].innerHTML)

wrapper.addEventListener("animationend", (animationEvent) => {
    // let petsState;
    
    let numOfPet_check_aside = [];
    let changedItem;
    // console.log(pets.innerHTML)
    if (animationEvent.animationName === "move-left") {
        // id = document.querySelectorAll('.id')
        // console.log(id)
        // console.log(numOfClick_l)
    wrapper.classList.remove("transition-left");
    changedItem = pets_prev;
    petsState = pets.innerHTML;
    // console.log(document.querySelectorAll('.our-pets-items'))
    // if(numOfClick_l < 2){
    //     console.log(numOfClick_l + "left")
    //     pets_prev.innerHTML = petsState;
    //     numOfClick_r = 0;

    // }
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
        console.log(numOfPet_check)
        // console.log(numOfClick_r)
        // id = document.querySelectorAll('.id')
        // pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
        // pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
        // pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
//         console.log(pets_1);
// console.log(pets_2);
// console.log(pets_3);
        
    // console.log(pets_1)
    wrapper.classList.remove("transition-right");
    changedItem = pets_next;
    // console.log(pets_next.innerHTML)
    petsState = pets.innerHTML;
        // console.log(numOfPet_after);
    //     if(numOfClick_r < 2){
    //     console.log(numOfClick_r + "right")
    //     pets_next.innerHTML = petsState;
    //     numOfClick_l = 0;

    // }

    pets.innerHTML = pets_next.innerHTML;
    
    id = document.querySelectorAll('.id');
        // console.log(id)
        numOfPet_check_aside.length = 0;
        if(numOfPet_check.length == 6){
        numOfPet_check.splice(0,3);
    }
        numOfPet_after.length = 0;
        numOfPet_check_aside.push(+id[6].innerHTML);
        numOfPet_check_aside.push(+id[7].innerHTML);
        numOfPet_check_aside.push(+id[8].innerHTML);
    }
    // if(numOfClick_l == 2 || numOfClick_r == 2){
    //     numOfPet_check_aside.length = 0;
    // }
    changedItem.innerHTML = "";
    // let id = document.querySelectorAll('.id');
    // let list = 
    // console.log(list_active[1].innerHTML)
    // check: for(let i=3; i<6; i++){
    //     for(let j=0; j<3; j++){
    //         if(list_active[i] == list_left[j]){
    //             id[j].innerHTML = j+1;
    //             console.log(id[j].innerHTML)
    //             break check
    //         }
    //     }
    // }
    // console.dir(pets_next.children[0].children[0].children[0].innerHTML)
    
    console.log(cards_active);
    // console.log(numOfPet_after.at(-1));
    console.log(pets_1);
console.log(pets_2);
console.log(pets_3);

//     let pets_1 = pets_next.children[0].children[0].children[0].innerHTML;
// let pets_2 = pets_next.children[1].children[0].children[0].innerHTML;
// let pets_3 = pets_next.children[2].children[0].children[0].innerHTML;
check:    for (let i = 0; i < 3; i++) {
    let card = createSlider();
    // console.log(numOfPet_check)
    // id = document.querySelectorAll('.id');
    // console.log(id)
    numOfPet = Math.floor(Math.random() * 8);
    console.log(cards_active);
    console.log(numOfPet)
    
    
// console.log(pets_2_after)
// console.log(pets_3_after)
        if(numOfPet_check.includes(numOfPet)){
        // numOfPet = Math.floor(Math.random() * 8);
        // || numOfPet_check_aside.includes(+pets_1_after) || numOfPet_check_aside.includes(+pets_2_after) || numOfPet_check_aside.includes(+pets_3_after)
        i--;
        continue check;
    }
// console.log(cards_active.includes(numOfPet));
    // if(cards_active.includes(numOfPet)){
    //     // pets_1_active = Math.floor(Math.random() * 8);
    //     // pets_2_active = Math.floor(Math.random() * 8);
    //     // pets_3_active = Math.floor(Math.random() * 8);
        
    //     // console.log(pets_2_active);
    //     // console.log(pets_3_active);
    //     i--;
    //     continue check;
    // }
//     console.log(numOfPet_check_aside.includes(+pets_1))
// console.log(numOfPet_check_aside.includes(+pets_2))
// console.log(numOfPet_check_aside.includes(+pets_3))
// console.log(numOfPet_check.includes(+pets_1))
// console.log(numOfPet_check.includes(+pets_2))
// console.log(numOfPet_check.includes(+pets_3))

// let pets_1 = pets.children[0].children[0].children[0].innerHTML;
// let pets_2 = pets.children[1].children[0].children[0].innerHTML;
// let pets_3 = pets.children[2].children[0].children[0].innerHTML;
// console.dir(pets_1)
// console.dir(pets_2)
// console.dir(pets_3)
    // for(let j=0; j<numOfPet_check_aside.length; i++){
    //     console.log(numOfPet_check)
    //     console.log(numOfPet_check_aside)
        // for(let j=0; j<numOfPet_check_aside.length; j++){
            // if(numOfPet_check_aside[0] == numOfPet || numOfPet_check_aside[1] == numOfPet || numOfPet_check_aside[2] == numOfPet){
            //     continue check;
            // }
        // }
    // }
    
    numOfPet_check.push(numOfPet);
    
    // console.log(numOfPet_check)
    // console.log(numOfPet_check_aside.join(''))

    // for(let i=0; i<numOfPet_check_aside.length; i++){
    //     console.log(numOfPet_check)
    //     console.log(numOfPet_check_aside)
    //     for(let j=0; j<numOfPet_check_aside.length; j++){
    //         if(numOfPet_check_aside[i] == numOfPet){
    //             continue check;
    //         }
    //     }
    // }
    // console.log(numOfPet);
    // console.log(numOfPet_check)
    //     console.log(numOfPet_check_aside)
    card.innerHTML = `
                    <div class="our-friends-card">
                        <p class="id">${listOfCard[numOfPet].id}</p>
                        <img src=${listOfCard[numOfPet].img} alt=${listOfCard[numOfPet].name} class="card-img">
                        <p class="card-title">${listOfCard[numOfPet].name}</p>
                        <div class="card-button"><span class="card-button-link">Learn more</span></div>
                    </div>
    `;


    
    changedItem.appendChild(card);
    // console.log(listOfCard[numOfPet].id, listOfCard[numOfPet].name)
    // console.log(card)
    }

//     check:    for (let i = 0; i < 3; i++) {
//     let card = createSlider();
    console.log(numOfPet_check)
//     // id = document.querySelectorAll('.id');
//     // console.log(id)
//     numOfPet = Math.floor(Math.random() * 8);
//     // console.dir(pets_next.children[0].children[0])
//     // console.log(pets_next.children[0].children[0].children[0].innerHTML)
// //     console.log(numOfPet_check_aside)
//     // console.log(numOfPet_after)
// // console.log(pets_2_after)
// // console.log(pets_3_after)
//         if(numOfPet_check.includes(numOfPet) || numOfPet_check_aside.includes(numOfPet)){
//         // numOfPet = Math.floor(Math.random() * 8);
//         // || numOfPet_check_aside.includes(+pets_1_after) || numOfPet_check_aside.includes(+pets_2_after) || numOfPet_check_aside.includes(+pets_3_after)
//         i--;
//         continue check;
//     }
//     console.log(numOfPet_check_aside.includes(+pets_1))
// console.log(numOfPet_check_aside.includes(+pets_2))
// console.log(numOfPet_check_aside.includes(+pets_3))
// console.log(numOfPet_check.includes(+pets_1))
// console.log(numOfPet_check.includes(+pets_2))
// console.log(numOfPet_check.includes(+pets_3))

// // let pets_1 = pets.children[0].children[0].children[0].innerHTML;
// // let pets_2 = pets.children[1].children[0].children[0].innerHTML;
// // let pets_3 = pets.children[2].children[0].children[0].innerHTML;
// // console.dir(pets_1)
// // console.dir(pets_2)
// // console.dir(pets_3)
//     // for(let j=0; j<numOfPet_check_aside.length; i++){
//     //     console.log(numOfPet_check)
//     //     console.log(numOfPet_check_aside)
//         // for(let j=0; j<numOfPet_check_aside.length; j++){
//             // if(numOfPet_check_aside[0] == numOfPet || numOfPet_check_aside[1] == numOfPet || numOfPet_check_aside[2] == numOfPet){
//             //     continue check;
//             // }
//         // }
//     // }
    
//     numOfPet_check.push(numOfPet);
    
//     // console.log(numOfPet_check)
//     // console.log(numOfPet_check_aside.join(''))

//     // for(let i=0; i<numOfPet_check_aside.length; i++){
//     //     console.log(numOfPet_check)
//     //     console.log(numOfPet_check_aside)
//     //     for(let j=0; j<numOfPet_check_aside.length; j++){
//     //         if(numOfPet_check_aside[i] == numOfPet){
//     //             continue check;
//     //         }
//     //     }
//     // }
//     console.log(numOfPet);
//     console.log(numOfPet_check)
//         console.log(numOfPet_check_aside)
//     card.innerHTML = `
//                     <div class="our-friends-card">
//                         <p class="id">${listOfCard[numOfPet].id}</p>
//                         <img src=${listOfCard[numOfPet].img} alt=${listOfCard[numOfPet].name} class="card-img">
//                         <p class="card-title">${listOfCard[numOfPet].name}</p>
//                         <div class="card-button"><span class="card-button-link">Learn more</span></div>
//                     </div>
//     `;


    
//     changedItem.appendChild(card);
//     // console.log(listOfCard[numOfPet].id, listOfCard[numOfPet].name)
//     // console.log(card)
//     }
    // console.log(numOfPet_check_aside)
// console.log(numOfPet_check_aside)
    
    bt_l.addEventListener("click", moveLeft);
    bt_r.addEventListener("click", moveRight);
//     pets_1_after = pets_next.children[0].children[0].children[0].innerHTML;
//         pets_2_after = pets_next.children[1].children[0].children[0].innerHTML;
//         pets_3_after = pets_next.children[2].children[0].children[0].innerHTML;
//         numOfPet_after.push(+pets_1_after);
//         numOfPet_after.push(+pets_2_after);
//         numOfPet_after.push(+pets_3_after);
//         console.log(pets);
// console.log(pets_1_after);        
// console.log(pets_2_after);
// console.log(pets_3_after);
// console.log(numOfPet_after);
// console.log(numOfPet_check_aside);

//     compare:    for (let i = 0; i < 3; i++) {
//         if(numOfPet_check_aside.includes(+pets_1_after) || numOfPet_check_aside.includes(+pets_2_after) || numOfPet_check_aside.includes(+pets_3_after)){
//     // let card = createSlider();
//     // console.log(numOfPet_check)
//     // id = document.querySelectorAll('.id');
//     // console.log(id)
//     pets_1_after = Math.floor(Math.random() * 8);
//     pets_2_after = Math.floor(Math.random() * 8);
//     pets_3_after = Math.floor(Math.random() * 8);
//     continue compare;
//     // console.dir(pets_next.children[0].children[0])
//     // console.log(pets_next.children[0].children[0].children[0].innerHTML)
// //     console.log(numOfPet_check_aside)
//     // console.log(numOfPet_after)
// // console.log(pets_2_after)
// // console.log(pets_3_after)
//     //     if(numOfPet_check.includes(numOfPet) || numOfPet_check_aside.includes(numOfPet)){
//     //     // numOfPet = Math.floor(Math.random() * 8);
//     //     // || numOfPet_check_aside.includes(+pets_1_after) || numOfPet_check_aside.includes(+pets_2_after) || numOfPet_check_aside.includes(+pets_3_after)
//     //     i--;
//     //     continue check;
//     // }
// //     console.log(numOfPet_check_aside.includes(+pets_1))
// // console.log(numOfPet_check_aside.includes(+pets_2))
// // console.log(numOfPet_check_aside.includes(+pets_3))
// // console.log(numOfPet_check.includes(+pets_1))
// // console.log(numOfPet_check.includes(+pets_2))
// // console.log(numOfPet_check.includes(+pets_3))

// // let pets_1 = pets.children[0].children[0].children[0].innerHTML;
// // let pets_2 = pets.children[1].children[0].children[0].innerHTML;
// // let pets_3 = pets.children[2].children[0].children[0].innerHTML;
// // console.dir(pets_1)
// // console.dir(pets_2)
// // console.dir(pets_3)
//     // for(let j=0; j<numOfPet_check_aside.length; i++){
//     //     console.log(numOfPet_check)
//     //     console.log(numOfPet_check_aside)
//         // for(let j=0; j<numOfPet_check_aside.length; j++){
//             // if(numOfPet_check_aside[0] == numOfPet || numOfPet_check_aside[1] == numOfPet || numOfPet_check_aside[2] == numOfPet){
//             //     continue check;
//             // }
//         // }
//     // }
    
//     // numOfPet_check.push(numOfPet);
    
//     // console.log(numOfPet_check)
//     // console.log(numOfPet_check_aside.join(''))

//     // for(let i=0; i<numOfPet_check_aside.length; i++){
//     //     console.log(numOfPet_check)
//     //     console.log(numOfPet_check_aside)
//     //     for(let j=0; j<numOfPet_check_aside.length; j++){
//     //         if(numOfPet_check_aside[i] == numOfPet){
//     //             continue check;
//     //         }
//     //     }
//     // }
//     // console.log(numOfPet_check)
//     //     console.log(numOfPet_check_aside)
//         }
//     card.innerHTML = `
//                     <div class="our-friends-card">
//                         <p class="id">${listOfCard[numOfPet].id}</p>
//                         <img src=${listOfCard[numOfPet].img} alt=${listOfCard[numOfPet].name} class="card-img">
//                         <p class="card-title">${listOfCard[numOfPet].name}</p>
//                         <div class="card-button"><span class="card-button-link">Learn more</span></div>
//                     </div>
//     `;


    
//     // changedItem.appendChild(card);
//     // console.log(listOfCard[numOfPet].id, listOfCard[numOfPet].name)
//     // console.log(card)
    
// }

// compare: if(numOfPet_check_aside.includes(+pets_1_after) || numOfPet_check_aside.includes(+pets_2_after) || numOfPet_check_aside.includes(+pets_3_after)){
//     while(numOfPet_check_aside.includes(pets_1_after) || numOfPet_check_aside.includes(pets_2_after) || numOfPet_check_aside.includes(pets_3_after)){
//         pets_1_after = Math.floor(Math.random() * 8);
//     pets_2_after = Math.floor(Math.random() * 8);
//     pets_3_after = Math.floor(Math.random() * 8);
//     }
// console.log(numOfPet_check_aside.includes(+pets_1_after), numOfPet_check_aside.includes(+pets_2_after), numOfPet_check_aside.includes(+pets_3_after))
    
// // if(numOfPet_check_aside.includes(pets_1_after) || numOfPet_check_aside.includes(pets_2_after) || numOfPet_check_aside.includes(pets_3_after)){
// // console.log(numOfPet_check_aside.includes(+pets_1_after), numOfPet_check_aside.includes(+pets_2_after), numOfPet_check_aside.includes(+pets_3_after))
// //     break compare;
// // }
// console.log(numOfPet_check_aside.includes(+pets_1_after), numOfPet_check_aside.includes(+pets_2_after), numOfPet_check_aside.includes(+pets_3_after))
//     pets.innerHTML = `
//                             <a class="our-friends-card-link" href="#">
//                                 <div class="our-friends-card">
//                                     <p class="id">${listOfCard[pets_1_after].id}</p>
//                                     <img src=${listOfCard[pets_1_after].img} alt=${listOfCard[pets_1_after].name} class="card-img">
//                                     <p class="card-title">${listOfCard[pets_1_after].name}</p>
//                                     <div class="card-button"><span class="card-button-link">Learn more</span></div>
//                                 </div>
//                             </a>
//                             <a class="our-friends-card-link" href="#">
//                                 <div class="our-friends-card">
//                                     <p class="id">${listOfCard[pets_2_after].id}</p>
//                                     <img src=${listOfCard[pets_2_after].img} alt=${listOfCard[pets_2_after].name} class="card-img">
//                                     <p class="card-title">${listOfCard[pets_2_after].name}</p>
//                                     <div class="card-button"><span class="card-button-link">Learn more</span></div>
//                                 </div>
//                             </a>
//                             <a class="our-friends-card-link" href="#">
//                                 <div class="our-friends-card">
//                                     <p class="id">${listOfCard[pets_3_after].id}</p>
//                                     <img src=${listOfCard[pets_3_after].img} alt=${listOfCard[pets_3_after].name} class="card-img">
//                                     <p class="card-title">${listOfCard[pets_3_after].name}</p>
//                                     <div class="card-button"><span class="card-button-link">Learn more</span></div>
//                                 </div>
//                             </a>
//         `
// }
})



    // let pets = document.querySelectorAll('.our-friends-card-link');

        // bt_r.addEventListener('click', () => count += 990);
        // bt_r.onclick = function(){
        //     for(let item of document.querySelectorAll('.our-pets-items')) {
        //     item.style.right = count +'px';
        //     }
            // if(count > 1090){
        //         createSlider();
            
        // }
        // numOfClick_r++;
        //     if(numOfClick_r == 2){
                // listOfCard.concat(listOfCard);
                // console.log(pets)
                // wrapper.innerHTML = '';
                // for(let item of pets){
                //     item.remove()
                // }
                // console.log(pets[7])
                // count = 0;
                // wrapper.innerHTML = '';
    //             createSlider();
    //             numOfClick_r = 0;
    // }
    //     }
    
        // bt_l.addEventListener('click', () => count -= 990);
        // bt_l.onclick = function () {
        //     for(let item of document.querySelectorAll('.our-pets-items')) {
        //         item.style.right = count +'px';
        //     }
        //         numOfClick_l++;
        //         if(numOfClick_l == 2){
        //             createSlider();
        //             numOfClick_l = 0;        
                // if(count < 0){
                //     createSlider();
                // }
        //         }
    
        // }    
    
    
//     addEventListener("resize", (event) => {
//     if(body.offsetWidth >= 1280){

// }
// });

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
// `)
