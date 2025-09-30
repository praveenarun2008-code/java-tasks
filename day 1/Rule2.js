
let number = "57"
let  num = Number(number)

if(num%2==0)
{
    console.log("Even")
}
else{
    console.log("Odd")
}

let daynumber = 5

switch(true)
{
    case(daynumber>=1 && daynumber<=5):
    {
        console.log("It's a Weekday")
        break
    
    }

    case(daynumber>5 && daynumber<8):
    {
        console.log("It's Weekend")
        break

    }

    default :{
        console.log("Invalid Day")
        break
    }

}