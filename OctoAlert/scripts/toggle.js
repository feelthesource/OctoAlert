var isOn = false;
var audio = new Audio(off);
var button = new Button();

document.addEventListener("deviceready", audio.initialise, false);

function on() {
    button.down();
    audio.play();
    isOn = true;
}

function off() {
    button.up();
    audio.stop();
    isOn = false;
}

function toggle() {
    if (isOn) {
        off();
    }
    else {
        on();
    }
}