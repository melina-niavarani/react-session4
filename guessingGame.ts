function guessing_game(){
    let target_number: number = Math.floor(Math.random() * 10) + 1
    let number_of_guesses: number = 0;
    const possible_guesses = 5

    while(number_of_guesses < possible_guesses) {
        let guess = parseInt(prompt("guess a number between (1-10):")) ;
        if (guess === target_number) {
            console.log("Congrats! You won.");
        }else {
            console.log("Try again.", target_number);
            number_of_guesses ++;
        }
    }
}

guessing_game()