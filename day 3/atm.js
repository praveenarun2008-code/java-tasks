let correctPIN = "1234";
    let balance = 1000;
    let enteredPIN = prompt("Welcome to the ATM.\nPlease enter your PIN:");
    if (enteredPIN === correctPIN) {
      let choice = prompt(
        "Select an option:\n1. Withdraw\n2. Deposit\n3. Check Balance"
      );
      if (choice === "1") {
        let amount = prompt("Enter amount to withdraw:");
        amount = Number(amount);
        if (amount > 0 && amount <= balance) {
          balance = balance - amount;
          alert("Withdrawal successful! New balance: " + balance);
        } else {
          alert("Invalid amount or not enough balance.");
        }
      } else if (choice === "2") {
        let amount = prompt("Enter amount to deposit:");
        amount = Number(amount); 
               if (amount > 0) {
          balance = balance + amount;
          alert("Deposit successful! New balance: " + balance);
        } else {
          alert("Invalid amount.");
        }
    } else if (choice === "3") {
        alert("Your current balance is: " + balance);  
    } else {
        alert("Invalid choice.");
      }
} else {
      alert("Incorrect PIN. Access denied.");
    }