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

        if(this.y < car.y + car.image.height * size && this.y + this.image.height * size >= car.y){
            if(this.x < car.x + car.image.width * size && this.x + this.image.width * size >= car.x){
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
let darkBlock = document.querySelector(".dark-block");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let emptyPlace = document.querySelector(".empty-place");
let bestTime = document.querySelector(".score");
let start;
let end;
let time;
let score = [];
let level = document.querySelector("#quantity");
let count = 9750;

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

level.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        console.log(e.target.value)
        if(e.target.value > 10 || e.target.value < 0){
            alert("Please, enter number from 0 to 10")
        } else {
            speed += +e.target.value;
            count -= +e.target.value * 10;
            Start();
        }
    }
})

function Random(min, max){
    let num = min - .5 + Math.random() * (max - min + 1);
    return Math.round(num);
}

yes.addEventListener("click", Start);
no.addEventListener("click", () => {
    emptyPlace.innerHTML = "It was a great race!"
})

function Start (){
    timer = setInterval(Update, 1000 / 60);
    darkBlock.classList.toggle('disappear');
    emptyPlace.innerHTML = '';
    body.style.overflow = 'hidden';
    start = new Date().getTime();
}

function Stop(){
    clearInterval(timer);
    speed = 5;
    darkBlock.classList.toggle('disappear');
    body.style.overflow = '';
    cars.length = 0;
    end = new Date().getTime();
    time = end - start;
    score.push(time);
    score.sort(function (a, b) {
        return b - a;
    });
    if(score.length > 10){
        score.pop();
    }
    localStorage.setItem("score", score)
    if(localStorage.length != 0){
        bestTime.innerHTML = '';
        bestTime.style.justifyContent = 'flex-start';
        let p = document.createElement("p");
        // bestTime.prepend(p);
        p.innerHTML = `Score`;
        p.classList.add("time-table");
        let ol = document.createElement('ol');
        bestTime.prepend(ol);
        ol.before(p);
        let data = localStorage.score.split(",");
        console.log(localStorage.score)
        console.log(data)
        console.log(data.length)
        console.log(data)
        console.log(data.length)
        for(let i=0; i<data.length; i++) {
        let li = document.createElement('li');
        if(Math.round(data[i] / 60000) > 0){
            li.innerHTML = `${Math.round(data[i] / 60000)} min ${Math.round(data[i] / 1000) % 60} sek`;
        } else {
            li.innerHTML = `${Math.round(data[i] / 1000)} sek`;
        }
        ol.append(li);
        }
    }
    
}

function Update(){
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    let bots;

    random: if(Random(0, 10000) > count){
        
        bots = new Car("./img/car_red.png", Random(30, canvas.width - 50), Random(250, 400) * -1, false);
        console.log(bots.y)
        for(let i=0; i<cars.length; i++){
        // for(let j=0; j<cars.length; j++){
            if(bots.Crash(cars[i])){
                // cars = cars.filter((car) => car !== cars[j]);
                return;
            }
        // }
            
        }
        
        cars.push(bots);
        
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
            Stop();
            player.dead = true;
            // time = end - start;
            // score.push(time);
            // localStorage.setItem("score", score)
            console.log(time)
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
            player.Move("x", -speed * 4);
            break;
        
        case 39:
            player.Move("x", speed * 4);
            break;

        case 38:
            player.Move("y", -speed * 4);
            break;

        case 40:
            player.Move("y", speed * 4);
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