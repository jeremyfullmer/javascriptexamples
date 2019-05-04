for (let i = 0; i < 10; i++) { //thi is your initializer, i is zero, "true" and less than 10.
    document.write(i + ": " + i*3 + "<br />");
}

let a = [1, 12, 14]    //this is our array.
let sum = 0;    //our sum is zero.
for (var i = 0; i < a.length; i++) {    // = for (var i of a) //a is the lenth of our array,"3"
    sum + = a[i];      // this is notation of accessing items in the array.
}               // parsing an array
html = "";
for (let i of custOrder) {
    html += "<li>" + i + "</li>";
}
//while loop!!!
//this condition will repeat until the condition is false.
//the check will happen first followed by math execution.


let i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}

//do while!!!!
//math first, check is second.

let i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end

// break !!!

or (let i = 0; i < 10; i++) {
    if (i == 5) { break; }          // stops and exits the cycle
    document.write(i + ", ");       // last output number is 4
}