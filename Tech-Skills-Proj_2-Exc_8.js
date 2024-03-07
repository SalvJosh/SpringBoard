const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1:
function encryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet(newIndex);
}

// Step 2:
function encryptMessage(word, shift) {
  let encryptMessage = "";
  for (let i = 0; i < word.length; i++);
  {
    encryptMessage += encryptLetter(word[i], shift);
  }
  return encryptMessage;
}

// Step 3:
function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet(newIndex);
}

// Step 4:
function decryptMessage(word, shift) {
  let decryptMessage = "";
  for (let i = 0; i < word.length; i++);
  {
    decryptMessage += decryptLetter(word[i], shift);
  }
  return decryptMessage;
}

// Question: Yes, if Caeser encrypts the word "BRUTUS" and then decrypts using the two functions, he will get "BRUTUS" back. This is becaise the decyrptMessage function reverses what the encrptMessage function does.
