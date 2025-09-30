let a = prompt("Budget Planner\n\nEnter your monthly income:");
       if(a>"0")
       {
        let income = Number(a);
        let b = prompt("Enter your Rent expense:");
        let rent = Number(b);
        let c = prompt("Enter your Grocery expense:");
        let groceries = Number(c);
        let d = prompt("Enter your Transport expense:");
        let transport = Number(d);
        let total = rent+groceries+transport;
        if(income>total)
    {
        let remaining = income-total;
        let percent = (total / income ) * 100;
        alert("Your Income :"+income+"\nTotal Expenses :"+total+"\nRemaining Balance :"+remaining+"\nPercentage Spent :"+percent+"%"+"\n\nYou are within Budget!");
        location.reload();
    }
    else if(income<total){
        alert("You are overspending!");
        location.reload();
    }
    else if(income == total)
    {
         let remaining = income-total;
        let percent = (total / income ) * 100;
        alert("Your Income :"+income+"\nTotal Expenses :"+total+"\nRemaining Balance :"+remaining+"\nPercentage Spent :"+percent+"%"+"\n\nSave money!");
        location.reload();
    }
    else{
        location.reload();
    }
}
else{
    alert("Thankyou...")
    location.reload()
}