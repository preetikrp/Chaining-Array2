//Sort the numbers in descending order (10, 9, 8, 7, etc).
//Multiply each remaining number by 1.5 and then subtract 1.
//Then output (either in the DOM or the console) the sum of all the resulting numbers.

console.log("Hi JS");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log("Input Array:[" + integers + "]");

function myFunction() {
    integers.sort(function(a, b) {
        return a - b
    });

}
myFunction();
console.log("Sorted Array in Descending Order: [" + integers + "]");

function mynumbers(numbers) {
    return numbers < 19;
}

var filtered = integers.filter(mynumbers);
console.log("Removed greater than 19:[ " + filtered + "]");

var multipliednum = filtered.map(function(newfilered) {
    return (newfilered * 1.5) - 1;
});
console.log("Filtered array elements multiplied by 1.5 and then 1 subtracted from it : [" + multipliednum + "]");
