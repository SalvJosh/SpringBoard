// Select the input element and the suggestions list element
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// List of fruits to be used for autocomplete suggestions
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

/**
 * Filters the fruit list based on the user's input.
 * {string} str - The user's input string.
 * {Array} - The filtered list of fruits.
 */
function search(str) {
  let results = [];
  const query = str.toLowerCase(); // Convert input to lowercase for case-insensitive search

  // Filters fruits array based on whether the query string is found in the fruit name (case-insensitive)
  results = fruit.filter((fruit) => fruit.toLowerCase().includes(query));

  return results; // Return the filtered list of fruits
}

/**
 * Event handler for the keyup event on the input field.
 * Calls the search function and shows the suggestions.
 * {Event} e - The event object.
 */
function searchHandler(e) {
  const inputVal = e.target.value; // Get the current value of the input field
  const results = search(inputVal); // Call the search function with the input value
  showSuggestions(results, inputVal); // Call showSuggestions to display the filtered list
}

/**
 * Displays the suggestions in the dropdown list.
 * {Array} results - The filtered list of fruits.
 * {string} inputVal - The current value of the input field.
 */
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ""; // Clear any existing suggestions

  // Check if there are results and the input value is not empty
  if (results.length > 0 && inputVal !== "") {
    suggestions.classList.add("has-suggestions"); // Add class to show suggestions
    results.forEach((results) => {
      const li = document.createElement("li"); // Create a new list item element
      li.textContent = results; // Set the text content of the list item to the fruit name
      suggestions.appendChild(li); // Append the list item to the suggestions list
    });
  } else {
    suggestions.classList.remove("has-suggestions"); // Remove class if no results or input is empty
  }
}

/**
 * Event handler for the click event on the suggestions list.
 * Populates the input field with the clicked suggestion.
 * {Event} e - The event object.
 */
function useSuggestion(e) {
  // Check if the clicked element is a list item
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent; // Set the input field value to the clicked suggestion
    suggestions.innerHTML = ""; // Clear the suggestions list
    suggestions.classList.remove("has-suggestions"); // Remove the suggestions class
  }
}

// Adds an event listener to the input field for keyup events
input.addEventListener("keyup", searchHandler);

// Adds an event listener to the suggestions list for click events
suggestions.addEventListener("click", useSuggestion);
