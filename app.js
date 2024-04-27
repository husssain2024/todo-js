// Ask the user for their name, gender, and age
const userName = prompt("Please enter your name:");
const userGender = prompt("Please enter your gender (male or female):");
const userAge = parseInt(prompt("Please enter your age:"), 10);

// Validate the age and alert if it's less than or equal to zero
if (userAge <= 0) {
    alert("Age must be greater than zero.");
}

// If valid, insert user information into the HTML
const infoSection = document.getElementById("user-info");

// Format the welcome message based on gender
let title;
if (userGender.toLowerCase() === "male") {
    title = "Mr.";
} else if (userGender.toLowerCase() === "female") {
    title = "Ms.";
} else {
    title = ""; // If the gender input is invalid
}

const formattedInfo = `
    <h2>Welcome, ${title} ${userName}</h2>
    <p>Gender: ${userGender}</p>
    <p>Age: ${userAge}</p>
`;

// Insert the formatted information into the HTML page
infoSection.innerHTML = formattedInfo;
