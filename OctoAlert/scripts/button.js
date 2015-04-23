
function Button() {

    var octAlertButton = "octoAlertButton";

    this.down = function () {
        document[octAlertButton].src = 'images/alert_down.png';
    }

    this.up = function () {
        document[octAlertButton].src = 'images/alert_up.png';
    }
}