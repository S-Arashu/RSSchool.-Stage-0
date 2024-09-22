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
    let containerProgress = document.querySelector('#container-progress');
    let volIcon = document.querySelector('#vol-icon');
    let volumeContainer = document.querySelector ('.volume-container');
    let volume = document.querySelector('.volume');
    let noMusic = document.querySelector('#no-music');
    let bg_img = document.querySelector('#bg_img');
    let songName = document.querySelector('#song-name');
    let songContainer = document.querySelector('.song-container');

    let numOfTrack = 0;

    audio.addEventListener ('loadeddata', () => {
        length.textContent = getTime(audio.duration);
        audio.volume = .5;
    })
console.log(volumeContainer)
    volIcon.addEventListener("click", () => {
        // console.log(volumeContainer)
        if (volumeContainer.style.display == "none") {
            volumeContainer.style.display = 'block';
            volume.style.display = 'block';
            noMusic.style.display = 'block';
        } else {
            volumeContainer.style.display = 'none';
            volume.style.display = 'none';
            noMusic.style.display = 'none';
        }
        
    })

    volumeContainer.addEventListener('click', event => {
        let currentVolume = event.offsetX / event.target.offsetWidth
        audio.volume = currentVolume;
        volume.style.width = currentVolume * 100 + '%';
    })

    noMusic.addEventListener("click", () => {
        audio.muted = !audio.muted;
        noMusic.classList.toggle('muted');
    })

    containerProgress.addEventListener("click", event => {

        let pastTime = event.offsetX / event.target.offsetWidth * audio.duration;
        audio.currentTime = pastTime;
    })

    setInterval(() => {
        let progress = document.querySelector("#progress");
        progress.style.width = audio.currentTime / audio.duration * 100 + "%";
        // if(audio.currentTime / audio.duration * 100 < 10 || audio.currentTime / audio.duration * 100 > 90){
        //     progress.style.borderRadius = 50 + "%";
        // } else {
        //     progress.style.borderTopRightRadius = 0;
        //     progress.style.borderBottomRightRadius = 0;
        // }
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

    audio.onended = function(){
        isPlay = false;
        numOfTrack += 1;
        
        if(numOfTrack > 14){
            numOfTrack = 0;
        }
        audio.src = music_data[numOfTrack].song;
        bg_img.setAttribute('src', music_data[numOfTrack].bg_img);
        songName.innerHTML = music_data[numOfTrack].name_song;
        songContainer.style.cssText = `
        background: linear-gradient(0deg, rgba(28, 27, 25, 1) 29%, rgba(28, 27, 25, 0) 51%, rgba(28, 27, 25, 1) 79%), url(${music_data[numOfTrack].img});
        background-size: cover;
        `
        play();
    }

    next.addEventListener('click', () => {
        isPlay = false;
        numOfTrack += 1;
        
        if(numOfTrack > 14){
            numOfTrack = 0;
        }
        audio.src = music_data[numOfTrack].song;
        bg_img.setAttribute('src', music_data[numOfTrack].bg_img);
        songName.innerHTML = music_data[numOfTrack].name_song;
        songContainer.style.cssText = `
        background: linear-gradient(0deg, rgba(28, 27, 25, 1) 29%, rgba(28, 27, 25, 0) 51%, rgba(28, 27, 25, 1) 79%), url(${music_data[numOfTrack].img});
        background-size: cover;
        `
        play();
    });

    prev.addEventListener('click', () => {
        isPlay = false;
        numOfTrack -= 1;
        
        if(numOfTrack < 0){
            numOfTrack = 14;
        }
        audio.src = music_data[numOfTrack].song;
        bg_img.setAttribute('src', music_data[numOfTrack].bg_img);
        songName.innerHTML = music_data[numOfTrack].name_song;
        songContainer.style.cssText = `
        background: linear-gradient(0deg, rgba(28, 27, 25, 1) 29%, rgba(28, 27, 25, 0) 51%, rgba(28, 27, 25, 1) 79%), url(${music_data[numOfTrack].img});
        background-size: cover;
        `
        play();
    });

    

    function getTime(time){

        let sec = parseInt(time);
        let min = parseInt(sec / 60);
        sec -= min * 60;

        return `${min} : ${String(sec).padStart(2,0)}`
    }

});

// Resources for icons:
// <a href="https://www.flaticon.com/ru/free-icons/" title="Пауза иконки">Пауза иконки от kmg design - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/google-play-" title="google play фильм иконки">Google play фильм иконки от Dmytro Vyshnevskyi - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/-" title="быстро назад иконки">Быстро назад иконки от Icon home - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/-" title="музыка и мультимедиа иконки">Музыка и мультимедиа иконки от Rakib Hassan Rahim - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/github" title="github иконки">Github иконки от Freepik - Flaticon</a>

console.log(`
Вёрстка +10
    вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5
    в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
Кнопка Play/Pause +10
    есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5
    внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5
    При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10
    При смене аудиотрека меняется изображение - обложка аудиотрека +10
    Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10
    Отображается продолжительность аудиотрека и его текущее время проигрывания +10
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10   
`)