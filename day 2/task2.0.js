let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
if (username === "library" && password === "book123") {
  let borrow = confirm("Do you want to borrow a book?");
  if (borrow) {
    let category = prompt("Choose a book category:\n1 = Fiction\n2 = Science\n3 = History")
    switch (category) {
    case "1":
        alert("You selected Fiction");
        break;
    case "2":
        alert("You selected Science");
        break;
     case "3":
        alert("You selected History");
        break;
    default:
        alert("Invalid category");
        break;
    }
  } else {
    alert("Maybe next time! Goodbye!");
  }
} else {
  alert("Invalid login!");
}
