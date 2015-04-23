
function Audio(end) {

    var themeTune = null;

    this.play = function () {
        if (themeTune !== null) {
            themeTune.play();
        }
    }

    this.stop = function () {
        if (themeTune !== null) {
            themeTune.stop();
        }
    }

    this.initialise =function () {
        if (themeTune === null) {
            themeTune = new Media('www/sounds/theme_tune.mp3', end);
        }
    }
}