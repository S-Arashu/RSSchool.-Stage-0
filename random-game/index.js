"use strict"

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let size = .1;

Resize();

window.addEventListener('resize', Resize);

window.addEventListener('keydown', function(elem){ Keydown(elem) });

let cars = [];
let roads = [];

let player = null;

function Start (){
    timer = setInterval(Update, 1000 / 60);
}

function Stop(){
    clearInterval(timer);
}

function Update(){
    Graphic()
}

function Graphic(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function Keydown(elem){
    switch(elem.keyCode){
        case 37:
            break;
        
        case 39:
            break;

        case 38:
            break;

        case 40:
            break;

        case 27:
            break;
    }
}

function Resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}