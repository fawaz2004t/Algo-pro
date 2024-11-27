// Get the sentence from the user
var sentence = "Hello, world!";

// Count the number of characters
var length = sentence.length;

// Count the number of words
var words = sentence.trim().split(/\s+/).length;

// Count the number of vowels
var vowels = sentence.match(/[aeiouAEIOU]/g)?.length || 0;

// Show the results
console.log("Length of the sentence: " + length + " characters");
console.log("Number of words: " + words);
console.log("Number of vowels: " + vowels);