//arrays!!!




<script type="text/javascript" src="arrays.js"> </script>
function dogs () {
let dogs = ["Bulldog", "Beagle", "Labrador"]; 
let dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item









//other methods. !!!!
// dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
// dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
// dogs.pop();                             // remove last element
// dogs.push("Chihuahua");                 // add new element to the end
// dogs[dogs.length-1] = "Chihuahua";        // the same as push
// dogs.shift();                           // remove first element
// dogs.unshift("Chihuahua");              // add new element to the beginning
// delete dogs[0];                         // change element to undefined (not recommended)
// dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
// var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
// dogs.slice(1,4);                        // elements from [1] to [4-1]
// dogs.sort();                            // sort string alphabetically
// dogs.reverse();                         // sort string in descending order
// x.sort(function(a, b){return a - b});   // numeric sort
// x.sort(function(a, b){return b - a});   // numeric descending sort
// highest = x[0];                         // first item in sorted array is the lowest (or highest) value
// x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort