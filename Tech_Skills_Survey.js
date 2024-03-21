const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let counter = 0; // Counter to track every two letters
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[a-z]/i)) {
      // Match is used to return characters as letters if the char is a letter. Reference used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
      let charIndex = alphabet.indexOf(char.toLowerCase());
      let encryptedIndex = (charIndex + shiftValue) % alphabet.length;
      if (encryptedIndex < 0) {
        encryptedIndex += alphabet.length; // Wrap around for negative indices
      }
      if (char === char.toUpperCase()) {
        encryptedMessage += alphabet[encryptedIndex].toUpperCase();
      } else {
        encryptedMessage += alphabet[encryptedIndex];
      }
    } else {
      encryptedMessage += char;
    }
    counter++;
    if (counter === 2) {
      // Inserts a random letter after every 2 letters
      let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      encryptedMessage += randomLetter;
      counter = 0; // Resets the counter
    }
  }
  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let counter = 0; // Counter to track every two letters
  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i];
    if (char.match(/[a-z]/i)) {
      let charIndex = alphabet.indexOf(char.toLowerCase());
      let decryptedIndex = (charIndex - shiftValue) % alphabet.length;
      if (decryptedIndex < 0) {
        decryptedIndex += alphabet.length; // Wrap around for negative indices
      }
      if (char === char.toUpperCase()) {
        decryptedMessage += alphabet[decryptedIndex].toUpperCase();
      } else {
        decryptedMessage += alphabet[decryptedIndex];
      }
    } else {
      decryptedMessage += char;
    }
    counter++;
    if (counter === 2) {
      // Skips after every 2 letters, removing the random letters added during encryption
      i++;
      counter = 0; // Resets the counter
    }
  }
  return decryptedMessage;
}
