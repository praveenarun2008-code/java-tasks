if(confirm("Travel Fare Calculator \n\nClick Ok to continue..."))
    {
        let a = prompt("Enter the total distance (in km): ");
        let distance = Number(a);
        if(a>0)
    {
        let choice = prompt("Enter your choice\n\nTrain/Bus/Car/Aeroplane");
        switch(choice)
        {
            case "Train":
                {
                     let trainfare = 5;
                    let total = distance*trainfare;
                    alert("Total Fare: " + total);
                    break;
                }
            case "Bus":
                {
                     let busfare = 3;
                    let total = distance * busfare;
                    alert("Total Fare: " + total);
                    break;
                }
            case "Car":
                {
                    let carfare = 10;
                    let total = distance*carfare;
                    alert("Total Fare: " + total);
                    break;
                }
            case "Aeroplane":
                {
                    let aerofare = 50;
                    let total = distance*aerofare;
                    alert("Total Fare: " + total);
                    break;
                }
            default:
                {
                    alert("Invalid choice..")
                }
        }
    }
    else{
        alert("Invalid input! Please try again.")
    }
    }
    else{
        alert("Thankyou ..");
        location.reload();
    }
    