'use strict';

// slider Main

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
        petCard.classList.add('our-pets-items');
        wrapper.prepend(petCard);
        petCard.innerHTML = `
                            <a class="our-friends-card-link" href="##">
                                <div class="our-friends-card">
                                    <p class="id">${listOfCard[comp[k]].id}</p>
                                    <img src=${listOfCard[comp[k]].img} alt=${listOfCard[comp[k]].name} class="card-img">
                                    <p class="card-title">${listOfCard[comp[k]].name}</p>
                                    <div class="card-button"><span class="card-button-link">Learn more</span></div>
                                </div>
                            </a>
                            <a class="our-friends-card-link" href="##">
                                <div class="our-friends-card">
                                    <p class="id">${listOfCard[comp[k]+1].id}</p>
                                    <img src=${listOfCard[comp[k]+1].img} alt=${listOfCard[comp[k]+1].name} class="card-img">
                                    <p class="card-title">${listOfCard[comp[k]+1].name}</p>
                                    <div class="card-button"><span class="card-button-link">Learn more</span></div>
                                </div>
                            </a>
                            <a class="our-friends-card-link" href="##">
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
        petCard.setAttribute('href', '##');
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
            itemDelete[2].lastElementChild.classList.add('delete');
        console.dir(itemDelete[0].lastElementChild)
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

// Popup

let closeBlock;
let symbol;
let closeSymbol;
let darkBlock;
let petBlock;

wrapper.onclick = function (event){
    let target = event.target;
    let elem1 = target.parentElement.firstElementChild.innerHTML;
    let elem2 = target.parentElement.parentElement.firstElementChild.innerHTML;

    console.log(petsInfo)
    console.dir(target.parentElement.firstElementChild.innerHTML);
    console.dir(target.parentElement.parentElement.firstElementChild.innerHTML);
    if (target.tagName == 'IMG' || target.tagName == 'P') {
        let div = document.createElement('div');
        div.classList.add('card_desc');

        for(let i=0; i<petsInfo.length; i++){
            
            if(elem1 == petsInfo[i].id){
                let index = petsInfo.findIndex(el => el.id === elem1);
                console.log(index)
                console.log(petsInfo[i].id)
                div.innerHTML = `
                    <div class="close">
                        <svg width="12" class="symbol" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="close-symbol" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
