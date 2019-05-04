// if else!!!

if ((age >= 14) && (age < 19)) {        // logical condition
    status = "Eligible.";               // executed if condition is true
} 
else if ((age < 14) && (age > 9)){

}
else {                                // else block is optional
    status = "Not eligible.";           // executed if condition is false
}

//switching statement!!!

switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";          
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
} 

let i = 9
switch (i) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";          
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
} 