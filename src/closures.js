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
  let counter = 0;

  return {
    getBalance: function() {
      return balance;
    },

    withdraw: function(amount) {

      let withdrawalObj = {
        type: "withdrawal",
        amount: amount,
        before: balance,
        after: balance,
        time: new Date(),
        status: ''
      };
      
      if ((balance - amount) >= 0  && amount > 0) {
        withdrawalObj.after = balance - amount;
        balance = balance - amount;
        withdrawalObj.status = 'approved';
        counter += 1;

      } else {
        withdrawalObj.status = 'denied';
      }
    
      return withdrawalObj;
    },

    deposit: function(amount) {

      let depositObj = {
        type: "deposit",
        amount: amount,
        before: balance,
        after: balance,
        time: new Date(),
        status: ''
      };

      if ((balance + amount) > balance) {
        depositObj.after = balance + amount;
        balance = balance + amount;
        depositObj.status = 'approved';
        counter += 1;

      } else {
        depositObj.status = 'denied';
      }
          
      return depositObj;
    },

    transactionHistory: function(n) {
      let history = {};
      history[`transaction${counter}`]

      return history;
    }
  };
}
