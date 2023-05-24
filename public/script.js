// Declaring Constant Variables for Actual Checkboxes

const box = document.getElementById("boxImage");
const result = document.getElementById("result");

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

// Declaring Constant Variables for the Metrics

const openPopupButton = document.getElementById('openPopup');
const popupContainer = document.getElementById('popupContainer');
const closePopupButton = document.getElementById('closePopup');
const popup2 = document.getElementById('popupContainer2');
const openPopup2Button = document.getElementById('closePopup2');
const showPopup2 = () => {
    popup2.style.display = 'block';
};

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

// Declaring Event Listeners for 'On Click' interaction of permanent 'Hover State'

function toggleColor() {
    var button = document.getElementById('checklistButton');
    button.classList.toggle('clicked');
}

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

// Declaring Event Listeners for 'On Click' interaction with Metrics Container
openPopupButton.addEventListener('click', function() {
    popupContainer.style.display = 'block';
});

closePopupButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});

openPopup2.addEventListener('click', function() {
    popupContainer2.style.display = 'block';
});

// Metrics Calculations

function calculate() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var count = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            count++;
        }
    });

    var result1 = count * 450;
    var result2 = count * 400;
    var result3 = count * 750 / 1000;

    document.getElementById('result1').textContent = 'You will burn approximately ' + result1 + ' calories this week!';
    document.getElementById('result2').textContent = 'You will complete approximately ' + result2 + ' reps this week!';
    document.getElementById('result3').textContent = 'You will run approximately ' + result3 + ' kms this week!';

}

// Pop Up Container 3 When Checkbox Selected

function togglePopup(checkbox) {
    var container3 = document.getElementById("container3");

    if (checkbox.checked) {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

// Refresh button on Confirmation Page

document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload();
});

// Local Storage Elements 

// Saves checkbox inputs to local storage

function saveCheckboxStateToLocalStorage(checkboxId, isChecked) {

// Picks up existing states from local storage

    let checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || [];

    checkboxStates[checkboxID] = isChecked;

    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));

}

// Function to pick up checkbox states from local storage

function getCheckboxStateFromLocalStorage(checkboxID) {
    
    let checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};

    return checkboxStates[checkboxId] || false;
}

// Function to display selection history in terminal

function displaySelectionHistory() {

    let checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};

    for (var checkboxId in checkboxStates) {
        if (checkboxStates.hasOwnProperty(checkboxId)) {
            var isChecked = checkboxStates[checkboxId];

            var checkboxElement = document.getElementById(checkboxId);
            checkboxElement.checked = isChecked;
        }
    }
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(event) {
        var checkboxId = event.target.id;
        var isChecked = event.target.checked;

        saveCheckboxStateToLocalStorage(checkboxId, isChecked);
    });
});

displaySelectionHistory();

