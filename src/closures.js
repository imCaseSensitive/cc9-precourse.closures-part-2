/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(upperBound) {
  let answer = randomInteger(upperBound);
  let guessCounter = 0;

  const gameDirectory = {
    reset () {
      let previousAnswer = answer;
      guessCounter = 0;
      answer = randomInteger(upperBound);
      if (previousAnswer === answer) {
        this.reset();
      }
    },

    giveUp () {
      let previousAnswer = answer;
      this.reset();
      return previousAnswer;
    },

    guess (guessedNumber) {
      if (guessedNumber === answer) {
        guessCounter += 1;
        return true;
      } else {
        guessCounter += 1;
        return false;
      };
    },

    numberGuesses () {
      return guessCounter;
    }
  };
  return gameDirectory;
};



function accountGenerator(initial) {
  let balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}
