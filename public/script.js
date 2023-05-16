// Declaring Constant Variables for 'Day Buttons' 

const checklistButton = document.getElementById("checklistButton");
const checklistButton2 = document.getElementById("checklistButton2");
const checklistButton3 = document.getElementById("checklistButton3");
const checklistButton4 = document.getElementById("checklistButton4");
const checklistButton5 = document.getElementById("checklistButton5");

// Declaring Constant Variables for the Checklist Pop Up

const checklist = document.getElementById("checklist");
const checklist2 = document.getElementById("checklist2");
const checklist3 = document.getElementById("checklist3");
const checklist4 = document.getElementById("checklist4");
const checklist5 = document.getElementById("checklist5");

// Declaring Constant Variables for the 'Hide Buttons'

const closeButton = document.getElementById("closeButton");
const closeButton2 = document.getElementById("closeButton2");
const closeButton3 = document.getElementById("closeButton3");
const closeButton4 = document.getElementById("closeButton4");
const closeButton5 = document.getElementById("closeButton5");

// Attemped to use Query Selectors to create more succinct code here however after a lot of trial and error it did not want to function accordingly 15/05/23
// Declaring Event Listeners for 'On Click' interaction of 'Day Button'

checklistButton.addEventListener("click", function() {
    checklist.style.display = "block";
});

checklistButton2.addEventListener("click", function() {
    checklist2.style.display = "block";
});

checklistButton3.addEventListener("click", function() {
    checklist3.style.display = "block";
});

checklistButton4.addEventListener("click", function() {
    checklist4.style.display = "block";
});

checklistButton5.addEventListener("click", function() {
    checklist5.style.display = "block";
});

// Declaring Event Listeners for 'On Click' interaction of 'Hide Button'

closeButton.addEventListener("click", function() {
    checklist.style.display = "none";
});

closeButton2.addEventListener("click", function() {
    checklist2.style.display = "none";
});

closeButton3.addEventListener("click", function() {
    checklist3.style.display = "none";
});

closeButton4.addEventListener("click", function() {
    checklist4.style.display = "none";
});

closeButton5.addEventListener("click", function() {
    checklist5.style.display = "none";
});





