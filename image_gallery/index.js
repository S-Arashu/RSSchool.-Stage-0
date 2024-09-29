"use strict";

let searchField = document.querySelector('#search');
// searchField.addEventListener('onsubmit', () => { return false});
let url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
let likedPhoto = new Set();
let favImg = document.querySelector('.fav-img');
let container = document.querySelector('.container');
let containerForFavImg = document.querySelector('.container-for-fav-img');

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

        data.map((data) => {
        // main.innerHTML = '';
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
        // console.log(target.className)
        for(let i=0; i<data.length; i++){
            // console.log(data[i].id)
            

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
        let like = document.querySelector('.like');
        like.addEventListener('click', () => {
            
            console.dir(this)
        console.log(like)
        // like.addEventListener("click", (e) => {

        // let target = e.target;
        
        // let likedPhoto = new Set();
        // let isLike = false;
        

        
        
        console.dir(target)
        console.log(target.dataset.num)
        // console.log(imgNum)
        console.log(this)
        // console.log(target.className == 'like' && isLike && likedPhoto.has(imgNum))
        // like.addEventListener("click", () => {
            // if(target.className == 'like'){
                
                let imgNum = this.offsetParent.children[0].dataset.num;
                let likeCount = document.querySelector('.like-count');
                if(likedPhoto.has(imgNum)){
                    console.log('here')
                // isLike = false;
                numOfImg = likeCount.innerHTML = +likeCount.innerHTML - 1;
                like.setAttribute("src", "./img/heart.png");
                likedPhoto.delete(imgNum);
                console.log(likedPhoto)
                // return;
                // let index = likedPhoto.findIndex(photo => photo == target.id);
                // likedPhoto.splice(index, 1);
            } else if(!likedPhoto.has(imgNum)) {
                numOfImg = likeCount.innerHTML = +likeCount.innerHTML + 1;
            like.setAttribute('src', './img/heard-fulled.png');
            likedPhoto.add(imgNum);
            console.log(likedPhoto);
            // return;
            }
        
        })


                // isLike = true;
            
            
            // }

            
            
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
    // })

    
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
        console.log(e.target.classList.contains("like"))
// if(e.target.classList.contains("like")){
//     let like = document.querySelector('.like');
// console.log(like)
//         // like.addEventListener("click", (e) => {

//         // let target = e.target;
        
//         // let likedPhoto = new Set();
//         // let isLike = false;
        

        
        
//         console.dir(target)
//         console.log(target.dataset.num)
//         // console.log(imgNum)
//         console.log(this)
//         // console.log(target.className == 'like' && isLike && likedPhoto.has(imgNum))
//         // like.addEventListener("click", () => {
//             // if(target.className == 'like'){
                
//                 let imgNum = target.offsetParent.offsetParent.firstElementChild.dataset.num;
//                 let likeCount = document.querySelector('.like-count');
//                 if(likedPhoto.has(imgNum)){
//                     console.log('here')
//                 // isLike = false;
//                 numOfImg = likeCount.innerHTML = +likeCount.innerHTML - 1;
//                 like.setAttribute("src", "./img/heart.png");
//                 likedPhoto.delete(imgNum);
//                 console.log(likedPhoto)
//                 // return;
//                 // let index = likedPhoto.findIndex(photo => photo == target.id);
//                 // likedPhoto.splice(index, 1);
//             } else if(!likedPhoto.has(imgNum)) {
//                 numOfImg = likeCount.innerHTML = +likeCount.innerHTML + 1;
//             like.setAttribute('src', './img/heard-fulled.png');
//             likedPhoto.add(imgNum);
//             console.log(likedPhoto);
//             // return;
//             }
//                 // isLike = true;
            
            
//             // }

            
            
//             // if(isLike && likedPhoto.includes(target.id)){
//             //     like.setAttribute("src", "./img/heart.png");
//             //     // likedPhoto.filter((photo) => photo != target.id);
//             //     let index = likedPhoto.findIndex(photo => photo == target.id);
//             //     likedPhoto.splice(index, 1);
//             // }
//             // console.log(target.this)
//         // })

//         // function checkLike (){
//         //     if(target.className == 'like' && isLike && likedPhoto.has(target.id)){
//         //         isLike = false;
//         //         like.setAttribute("src", "./img/heart.png");
//         //         likedPhoto.delete(target.id);
//         //         console.log(likedPhoto)
//         //         return
//         //         // let index = likedPhoto.findIndex(photo => photo == target.id);
//         //         // likedPhoto.splice(index, 1);
//         //     }
//         // }

//         // like.addEventListener('click', checkLike);
//     // })
// }
        
        
        if(target.className == 'dark-block'){
            let itemBlock = document.querySelector('.item-block');
            let darkBlock = document.querySelector('.dark-block');
            document.body.style.overflow = '';
            itemBlock.remove();
            darkBlock.remove();
        }

//         if(target.className == 'fav-img'){

//                 main.innerHTML = '';
//             console.log(likedPhoto, data)
//             // data.map((data) => {
//             for(let value of likedPhoto){
//                 for(let j=0; j<data.length; j++){
//                     // console.log(value)
//                     // console.log(data[j].id)
//                     if(value == data[j].id){
//                         console.log(data[j].urls.small)
// let imgFav = document.createElement("img");
//         imgFav.classList.add("gallery");
//         // imgFav.classList.add("fav-img-checked");
//         imgFav.setAttribute('id', data[j].id)
//         imgFav.src = data[j].urls.small;
//         imgFav.alt = data[j].alt_description;
//         main.append(imgFav); 
//                 }
                
//                 }
//             }
            
        
            
        

//         // setInterval(() => check(), 500)
        
//     // })
//         }
    })



    // main.innerHTML = '';
// let like = document.querySelector('.like');
// console.log(like)
//         like.addEventListener("click", (e) => {

//         let target = e.target;
        
//         // let likedPhoto = new Set();
//         // let isLike = false;
        

        
        
//         console.dir(target)
//         console.log(target.dataset.num)
//         // console.log(imgNum)
//         console.log(likedPhoto.has(target.id))
//         // console.log(target.className == 'like' && isLike && likedPhoto.has(imgNum))
//         // like.addEventListener("click", () => {
//             // if(target.className == 'like'){
                
//                 let imgNum = target.offsetParent.offsetParent.firstElementChild.dataset.num;
//                 let likeCount = document.querySelector('.like-count');
//                 if(likedPhoto.has(imgNum)){
//                     console.log('here')
//                 // isLike = false;
//                 numOfImg = likeCount.innerHTML = +likeCount.innerHTML - 1;
//                 like.setAttribute("src", "./img/heart.png");
//                 likedPhoto.delete(imgNum);
//                 console.log(likedPhoto)
//                 // return;
//                 // let index = likedPhoto.findIndex(photo => photo == target.id);
//                 // likedPhoto.splice(index, 1);
//             } else if(!likedPhoto.has(imgNum)) {
//                 numOfImg = likeCount.innerHTML = +likeCount.innerHTML + 1;
//             like.setAttribute('src', './img/heard-fulled.png');
//             likedPhoto.add(imgNum);
//             console.log(likedPhoto);
//             // return;
//             }
//                 // isLike = true;
            
            
//             // }

            
            
//             // if(isLike && likedPhoto.includes(target.id)){
//             //     like.setAttribute("src", "./img/heart.png");
//             //     // likedPhoto.filter((photo) => photo != target.id);
//             //     let index = likedPhoto.findIndex(photo => photo == target.id);
//             //     likedPhoto.splice(index, 1);
//             // }
//             // console.log(target.this)
//         // })

//         // function checkLike (){
//         //     if(target.className == 'like' && isLike && likedPhoto.has(target.id)){
//         //         isLike = false;
//         //         like.setAttribute("src", "./img/heart.png");
//         //         likedPhoto.delete(target.id);
//         //         console.log(likedPhoto)
//         //         return
//         //         // let index = likedPhoto.findIndex(photo => photo == target.id);
//         //         // likedPhoto.splice(index, 1);
//         //     }
//         // }

//         // like.addEventListener('click', checkLike);
//     })

    favImg.addEventListener('click', () => {

                container.style.display = 'none';
                containerForFavImg.style.display = 'flex';
                // let containerForFavImg = document.createElement('div');
                // containerForFavImg.classList.add('container-for-fav-img');
                // container.after(containerForFavImg); 
            
            // data.map((data) => {
            for(let value of likedPhoto){
                
                for(let j=0; j<data.length; j++){
                    
                    // console.log(value)
                    // console.log(data[j].id)
                    if(value == data[j].id){
                        console.log(data[j].urls.small)
                        console.log(likedPhoto)
let imgFav = document.createElement("img");
        imgFav.classList.add("gallery");
        // imgFav.classList.add("fav-img-checked");
        imgFav.setAttribute('id', data[j].id)
        imgFav.src = data[j].urls.small;
        imgFav.alt = data[j].alt_description;
        containerForFavImg.append(imgFav); 
                }
                
                }
            }

            if(container.style.display == 'none'){
                favImg.style.pointerEvents = 'none';
            }
            
        
            
        

        // setInterval(() => check(), 500)
        
    // })
        })
}



    let searchBtn = document.querySelector('button');

    function search () {
        if (searchField.value != '') {
            url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
            main.innerHTML = '';
            favImg.style.pointerEvents = 'auto';
            if(container.style.display == 'none'){
                container.style.display = 'flex';
                containerForFavImg.style.display = 'none';
            }
            let gallery = document.querySelectorAll('.gallery');
            if(gallery.length != 0){
                gallery.forEach((item) => {
                    item.remove();
                })
            }
            // console.log(searchField.value)
            // searchField.value = searchField.value;
            getData();
            // getData();
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