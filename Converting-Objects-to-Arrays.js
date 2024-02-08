// Write a function that converts an object into an array, 
// where each element represents a key-value pair in the form of an array.


// Examples

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []



function toArray(obj) {
    return Object.entries(obj);
}

// Example usage:
console.log(toArray({ a: 1, b: 2 }));           
console.log(toArray({ shrimp: 15, tots: 12 })); 
console.log(toArray({}));                       




// n this code, Object.entries(obj) returns an array of key-value pairs from the object. 
// The resulting array contains subarrays, 
// each representing a key-value pair in the form of [key, value].