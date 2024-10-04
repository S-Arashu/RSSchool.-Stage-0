"use strict";

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
    constructor(img, x, y, isPlayer){
        this.x = x;
        this.y = y;
        this.isPlayer = isPlayer;
        this.dead = false;

        this.image = new Image();
        this.image.src = img;
    }

    Update(){
        if(!this.isPlayer){
            this.y += speed;
        }
        
        if(this.y > canvas.height + 50){
            this.dead = true;
        }
    }

    Crash(car){
        let hit = false;

        if(this.y < car.y + car.image.height * size && this.y + this.image.height * size > car.y){
            if(this.x < car.x + car.image.width * size && this.x + this.image.width * size > car.x){
                hit = true;
            }
        }

        return hit;
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
let body = document.querySelector('body');

let size = .2;

Resize();

window.addEventListener('resize', Resize);

window.addEventListener('keydown', function(elem){ Keydown(elem) });

let cars = [];
let roads = [
    new Road("./img/road.jpg", 0),
    new Road("./img/road.jpg", 626),
];

let player = new Car("./img/car.png", window.innerWidth/2, window.innerHeight/2, true);
let speed = 5;

function Random(min, max){
    let num = min - .5 + Math.random() * (max - min + 1);
    return Math.round(num);
}

Start();

function Start (){
    timer = setInterval(Update, 1000 / 60);
    console.log(cars)
}

function Stop(){
    clearInterval(timer);
    body.style.overflow = '';
}

function Update(){
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    if(Random(0, 10000) > 9700){
        cars.push(new Car("./img/car_red.png", Random(30, canvas.width - 50), Random(250, 400) * -1, false));
    }

    player.Update();

    let isDead = false;

    for(let i=0; i<cars.length; i++){
        cars[i].Update();

        if(cars[i].dead){
            isDead = true;
        }
    }

    if(isDead){
        cars.shift();
    }

    let hit = false;

    for(let i=0; i<cars.length; i++){
        hit = player.Crash(cars[i]);

        if(hit){
            alert("Tsshhh!!!");
            Stop();
            player.dead = true;
            break;
        }
    }

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

    CreateCar(player);

    for(let i=0; i<cars.length; i++){
        CreateCar(cars[i]);
    }
}

function CreateCar(car){
    ctx.drawImage(
        car.image,
        0, 0,        
        car.image.width,
        car.image.height,
        car.x,
        car.y,
        car.image.width * size,
        car.image.height * size
    )
}

function Keydown(elem){
    switch(elem.keyCode){
        case 37:
            player.Move("x", -speed * 3);
            break;
        
        case 39:
            player.Move("x", speed * 3);
            break;

        case 38:
            player.Move("y", -speed * 3);
            break;

        case 40:
            player.Move("y", speed * 3);
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