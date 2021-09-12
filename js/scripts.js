/*Computer generates random number.
If user guesses: wrong(ask again); right(say they won);
 */

function guessGame(){
    let generatedNr = Math.floor(Math.random()*11);
    //Math floor округляет(убирает доп.числа) Math random делает от 0 до 10 + рандомное число.
    let guess;

    do{
        guess = prompt("Guess the number from 0-10");
        if(generatedNr > guess){
            alert("You guessed to low")
            console.log();
        }
        else if (generatedNr < guess){
            alert("You guessed to high");
            console.log();
        }
    } while(generatedNr != guess);
    alert("You Won. Congrats");

}
guessGame();