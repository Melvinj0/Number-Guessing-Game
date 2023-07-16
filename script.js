let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let chances = 5; 
let counter = 0; 

btn.addEventListener('click', function(){
    if (counter < chances) {
        let input = parseInt(document.getElementById('userinput').value);
        let number = Math.floor(Math.random() * 10);

        if (input === number) {
            output.innerHTML = `You Guessed right, Your number was ${number}`;
        } else if (input < number) {
            output.innerHTML = 'Your Guess is too low';
        } else if (input > number) {
            output.innerHTML = 'Your Guess is too High';
        }

        counter++;

        if (counter === chances) {
            output.innerHTML += "<br>Game Over! You've used all your chances.";
            btn.disabled = true;
        }
    }
});

