function randomWinDoor() {

    return Math.floor((Math.random() * 3) + 1);
}
var winDoor = randomWinDoor();
console.log(winDoor);

var showGoat = function (e) {
    e.src = "img/goat.png";
    console.log(-1 != e.className.indexOf("door1"));

    for (var i = 0; i < document.getElementById('threeDoors').getElementsByTagName('*'); i++)
    {
        console.log(i);
    }
};

window.onLoad = randomWinDoor();