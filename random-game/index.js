"use strict"



class Road {
    constructor (img, y){
        this.x = 0;
        this.y = y;

        this.image = new Image();
        this.image.src = img;
    }

    Update(road){
        this.y += speed;
        if(this.y > window.innerHeight){
            this.y = road.y - canvas.height + speed;
        }
    }
}

class Car {
    constructor(img, x, y){
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = img;
    }

    Update(){
        this.y += speed;
    }

    Move(coord, mov){
        if(coord == "x"){
            this.x += mov

            if(this.x + this.image.width * size > canvas.width){
                this.x -= mov;
            }

            if(this.x < 0){
                this.x = 0;
            }
        } else {
            this.y += mov;

            if(this.y + this.image.height * size > canvas.height){
                this.y -= mov;
            }

            if(this.y < 0){
                this.y = 0;
            }
        }
    }
}

let timer = null;

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let size = .2;

Resize();

window.addEventListener('resize', Resize);

window.addEventListener('keydown', function(elem){ Keydown(elem) });

let cars = [
    new Car("./img/car.png", window.innerWidth/2, window.innerHeight/2),
];
let roads = [
    new Road("./img/road.jpg", 0),
    new Road("./img/road.jpg", 626),
];

let player = 0;
let speed = 5;

Start();

function Start (){
    timer = setInterval(Update, 1000 / 60);
}

function Stop(){
    clearInterval(timer);
}

function Update(){
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    Graphic()
}

function Graphic(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i<roads.length; i++){
        ctx.drawImage(
            roads[i].image,
            0, 0,
            roads[i].image.width,
            roads[i].image.height,
            roads[i].x,
            roads[i].y,
            canvas.width,
            canvas.width
        )
    }

    for(let i=0; i<cars.length; i++){
        ctx.drawImage(
            cars[i].image,
            0, 0,
            cars[i].image.width,
            cars[i].image.height,
            cars[i].x,
            cars[i].y,
            cars[i].image.width * size,
            cars[i].image.height * size
        )
    }
}

function Keydown(elem){
    switch(elem.keyCode){
        case 37:
            cars[player].Move("x", -speed * 3);
            break;
        
        case 39:
            cars[player].Move("x", speed * 3);
            break;

        case 38:
            cars[player].Move("y", -speed * 3);
            break;

        case 40:
            cars[player].Move("y", speed * 3);
            break;

        case 27:
            if(timer == null){
                Start();
            } else {
                Stop();
            }
            break;
    }
}

function Resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}