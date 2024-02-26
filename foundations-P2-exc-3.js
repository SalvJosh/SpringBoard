// Step 1:
const randomDecimal = Math.random();

// Setp 2:
const range = 33 - 3 + 1;

// Question 1: 1 was added to the difference between 33 and 3 because there are 31 values from 3 to 33 and if you subtract 3 from 33, the result is 30.

// Step 3:
const randomInRange = randomDecimal * range;

// Question 2: Multiplying the randomDecimal by the range will allow for the randomInRange value to fall within the range.

// Step 4:
const randomInt = Math.floor(randomInRange);

// Question 3: We used Math.floor() instead of Math.round() becuase we wanted to round down and not round up.

// Step 5:
const shiftValue = randomInt + 3;

// Question 4: Adding 3 to randomInt ensures that our final shiftValue falls between 3 and 33 becuase the randomInt had range of 0 to 30 and we need the final values to fall between 3 and 33. 