const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1:
guests.unshift("BRUTUS");
guests; // (5) ['BRUTUS', 'ANTONY', 'CICERO', 'CASSIUS', 'CLEOPATRA']

// Question 1: You can type in guests; and you will be able to see the array of guests: (5) ['BRUTUS', 'ANTONY', 'CICERO', 'CASSIUS', 'CLEOPATRA']. You can also use guest[0]; to find the first element of the guests array.

// Step 2:
guests.push("AUGUSTUS", "LUCIA");

// Step 3:
const spartacusIndex = guests.indexOf("SPARTACUS");
// -1 (Staracus is not on the list.)

// Question 2: The value of spartacusIndex is SPARATUC wasn't invited would be -1.

// Step 4:
guests.splice(3, 1);
//  ['BRUTUS', 'ANTONY', 'CICERO', 'CLEOPATRA', 'AUGUSTUS', 'LUCIA']

// Step 5:
const specialGuests = guests.slice(0, 3);

// Step 6:
const honoredGuests = guests.slice(0, 2);
const otherGuests = guests.slice(2);
otherGuests.sort();
const sortedGuests = honoredGuests.concat(otherGuests);
