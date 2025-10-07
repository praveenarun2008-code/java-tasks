 try {
  let userName = prompt("Enter your name:");
  if (!userName) {
    alert("Name not entered. Exiting...");
    throw new Error("No name entered");
  }
  let confirmOrder = confirm(`Hello ${userName}! Do you want to order food?`);
  if (!confirmOrder) {
    alert("thank you have a nice day");
    throw new Error("you cancelled the order");
  }
  let menu = {
    "1": { "name": "Pizza", "price": 150 },
    "2": { "name": "Burger", "price": 100 },
    "3": { "name": "Sandwich", "price": 80 }
  };
  let menuText = "Menu:\n";
  for (let key in menu) {
    menuText += `${key} = ${menu[key].name} ${menu[key].price}\n`;
  }
  let choice = prompt(menuText + "\nEnter the number of the item you want:");
  if (!menu[choice]) {
    alert("Invalid choice!");
    throw new Error("Invalid menu choice");
  }
  let quantity = prompt(`How many ${menu[choice].name}s would you like?`);
  quantity = Number(quantity);

  if (isNaN(quantity) || quantity < 1) {
    alert("Invalid quantity!");
    throw new Error("Invalid quantity entered");
  }
  let total = menu[choice].price * quantity;
  let billPromise = new Promise((resolve, reject) => {
    if (total > 0) {
      let itemName = menu[choice].name;
      let plural = quantity > 1 ? "s" : "";
      resolve(`You ordered ${quantity} ${itemName}${plural}. Total = ${total}`);
    } else {
      reject("Error calculating bill!");
    }
  });
  billPromise
    .then(message => alert(message))
 } catch (error) {
   alert("Something went wrong: " + error.message);
 }
