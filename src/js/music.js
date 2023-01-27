let menuMusic,
    labMusic;

function playMenuMusic() {
    menuMusic = play("menuMusic", { seek: 16, volume: 0.1 });
}

function stopMenuMusic() {
    menuMusic.stop();
}

function playLabMusic() {
    labMusic = play("bipedalMech", { loop: true });
}

function stopLabMusic() {
    labMusic.stop();
}

export {
    playMenuMusic,
    stopMenuMusic,
    playLabMusic,
    stopLabMusic,
}