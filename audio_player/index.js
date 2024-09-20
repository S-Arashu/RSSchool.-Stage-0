'use strict';

let path = './music.json';

fetch(path)
.then(response => response.json())
.then(music_data => {

    let isPlay = false;
    let audio = document.querySelector('audio');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let playBtn = document.querySelector('.toggle-music');
    let img = document.querySelector('.toggle-music img')
    let length = document.querySelector('.length');
    let current = document.querySelector('.current');
    let timePlay = 0;

    let numOfTrack = 0;

    audio.addEventListener ('loadeddata', () => {
        length.textContent = getTime(audio.duration);
        audio.volume = .7;
    })

    setInterval(() => {
        let progress = document.querySelector("#progress");
        progress.style.width = audio.currentTime / audio.duration * 100 + "%";
        if(audio.currentTime / audio.duration * 100 < 10 || audio.currentTime / audio.duration * 100 > 90){
            progress.style.borderRadius = 50 + "%";
        } else {
            progress.style.borderTopRightRadius = 0;
            progress.style.borderBottomRightRadius = 0;
        }
        current.textContent = getTime(audio.currentTime)
    },500)

    audio.src = music_data[numOfTrack].song;

    function play(){
        
        if(!isPlay){
            audio.play();
            isPlay = true;
            img.setAttribute('src', './img/pause.png');
            img.style.margin = 0;
        } else if (isPlay) {
            audio.pause();
            isPlay = false;
            img.setAttribute('src', './img/play.png');
            img.style.marginLeft = 7 + "%";
        }
        
    }

    playBtn.addEventListener('click', play);
    next.addEventListener('click', () => {
        isPlay = false;
        numOfTrack += 1;
        
        if(numOfTrack > 14){
            numOfTrack = 0;
        }
        audio.src = music_data[numOfTrack].song;
        play();
    });

    prev.addEventListener('click', () => {
        isPlay = false;
        numOfTrack -= 1;
        
        if(numOfTrack < 0){
            numOfTrack = 14;
        }
        audio.src = music_data[numOfTrack].song;
        play();
    });

    

    function getTime(time){

        let sec = parseInt(time);
        let min = parseInt(sec / 60);
        sec -= min * 60;

        return `${min} : ${String(sec).padStart(2,0)}`
    }

});