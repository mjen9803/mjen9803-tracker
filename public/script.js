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

// Container 3 When Checkbox Selected

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

// Pop Up 3 Bookings List

document.addEventListener('DOMContentLoaded', function() {

    function openPopup(popupId) {

        let popups = document.querySelectorAll('.popup');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });

        let popup = document.getElementById('popupContainer3');
        if (popup) {
            popup.style.display = 'block';
        }

    }

 document.getElementById('showBookingsButton').addEventListener('click', function() {
    openPopup('popupContainer3');
 });



document.getElementById('closePopup3').addEventListener('click', function() {
    let popup = document.getElementById('popupContainer3');
    if (popup) {
        popup.style.display = 'none';
    }
});

});

// Local Storage Element 1 
// If the user accidentally refreshes the web app before booking their classes - local storage will remember what the user has selected.
// This means users can return to this page whenever they would like and can see the classes they have booked.

// Saves checkbox selection to local storage

function saveSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var selectedCheckboxes = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedCheckboxes.push(checkbox.id);
        }
    });
    localStoragea.setItem('checkboxSelection', JSON.stringify(selectedCheckboxes));
}

// Loads checkbox selection from Local Storage 

function loadSelection() {
    var savedSelection = localStorage.getItem('checkboxSelection');
    if (savedSelection) {
        var selectedCheckboxes = JSON.parse(savedSelection);
        selectedCheckboxes.forEach(function(id) {
            var checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }   

}

// Event Listener for Local Storage Element 1

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', saveSelection);

});

window.addEventListener('load', loadSelection);

// // Local Storage Element 2
// // Track which checkboxes are selected and provide the user with a list of classes booked
// // Display list on pop up

// // Stores recently clicked checkboxes (checkbox value & label)
// function trackCheckboxSelection() {
//     let recentlyClickedCheckboxes = JSON.parse(localStorage.getItem('recentlyClickedCheckboxes')) || [];

// // All elements with checkbox input variable
//     let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

// // Storing in local storage

// checkboxes.forEach(function (checkbox) {
//     let checkboxValue = checkbox.value;
//     let checkboxLabel = checkbox.parentNode.textContent.trim();
//     let checkboxData = { value: checkboxValue, label: checkboxLabel };

//     recentlyClickedCheckboxes.unshift(checkboxData);
// });

// localStorage.setItem('recentlyClickedCheckboxes', JSON.stringify(recentlyClickedCheckboxes));

// displayRecentlyClickedCheckboxes();

// }

// // Function to display pop up for this information 
// // Function should retrieve from local storage and display in pop  up

// function displayRecentlyClickedCheckboxes() {
//     let recentlyClickedCheckboxes = JSON.parse(localStorage.getItem('recentlyClickedCheckboxes')) || [];

//     let popupContent3 = document.createElement('div');
//     popupContent3.classList.add('popup-content3');

//     if (recentlyClickedCheckboxes.length > 0) {
//         let title = document.createElement('h2');
//         title.textContent = 'Recently Booked Classes';

//         let checkboxList = document.createElement('ul');

//         recentlyClickedCheckboxes.forEach(function (checkboxData) {
//             let listItem = document.createElement('li');
//             listItem.textContent = checkboxData.label;

//             checkboxList.appendChild(listItem);
//         });

//         popupContent3.appendChild(title);
//         popupContent3.appendChild(checkboxList);
//     }   else {
//         popupContent3.textContent = 'No Recently Booked Classes';
//     }

// // Pop Up 3

//     let popup3 = document.createElement('div');
//     popup3.classList.add('popup3');
//     popup3.appendChild(popupContent3);

//     document.body.appendChild(popup3);
// }

// // Event Listener for 'Bookings' Button

// document.getElementById('showBookingsButton').addEventListener('click', trackCheckboxSelection);

// Function to display the recently checked checklists as a list on the website
function displayRecentlyCheckedChecklists() {
    let recentlyCheckedChecklists = JSON.parse(localStorage.getItem('recentlyCheckedChecklists')) || [];
  
    // Get the container element to display the checklists
    let checklistContainer = document.getElementById('recentlyCheckedChecklists');
  
    // Create an unordered list element
    let checklistList = document.createElement('ul');
  
    recentlyCheckedChecklists.forEach(function (checklistData) {
      let listItem = document.createElement('li');
      listItem.textContent = checklistData.label;
  
      checklistList.appendChild(listItem);
    });
  
    // Clear any existing content in the container
    checklistContainer.innerHTML = '';
  
    // Append the list to the container
    checklistContainer.appendChild(checklistList);
  }
  
  // Call the function to display the recently checked checklists on page load
  displayRecentlyCheckedChecklists();
  
  