"use strict";

let url = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=4arZoJEL1KuBR9gU7Mtfno9am5Ct7rzvjET3Jc3l9lQ&count=10`;

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.dir(data);

    if(res.ok && data.length){
        showData(data);
    }
    
}
getData();

function showData(data) {
    let main = document.querySelector(".container");
    // let newData = 

    data.map((data) => {
        const img = document.createElement("img");
        img.classList.add("gallery-img");
        img.src = data.urls.small;
        img.alt = data.alt_description;
        main.append(img); 
    })

    
}