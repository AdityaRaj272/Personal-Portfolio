var DrumNumber = document.querySelectorAll(".Drum").length;

for (var i = 0; i < DrumNumber; i++) {
    document.querySelectorAll(".Drum")[i].addEventListener("click", Clicked);
}

function Clicked() {
    var ButtonInnerHTML= this.innerHTML;
    MakeSound(ButtonInnerHTML);
    ButtonAmimation(ButtonInnerHTML);
    
}


document.addEventListener("keypress", Event);

function Event(Input){
    MakeSound(Input.key);
    ButtonAmimation(Input.key);
}

function ButtonAmimation(Key) {
    var Active= document.querySelector("."+ Key); 
    Active.classList.add("Pressed");

    setTimeout(Remove, 100);

    function Remove() {
        Active.classList.remove("Pressed")
    }
}


function MakeSound(Key) {
    switch (Key) {
        case "W":
            var Tom1 = new Audio("Sounds/Tom-1.mp3");
            Tom1.play();
            break;

        case 'A':
            var Tom2 = new Audio('Sounds/Tom-2.mp3');
            Tom2.play();
            break;

        case 'S':
            var Tom3 = new Audio('Sounds/Tom-3.mp3');
            Tom3.play();
            break;

        case 'D':
            var Tom4 = new Audio('Sounds/Tom-4.mp3');
            Tom4.play();
            break;

        case 'J':
            var Snare = new Audio('Sounds/Snare.mp3');
            Snare.play();
            break;

        case 'K':
            var Crash = new Audio('Sounds/Crash.mp3');
            Crash.play();
            break;

        case 'L':
            var Kick = new Audio('Sounds/Kick-Bass.mp3');
            Kick.play();
            break;






        case "w":
            var Tom1 = new Audio("Sounds/Tom-1.mp3");
            Tom1.play();
            break;

        case 'a':
            var Tom2 = new Audio('Sounds/Tom-2.mp3');
            Tom2.play();
            break;

        case 's':
            var Tom3 = new Audio('Sounds/Tom-3.mp3');
            Tom3.play();
            break;

        case 'd':
            var Tom4 = new Audio('Sounds/Tom-4.mp3');
            Tom4.play();
            break;

        case 'j':
            var Snare = new Audio('Sounds/Snare.mp3');
            Snare.play();
            break;

        case 'k':
            var Crash = new Audio('Sounds/Crash.mp3');
            Crash.play();
            break;

        case 'l':
            var Kick = new Audio('Sounds/Kick-Bass.mp3');
            Kick.play();
            break;

        default:
            console.log(ButtonInnerHTML);
    }
}