function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.volume = volumeControler();
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function volumeControler() {
    const audioVolume = document.querySelector('#volume');
    return audioVolume.value
}

window.addEventListener('keydown', playSound);
window.addEventListener('change', volumeControler);