import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = document.querySelector("#vimeo-player")

const player = new Player(vimeo, {
    id: 19231868,
    width: 1000
});

if(localStorage.getItem("videoplayer-current-time")) {
    console.log(localStorage.getItem("videoplayer-current-time"))
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

player.on('timeupdate',  throttle(() => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds)
    }).catch(function(error) {
       if(error) {console.log("ошибка")} 
    });
  }, 1000)
); ;


