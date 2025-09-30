let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

if (age >= 18) 
{
alert(" you are eligible to vote.");
} else
{
 alert(" you are not eligible to vote.");
}

if(confirm("Do you want to check again")){
    location.reload()
}
else
{
 alert("goodbye");
}