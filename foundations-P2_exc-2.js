const friend = "BRUTUS"
const shiftValue = 3;

// Step 1:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2:
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase())

// Question 1: In JavaScript the first character is given an index of 0, so that means the second character has an index of 1. 

// Step 3:
// const newIndex = index + shiftValue;
// const encryptedFirstLetter = alphabet[newIndex];

// Question 2: The modulus operater can be used to help wrap back around to the begining of the alphabet. 

// Step 4:
const alphabetLength = alphabet.length;

// Step 5:
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

// Step 6:
const encryptedCode = "EUXWXV";
const partialCode = encryptedCode.slice(0,3);
