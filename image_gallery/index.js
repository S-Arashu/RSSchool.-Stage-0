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

function showData(data) {


    
    

    data.map((data) => {
        const img = document.createElement("img");
        img.classList.add("gallery-img");
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