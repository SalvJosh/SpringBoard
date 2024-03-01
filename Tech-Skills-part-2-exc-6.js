const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  },
};

// Step 1:
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"],
};

// Step 2:
guests.CICERO.pastGifts.push("Golden Lyre");

// Step 3:
const antonyRegion = guests.ANTONY.region;

// Step 4:
delete guests.CICERO;

// Step 5:
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

// Question 1: The region of ANTONY is the original guests object will be 'Egypt'.
