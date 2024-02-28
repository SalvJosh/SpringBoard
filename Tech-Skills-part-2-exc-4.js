const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

// Step 1:

let locationStart = "";

if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
}

else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
}
else {
    locationStart = "Villa";
}

// Step 2:
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
     locationStart += " of Pompey";
}

// Step 3:
switch(emblemClue3) {
    case 7:
        locationStart += " North";
        break;
    case 3:
        locationStart += " South";
        break;
    case 9:
        locationStart += " East";
        break;
    case 4:
        locationStart += " West";
        break;
}

// Question: == checks if the values are equal. While === checks if the values and type are equal. It is recommended that we use === over == as it is more accurate.