"use strict";

let searchField = document.querySelector('#search');
// searchField.addEventListener('onsubmit', () => { return false});
let url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;


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

function showData(data) {


    document.addEventListener("click", (e) => {
        let target = e.target;
        console.log(target.className)
        for(let i=0; i<data.length; i++){
            console.log(data[i].id)
            if(target.id == data[i].id){
            let bg = document.createElement('div');
            bg.classList.add('dark-block');
            body.append(bg);
            let item = document.createElement('div');
            item.classList.add('item-block');
            item.innerHTML = `
            <img src='${data[i].urls.regular}'></img>
            `
            body.append(item);

            document.body.style.overflow = 'hidden';
        }
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

    
}

    let searchBtn = document.querySelector('button');

    function search () {
        if (searchField.value != '') {
            url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=20&query=${searchField.value}`;
            main.innerHTML = '';
            // console.log(searchField.value)
            // searchField.value = searchField.value;
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