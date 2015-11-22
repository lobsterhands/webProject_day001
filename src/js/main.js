// Author: Lyle Denman
// Start: 21 November 2015

// Todo: selecting a door already opened is nish nish
// Todo: refactor
// Todo: Add highlight on short timer when text changes

var goatDoors = [];

var child = document.getElementById('threeDoors').children;

function pickWinner() {
    return Math.floor((Math.random() * 3) + 1);
}
var winDoor = pickWinner();

for (var i = 1; i <= 3; i++) {
    if (i != winDoor) {
        goatDoors.push(i);
    }
}

var count = 0;
function showGoat(e) {

    if (count == 0) {
        for (door in goatDoors) {
            // If the selected door is found in the goatDoors list:
            if (e.className.indexOf(goatDoors[door]) != -1) {
                // Remove the selected door from the delete list
                goatDoors.splice(door, 1);
            }
        }

        // Open one of the doors or the only door in the goatDoors list
        var showDoor = Math.floor(Math.random() * goatDoors.length);
        openFirstDoor(child[goatDoors[showDoor]-1]);
    }

    if (count == 1) {
        var win = (-1 != e.className.indexOf(winDoor));
        openSecondDoor(e, win);
    }

    count++;
}

var gameWords = document.getElementById('gameWords');
function openFirstDoor(door) {
    door.src = "img/goat.png";
    gameWords.innerHTML = "I've opened one of the losing doors to reveal: a well-formed goat. \<br> You can now " +
        "select either the same door or you may choose the other door. The choice is up to you.";

    firstDoorOpened = true;
}

function openSecondDoor(door, didWin) {
    if (didWin) {
        gameWords.innerHTML = "Congratulations! You win a brand new car!";
        door.src = "img/car.png";
    } else {
        gameWords.innerHTML = "Oh, no! You picked the wrong door. As a consolation prize, please keep these goats.";
        door.src = "img/goat.png";
    }

    secondDoorOpened = true;
}
