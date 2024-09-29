"use strict";

let searchField = document.querySelector('#search');
let url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
let likedPhoto = new Set();
let favImg = document.querySelector('.fav-img');
let container = document.querySelector('.container');
let containerForFavImg = document.querySelector('.container-for-fav-img');
let empty = document.querySelector('.empty');

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.dir(data);

    if(res.ok && data.length){
        showData(data);
    }

    
}

getData();

let main = document.querySelector(".container");
let body = document.querySelector('body')

let isLike = false;
let imgSrc = './img/heart.png';
let numOfImg;

function showData(data) {

        data.map((data) => {
        const img = document.createElement("img");
        img.classList.add("gallery-img");
        img.setAttribute('id', data.id)
        img.src = data.urls.small;
        img.alt = data.alt_description;
        main.append(img); 
    })


    document.addEventListener("click", (e) => {
        let target = e.target;
        if(likedPhoto.has(target.id)){
                imgSrc = './img/heard-fulled.png';
                console.log(likedPhoto);
                console.log(target.id)
            } else {
                imgSrc = './img/heart.png';
            }
        for(let i=0; i<data.length; i++){

            if(target.id == data[i].id){
                let numForLikes = data[i].likes;
                    if(likedPhoto.has(target.id)){
                        numForLikes = numForLikes + 1;
                    } 
                let bg = document.createElement('div');
                bg.classList.add('dark-block');
                body.append(bg);
                let item = document.createElement('div');
                item.classList.add('item-block');
                item.innerHTML = `
                    <img src='${data[i].urls.regular}' class="item-block-img" data-num="${data[i].id}"></img>
                    <div class="like-container">
                        <img src='${imgSrc}' class="like"></img>
                        <p class="like-count">${numForLikes}</p>
                    </div>
                    `
            
                body.append(item);
                let itemBlockImg = document.querySelector('.item-block-img');
                itemBlockImg.onload = function(){
                let itemBlock = document.querySelector('.item-block');
                itemBlock.style.left = (((window.innerWidth - itemBlockImg.offsetWidth) / 2) + 'px') || ((40 / 2) + '%');
                let like = document.querySelector('.like');
                like.addEventListener('click', () => {

                    let imgNum = this.offsetParent.children[0].dataset.num;
                    let likeCount = document.querySelector('.like-count');
                        if(likedPhoto.has(imgNum)){
                            numOfImg = likeCount.innerHTML = +likeCount.innerHTML - 1;
                            like.setAttribute("src", "./img/heart.png");
                            likedPhoto.delete(imgNum);
                            let gallery = document.querySelectorAll('.gallery');

                            if(gallery.length !=0 && isLike == true){

                                containerForFavImg.style.display = 'none';
                                containerForFavImg.innerHTML = '';
                                favImg.click();
                            }
                            if(gallery.length != 0){
                                containerForFavImg.innerHTML = '';
                            addImgForFavPage();
                    
                            }
                        } else if(!likedPhoto.has(imgNum)) {
                            numOfImg = likeCount.innerHTML = +likeCount.innerHTML + 1;
                            like.setAttribute('src', './img/heard-fulled.png');
                            likedPhoto.add(imgNum);
                        }
                })
                }
            
                document.body.style.overflow = 'hidden';
            }

        }

        if(target.className == 'dark-block'){
            
            let itemBlock = document.querySelector('.item-block');
            let darkBlock = document.querySelector('.dark-block');
            if(itemBlock && darkBlock){
                itemBlock.remove();
                darkBlock.remove();
            
                document.body.style.overflow = '';
            }
            
        }
    })

    function addImgForFavPage () {

        container.style.display = 'none';
        containerForFavImg.style.display = 'flex';

            for(let value of likedPhoto){

                for(let j=0; j<data.length; j++){
                    
                    if(value == data[j].id){
                        let imgFav = document.createElement("img");
                        imgFav.classList.add("gallery");
                        imgFav.setAttribute('id', data[j].id)
                        imgFav.src = data[j].urls.small;
                        imgFav.alt = data[j].alt_description;
                        containerForFavImg.append(imgFav); 
                    }
                
                }
            }


            if(likedPhoto.size == 0){   
                
                empty.style.display = "block";
            }

            if(container.style.display == 'none'){
                favImg.style.pointerEvents = 'none';
            }
        }

        favImg.addEventListener('click', addImgForFavPage);
}

    let searchBtn = document.querySelector('button');

    function search () {
        if (searchField.value != '') {
            url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
            main.innerHTML = '';
            isLike = true;
            favImg.style.pointerEvents = 'auto';
            if(container.style.display == 'none'){
                container.style.display = 'flex';
                containerForFavImg.style.display = 'none';
                containerForFavImg.innerHTML = '';
            }
            let gallery = document.querySelectorAll('.gallery');
            if(gallery.length != 0){
                containerForFavImg.innerHTML = '';
                
                if(likedPhoto.size == 0){   
                
                    empty.style.display = "block";
                }
            }
            getData();
        } else {
            alert("Please, enter the word");
        }
    }

    searchBtn.addEventListener("click", search)
    document.addEventListener("keyup", event => {
        if (event.code === 'Enter'){
            search();
        }
    })

    let upBtn = document.querySelector('.up-btn');
    upBtn.onclick = function(){
        window.scrollTo(0,0);
    }