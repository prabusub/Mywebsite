function game(){
    var age;
    var attempt = 1;
    
    while (age !== 35) {
        age = parseInt(prompt('Guess my age'));
      
        if (age < 35){
            alert('You guessed me as too young');
            attempt++;
                }
                else if (age > 35) {
                    alert('You guessed me as too old');
                    attempt++
                }else if (isNaN(age) || age === null) {
                    alert('Enter a number');
    
                }
    }
    alert('You guessed my age in ' + attempt + ' attempts')
    console.log('total guessses', attempt);
}
