// API youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// API youtube
function onYouTubePlayerAPIReady() {
player = new YT.Player('ytplayer', {
    videoId: '4xDzrJKXOOY'
});
}

// inicia a musica e define o volume em 10%
function startMusic() {
    player.setVolume(10)
    player.playVideo()
}

// para a musica
function stopMusic() {
    player.stopVideo()
}

// função que inicia a musica caso ela esteja ativa no local storage
function loadMusic() {
    const {switchStateMusic} = JSON.parse(localStorage.getItem('switchsState'))
    if(switchStateMusic === true) {
        startMusic()
    }
}