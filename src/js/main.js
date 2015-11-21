var goatDoors = [];

function pickWinner() {
    return Math.floor((Math.random() * 3) + 1);
}
var winDoor = pickWinner();
console.log('Winner:',winDoor);

for (var i = 1; i <= 3; i++) {
    if (i != winDoor) {
        goatDoors.push(i);
    }
}

var firstDoorOpened = false;
function showGoat(e) {

    if (!firstDoorOpened) {

        for (door in goatDoors) {
            // If the selected door is found in the goatDoors list:
            if (e.className.indexOf(goatDoors[door]) != -1) {
                // Remove the selected door from the delete list
                goatDoors.splice(door, 1);
            }
        }

        // Open one of the doors or the only door in the loseDoor list
        var showDoor = Math.floor(Math.random() * goatDoors.length);
        var elem = document.getElementById('threeDoors');
        var child = elem.children;
        openFirstDoor(child[goatDoors[showDoor]-1]);
    }

}

function openFirstDoor(door) {
    door.src = "img/goat.png";
    firstDoorOpened = true;
}