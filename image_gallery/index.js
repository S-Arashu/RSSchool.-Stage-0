"use strict";

let searchField = document.querySelector('#search');
// searchField.addEventListener('onsubmit', () => { return false});
let url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
let likedPhoto = new Set();

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

// let isLike = false;
let imgSrc = './img/heart.png';
let numOfImg;

function showData(data) {


    document.addEventListener("click", (e) => {
        let target = e.target;
        // console.log(target.className)
        for(let i=0; i<data.length; i++){
            // console.log(data[i].id)
            if(likedPhoto.has(target.id)){
                imgSrc = './img/heard-fulled.png';
                console.log(likedPhoto);
                console.log(target.id)
            } else {
                imgSrc = './img/heart.png';
            }

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
            itemBlock.style.left = ((window.innerWidth - itemBlockImg.offsetWidth) / 2) + 'px';
            console.log(window.screen.width);
            console.log(itemBlockImg.clientWidth);
            }
            


            document.body.style.overflow = 'hidden';
        }

        

        // let like = document.querySelector('.like');

        // like.addEventListener("like", () => {
        //     like.setAttribute('src', './img/heard-fulled.png');
        //     likedPhoto.push(target.id);

        //     if(likedPhoto.includes(target.id)){
        //         like.setAttribute("src", "./img/heart.png");
        //         likedPhoto.filter((photo) => photo != target.id)
        //     }
        //     console.log(likedPhoto)
        // })

        }
        
        if(target.className == 'dark-block'){
            let itemBlock = document.querySelector('.item-block');
            let darkBlock = document.querySelector('.dark-block');
            document.body.style.overflow = '';
            itemBlock.remove();
            darkBlock.remove();
        }
    })


    

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
        
        // let likedPhoto = new Set();
        // let isLike = false;
        

        let like = document.querySelector('.like');
        
        console.dir(target)
        console.log(target.dataset.num)
        // console.log(imgNum)
        console.log(likedPhoto.has(target.id))
        // console.log(target.className == 'like' && isLike && likedPhoto.has(imgNum))
        // like.addEventListener("click", () => {
            if(target.className == 'like'){
                let imgNum = target.offsetParent.offsetParent.firstElementChild.dataset.num;
                let likeCount = document.querySelector('.like-count');
                if(likedPhoto.has(imgNum)){
                // isLike = false;
                numOfImg = likeCount.innerHTML = +likeCount.innerHTML - 1;
                like.setAttribute("src", "./img/heart.png");
                likedPhoto.delete(imgNum);
                console.log(likedPhoto)
                return
                // let index = likedPhoto.findIndex(photo => photo == target.id);
                // likedPhoto.splice(index, 1);
            }
                // isLike = true;
            numOfImg = likeCount.innerHTML = +likeCount.innerHTML + 1;
            like.setAttribute('src', './img/heard-fulled.png');
            likedPhoto.add(imgNum);
            console.log(likedPhoto);
            }
            
            // if(isLike && likedPhoto.includes(target.id)){
            //     like.setAttribute("src", "./img/heart.png");
            //     // likedPhoto.filter((photo) => photo != target.id);
            //     let index = likedPhoto.findIndex(photo => photo == target.id);
            //     likedPhoto.splice(index, 1);
            // }
            // console.log(target.this)
        // })

        // function checkLike (){
        //     if(target.className == 'like' && isLike && likedPhoto.has(target.id)){
        //         isLike = false;
        //         like.setAttribute("src", "./img/heart.png");
        //         likedPhoto.delete(target.id);
        //         console.log(likedPhoto)
        //         return
        //         // let index = likedPhoto.findIndex(photo => photo == target.id);
        //         // likedPhoto.splice(index, 1);
        //     }
        // }

        // like.addEventListener('click', checkLike);
    })
}

    let searchBtn = document.querySelector('button');

    function search () {
        if (searchField.value != '') {
            url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
            main.innerHTML = '';
            // console.log(searchField.value)
            // searchField.value = searchField.value;
            getData();
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

    searchField.onfocus = function(){
        console.log(+searchField.value)
    }