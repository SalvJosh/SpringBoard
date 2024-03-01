const friend = "BRUTUS";
const shiftValue = 3;

// Step 1:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2:
let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

// Question 1: A loop allows you to more cleanly write the code and keep it organized.

// Question 2: % alphabet.length allows for the code to wrap around the alphabet when it gets to z.