</svg>
                    </div>
                    <div class="card-wrapper">
                        <img src=${"." + petsInfo[index].img} alt=${petsInfo[index].name} class="img-pets">
                        <div class="desc-wrapper">
                            <h3 class="pet-name">${petsInfo[index].name}</h3>
                            <span class="pet-breed">${petsInfo[index].type} - ${petsInfo[index].breed}</span>
                            <p class="pet-desc">${petsInfo[index].description}</p>
                            <ul class="pet-list">
                                <li class="pet-list-item"><strong>Age: </strong>${petsInfo[index].age}</li>
                                <li class="pet-list-item"><strong>Inoculations: </strong>${petsInfo[index].inoculations}</li>
                                <li class="pet-list-item"><strong>Diseases: </strong>${petsInfo[index].diseases}</li>
                                <li class="pet-list-item"><strong>Parasites: </strong>${petsInfo[index].parasites}</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }

    let wrapperBlock = document.createElement('div');
        wrapperBlock.classList.add('dark-block');
        body.prepend(div);
        body.prepend(wrapperBlock);

        document.body.style.overflow = "hidden";

        
    }

    if (target.tagName == 'SPAN') {
        let div = document.createElement('div');
        div.classList.add('card_desc');

        for(let i=0; i<petsInfo.length; i++){
            
            if(elem2 == petsInfo[i].id){
                let index = petsInfo.findIndex(el => el.id === elem2);
                console.log(index)
                console.log(petsInfo[i].id)
                div.innerHTML = `
                    <div class="close">
                        <svg width="12" class="symbol" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="close-symbol" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
</svg>
                    </div>
                    <div class="card-wrapper">
                        <img src=${"." + petsInfo[index].img} alt=${petsInfo[index].name} class="img-pets">
                        <div class="desc-wrapper">
                            <h3 class="pet-name">${petsInfo[index].name}</h3>
                            <span class="pet-breed">${petsInfo[index].type} - ${petsInfo[index].breed}</span>
                            <p class="pet-desc">${petsInfo[index].description}</p>
                            <ul class="pet-list">
                                <li class="pet-list-item"><strong>Age: </strong>${petsInfo[index].age}</li>
                                <li class="pet-list-item"><strong>Inoculations: </strong>${petsInfo[index].inoculations}</li>
                                <li class="pet-list-item"><strong>Diseases: </strong>${petsInfo[index].diseases}</li>
                                <li class="pet-list-item"><strong>Parasites: </strong>${petsInfo[index].parasites}</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }

    let wrapperBlock = document.createElement('div');
        wrapperBlock.classList.add('dark-block');
        body.prepend(div);
        body.prepend(wrapperBlock);

        document.body.style.overflow = "hidden";

        
    }

    closeBlock = document.querySelector('.close');
    symbol = document.querySelector('.symbol');
    closeSymbol = document.querySelector('.close-symbol');
    darkBlock = document.querySelector('.dark-block');
    petBlock = document.querySelector('.card_desc')

}

body.onclick = function (event) {
    let targetBlock = event.target;
    console.log(targetBlock === closeBlock)
    console.log(closeBlock);
    console.log(targetBlock);
    if(targetBlock === closeBlock || targetBlock === symbol || targetBlock === closeSymbol || targetBlock === darkBlock){
        document.body.style.overflow = "";
        darkBlock.remove();
        petBlock.remove();
    }
}
});

// Pets pagination

let path_pets = '../pets.json';
let contr = document.querySelector('.our-pets-contr');
let left = document.querySelector('.left');
let leftDouble = document.querySelector('.left-double');
let right = document.querySelector('.right');
let rightDouble = document.querySelector('.right-double');
let num = document.querySelector('.num');
let petsItems = document.querySelector('.pets-items');

fetch(path_pets)
.then(response => response.json())
.then(petsInfo => {

let listOfPets = [];

for (let j=0; j<6; j++){
    listOfPets = listOfPets.concat(random(petsInfo));
}

let iter;
let i = 0;
let countPagination = 1;
let petCards;

if(body.offsetWidth >= 1280){
    iter = 8;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    iter = 6;
}

if(body.offsetWidth < 630){
    iter = 3;
}

right.onclick = () => {
petsItems.innerHTML = '';

if(body.offsetWidth >= 1280){
    i += 8;
    iter = i + 8;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    i += 6;
    iter = i + 6;
}

if(body.offsetWidth < 630){
    i += 3;
    iter = i + 3;
}
    
++countPagination;

if(body.offsetWidth >= 1280){
    if (countPagination == 6){
    right.disabled = true;
    rightDouble.disabled = true;
    right.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    rightDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
}
if (countPagination < 6){
    left.disabled = false;
    leftDouble.disabled = false;
    left.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    leftDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    if (countPagination == 8){
    right.disabled = true;
    rightDouble.disabled = true;
    right.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    rightDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
}
if (countPagination < 8){
    left.disabled = false;
    leftDouble.disabled = false;
    left.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    leftDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

if(body.offsetWidth < 630){
    if (countPagination == 16){
    right.disabled = true;
    rightDouble.disabled = true;
    right.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    rightDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
}
if (countPagination < 16){
    left.disabled = false;
    leftDouble.disabled = false;
    left.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    leftDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

num.innerHTML = countPagination;
};

left.onclick = () => {
petsItems.innerHTML = '';

if(body.offsetWidth >= 1280){
    i -= 8;
    iter = i + 8;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    i -= 6;
    iter = i + 6;
}

if(body.offsetWidth < 630){
    i -= 3;
    iter = i + 3;
}
    
--countPagination;

if (countPagination == 1){
    left.disabled = true;
    leftDouble.disabled = true;
    left.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    leftDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
}

if(body.offsetWidth >= 1280){
    if (countPagination < 6){
    right.disabled = false;
    rightDouble.disabled = false;
    right.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    rightDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    if (countPagination < 8){
    right.disabled = false;
    rightDouble.disabled = false;
    right.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    rightDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

if(body.offsetWidth < 630){
    if (countPagination < 16){
    right.disabled = false;
    rightDouble.disabled = false;
    right.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    rightDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}
}

num.innerHTML = countPagination;
};

rightDouble.onclick = () => {
    petsItems.innerHTML = '';
    iter = 48;
    if(body.offsetWidth >= 1280){
    i = 40;
    countPagination = 6;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    i = 42;
    countPagination = 8;
}

if(body.offsetWidth < 630){
    i = 45;
    countPagination = 16;
}
    left.disabled = false;
    leftDouble.disabled = false;
    right.disabled = true;
    rightDouble.disabled = true;
    num.innerHTML = countPagination;
    right.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    rightDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    left.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    leftDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}

leftDouble.onclick = () => {
    petsItems.innerHTML = '';
    if(body.offsetWidth >= 1280){
    iter = 8;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    iter = 6;
}

if(body.offsetWidth < 630){
    iter = 3;
}
    i = 0;
    countPagination = 1;
    left.disabled = true;
    leftDouble.disabled = true;
    right.disabled = false;
    rightDouble.disabled = false;
    num.innerHTML = countPagination;
    left.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    leftDouble.style.cssText = `
    cursor: not-allowed;
    background-color: #f6f6f6;
    `;
    right.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
    rightDouble.style.cssText = `
    cursor: pointer;
    background-color: #F1CDB3;
    `;
}

right.addEventListener('click', createCardPets);
left.addEventListener('click', createCardPets);
rightDouble.addEventListener('click', createCardPets);
leftDouble.addEventListener('click', createCardPets);

function createCardPets () {

for(i; i<iter; i++){
    petCards = document.createElement('a');
    petCards.classList.add('our-friends-card-link-pets');
    petCards.setAttribute('href', '##');

    petCards.innerHTML = `
                    <div class="our-friends-card">
                        <p class="id">${listOfPets[i].id}</p>
                        <img src=${'.' + listOfPets[i].img} alt=${listOfPets[i].name} class="card-img">
                        <p class="card-title">${listOfPets[i].name}</p>
                        <div class="card-button"><span class="card-button-link">Learn more</span></div>
                    </div>
    `;
    
    petsItems.appendChild(petCards);
}

if(body.offsetWidth >= 1280){
    i -= 8;
}

if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
    i -= 6;
}

if(body.offsetWidth < 630){
    i -= 3;
}
};

createCardPets ();

addEventListener("resize", () => {
    if(body.offsetWidth >= 1280){
        console.log(iter)
    petsItems.innerHTML = '';
        if(countPagination == 1) {
    console.log(countPagination);
    countPagination = 1;
    i = 0;
    iter = 8;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 2){
    console.log(countPagination);
    countPagination = 2;
    i = 8;
    iter = 16;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 3){
    console.log(countPagination);
    countPagination = 3;
    i = 16;
    iter = 24;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 4){
    console.log(countPagination);
    countPagination = 4;
    i = 24;
    iter = 32;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 5){
    console.log(countPagination);
    countPagination = 5;
    i = 32;
    iter = 40;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 6){
    console.log(countPagination);
    countPagination = 6;
    i = 40;
    iter = 48;
    num.innerHTML = countPagination;
    createCardPets();
    right.disabled = true;
    rightDouble.disabled = true;
        } else {
    countPagination = 6;
    i = 40;
    iter = 48;
    num.innerHTML = countPagination;
    createCardPets();
    right.disabled = true;
    rightDouble.disabled = true;
        }
    }
    if(body.offsetWidth >= 630 && body.offsetWidth < 1280){
        petsItems.innerHTML = '';
        if(countPagination == 1) {
    console.log(countPagination);
    countPagination = 1;
    i = 0;
    iter = 6;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 2){
    console.log(countPagination);
    countPagination = 2;
    i = 6;
    iter = 12;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 3){
    console.log(countPagination);
    countPagination = 3;
    i = 12;
    iter = 18;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 4){
    console.log(countPagination);
    countPagination = 3;
    i = 18;
    iter = 24;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 5){
    console.log(countPagination);
    countPagination = 3;
    i = 24;
    iter = 30;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 6){
    console.log(countPagination);
    countPagination = 4;
    i = 30;
    iter = 36;
    num.innerHTML = countPagination;
    createCardPets();
    right.disabled = false;
    rightDouble.disabled = false;
        } else if (countPagination > 6){
    countPagination = 8;
    i = 42;
    iter = 48;
    num.innerHTML = countPagination;
    createCardPets();
    right.disabled = true;
    rightDouble.disabled = true;
        }
    }
    if(body.offsetWidth >= 320 && body.offsetWidth < 630){
        petsItems.innerHTML = '';
        if(countPagination == 1) {
    console.log(countPagination);
    countPagination = 1;
    i = 0;
    iter = 3;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 2){
    console.log(countPagination);
    countPagination = 2;
    i = 3;
    iter = 6;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 3){
    console.log(countPagination);
    countPagination = 3;
    i = 6;
    iter = 9;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 4){
    console.log(countPagination);
    countPagination = 4;
    i = 9;
    iter = 12;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 5){
    console.log(countPagination);
    countPagination = 5;
    i = 12;
    iter = 15;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination == 6){
    console.log(countPagination);
    countPagination = 6;
    i = 15;
    iter = 18;
    num.innerHTML = countPagination;
    createCardPets();
        } else if (countPagination > 6){
    console.log(countPagination);
    countPagination = 16;
    i = 45;
    iter = 48;
    num.innerHTML = countPagination;
    createCardPets();
    right.disabled = true;
    rightDouble.disabled = true;
        }
    }

})

// Popup

let closeBlock;
let symbol;
let closeSymbol;
let darkBlock;
let petBlock;

petsItems.onclick = function (event){
    let target = event.target;
    let elem1 = target.parentElement.firstElementChild.innerHTML;
    let elem2 = target.parentElement.parentElement.firstElementChild.innerHTML;

    console.log(petsInfo)
    console.dir(target.parentElement.firstElementChild.innerHTML);
    console.dir(target.parentElement.parentElement.firstElementChild.innerHTML);
    if (target.tagName == 'IMG' || target.tagName == 'P') {
        let div = document.createElement('div');
        div.classList.add('card_desc');

        for(let i=0; i<petsInfo.length; i++){
            
            if(elem1 == petsInfo[i].id){
                let index = petsInfo.findIndex(el => el.id === elem1);
                console.log(index)
                console.log(petsInfo[i].id)
                div.innerHTML = `
                    <div class="close">
                        <svg width="12" class="symbol" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="close-symbol" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
</svg>
                    </div>
                    <div class="card-wrapper">
                        <img src=${"." + petsInfo[index].img} alt=${petsInfo[index].name} class="img-pets">
                        <div class="desc-wrapper">
                            <h3 class="pet-name">${petsInfo[index].name}</h3>
                            <span class="pet-breed">${petsInfo[index].type} - ${petsInfo[index].breed}</span>
                            <p class="pet-desc">${petsInfo[index].description}</p>
                            <ul class="pet-list">
                                <li class="pet-list-item"><strong>Age: </strong>${petsInfo[index].age}</li>
                                <li class="pet-list-item"><strong>Inoculations: </strong>${petsInfo[index].inoculations}</li>
                                <li class="pet-list-item"><strong>Diseases: </strong>${petsInfo[index].diseases}</li>
                                <li class="pet-list-item"><strong>Parasites: </strong>${petsInfo[index].parasites}</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }

    let wrapperBlock = document.createElement('div');
        wrapperBlock.classList.add('dark-block');
        body.prepend(div);
        body.prepend(wrapperBlock);

        document.body.style.overflow = "hidden";

        
    }

    if (target.tagName == 'SPAN') {
        let div = document.createElement('div');
        div.classList.add('card_desc');

        for(let i=0; i<petsInfo.length; i++){
            
            if(elem2 == petsInfo[i].id){
                let index = petsInfo.findIndex(el => el.id === elem2);
                console.log(index)
                console.log(petsInfo[i].id)
                div.innerHTML = `
                    <div class="close">
                        <svg width="12" class="symbol" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="close-symbol" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
</svg>
                    </div>
                    <div class="card-wrapper">
                        <img src=${"." + petsInfo[index].img} alt=${petsInfo[index].name} class="img-pets">
                        <div class="desc-wrapper">
                            <h3 class="pet-name">${petsInfo[index].name}</h3>
                            <span class="pet-breed">${petsInfo[index].type} - ${petsInfo[index].breed}</span>
                            <p class="pet-desc">${petsInfo[index].description}</p>
                            <ul class="pet-list">
                                <li class="pet-list-item"><strong>Age: </strong>${petsInfo[index].age}</li>
                                <li class="pet-list-item"><strong>Inoculations: </strong>${petsInfo[index].inoculations}</li>
                                <li class="pet-list-item"><strong>Diseases: </strong>${petsInfo[index].diseases}</li>
                                <li class="pet-list-item"><strong>Parasites: </strong>${petsInfo[index].parasites}</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }

    let wrapperBlock = document.createElement('div');
        wrapperBlock.classList.add('dark-block');
        body.prepend(div);
        body.prepend(wrapperBlock);

        document.body.style.overflow = "hidden";

        
    }

    closeBlock = document.querySelector('.close');
    symbol = document.querySelector('.symbol');
    closeSymbol = document.querySelector('.close-symbol');
    darkBlock = document.querySelector('.dark-block');
    petBlock = document.querySelector('.card_desc')

}

body.onclick = function (event) {
    let targetBlock = event.target;
    console.log(targetBlock === closeBlock)
    console.log(closeBlock);
    console.log(targetBlock);
    if(targetBlock === closeBlock || targetBlock === symbol || targetBlock === closeSymbol || targetBlock === darkBlock){
        document.body.style.overflow = "";
        darkBlock.remove();
        petBlock.remove();
    }
}
})


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

// Реализация пагинации на странице Pets: +36
//     при перезагрузке страницы всегда открывается первая страница пагинации: +2
//     при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2
//     при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2
//     при открытии первой страницы кнопки << и < неактивны: +2
//     при открытии последней страницы кнопки > и >> неактивны: +2
//     в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2
//     каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
//     при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4
//     при каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4
//     карточки питомцев не должны повторяться на одной странице: +4
//     при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4
//     при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2
// общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2
//     при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +4

    // Реализация попап на обеих страницах: +12
    // попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
    // часть страницы вне попапа затемняется: +2
    // при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
    // при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается (оба варианта должны быть реализованы), при этом при нажатии на сам попап ничего не происходит: +2
    // кнопка с крестиком интерактивная: +2
    // окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2    
// `)
