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
  let transactionHistoryArr = [];

  let bankingObject = {
    getBalance: function() {
      return balance;
    },

    withdraw: function(amount) {
      let withdrawalObj = {
        type: "withdrawal",
        amount: amount,
        before: balance,
        after: balance - amount,
        time: new Date(),
        status: ''
      };
      
      if ((balance - amount) >= 0  && amount > 0) {
        balance -= amount;
        withdrawalObj.status = 'approved';
        transactionHistoryArr.push(withdrawalObj);
      } else {
        withdrawalObj.status = 'denied';
        withdrawalObj.after = balance;
        // transactionHistoryArr.push(withdrawalObj);

      }
    
      return withdrawalObj;
    },

    deposit: function(amount) {
      let depositObj = {
        type: "deposit",
        amount: amount,
        before: balance,
        after: balance + amount,
        time: new Date(),
        status: ''
      };

      if ((balance + amount) > balance) {
        balance += amount;
        depositObj.status = 'approved';
        transactionHistoryArr.push(depositObj);
      } else {
        depositObj.status = 'denied';
        depositObj.after = balance;

        // transactionHistoryArr.push(depositObj);
      }
          
      return depositObj;
    },

    transactionHistory: function(n) {
      let history = [];
      for (let i = 1; i <= n; i ++) {
          history.push(transactionHistoryArr[transactionHistoryArr.length - i]);
      };
      return history;
    },

    // averageTransaction: function() {
    //   let averages = {
    //     deposit: 0,
    //     withdrawal: 0
    //   };

    //   for (let i = 0; i < transactionHistoryArr.length; i++) {
    //     if (transactionHistoryArr[i].status === 'approved' && transactionHistoryArr[i].type === "deposit") {
    //       averages.deposit += transactionHistoryArr[i].amount;
    //     }
    //   }
    //   averages.deposit = averages.deposit / transactionHistoryArr.length
    //   averages.withdrawal = averages.withdrawal / transactionHistoryArr.length

    //   return averages;
    // }
  };
  return bankingObject;
};
