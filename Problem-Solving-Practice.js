// === FizzBuzz ===
// if n is a positive integer and less than 100; returns nothing
// if n is greater than or equal to 100 or is a negative number; returns ERROR and code stops
// if n is divisible by 3; print Fizz
// if n is divisible by 5; print Buzz
// if n is divisible by both 3 and 5; print FizzBuzz

function fizzBuzz(n) {
  if (!Number.isInteger(n) || n >= 100 || n < 0) {
    console.log("ERROR");
    return;
  }

  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      console.log("FizzBuzz");
    } else if (divisibleBy3) {
      console.log("Fizz");
    } else if (divisibleBy5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// === Letter Count ===

// LetterCount (word); returns a dictionary with letter counts
// if word is not a string of alphabetical characters; returns ERROR and code stop
// create a dictionary to hold letter counts
// for each letter in word; if dictionary already has the letter; increment the count of the letter by 1
// else; set the count of the letter to 1
// return the dictionary that holds the letter counts

function letterCount(word) {
  const alphabet = "abcedfghijklmnopqrstuvwxyz";

  if (typeof word !== "string") {
    console.log("ERROR");
    return;
  }
  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.log("ERROR");
    }
  }

  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();

    if (letterCounts[lowerCaseLetter] !== undefined) {
      letterCounts[lowerCaseLetter]++;
    } else {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}
