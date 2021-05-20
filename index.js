function handleButtonClick() {
    var numberOfButtons = document.querySelectorAll('.drum').length

    for (var i = 0; i < numberOfButtons; i++) {

        document.querySelectorAll("button")[i].addEventListener("click", function() {
            var buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            makeSound(buttonInnerHtml);
        })
    }
}

function handleKeyboard() {
    document.addEventListener('keydown', function(event) {

        makeSound(event.key);

        buttonAnimation(event.key);
    })
}


function makeSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom4.mp3');
            audio.play();
            break;
    
        default:
            break
    }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    activeButton.classList.add("drumPressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
        activeButton.classList.remove("drumPressed")
    }, 250);
}

handleButtonClick();
handleKeyboard();
buttonAnimation();