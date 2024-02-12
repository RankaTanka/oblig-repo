// JS for all functions used in index.html


// Function that retrieves information, then writes it into the Registered purchases table
function registerPurchase() {
    // A bunch of boolean validation checks, if one is true it is invalid and if one is false it is valid
    let ticketValidation = false;
    let firstNameValidation = document.getElementById("first-name").validity.patternMismatch;
    console.log(firstNameValidation);
    let lastNameValidation = document.getElementById("last-name").validity.patternMismatch;
    console.log(lastNameValidation);
    let phoneNumberValidation = document.getElementById("phone-number").validity.patternMismatch;
    console.log(phoneNumberValidation);
    // I wanted to just use typeMismatch to validate the Mail input, but it accepted values like "bob@gmail"
    let mailValidation = document.getElementById("mail").validity.patternMismatch;
    console.log(mailValidation);

    // Checking if the Tickets input value is valid,
    // if not ticketValidation is set to true and a message is shown
    if (document.getElementById("tickets").value === "" ||
        Math.round(Number(document.getElementById("tickets").value)) !==
        Number(document.getElementById("tickets").value)) {

        ticketValidation = true;
        alert("1");
    }

    // Checking if the First name input value is valid,
    // if not firstNameValidation is forcefully set to true and a message is shown
    if (document.getElementById("first-name").value === "" ||
        firstNameValidation === true) {

        firstNameValidation = true;
        alert("2");
    }

    // Checking if the Last name input value is valid,
    // if not lastNameValidation is forcefully set to true and a message is shown
    if (document.getElementById("last-name").value === "" ||
        lastNameValidation === true) {

        lastNameValidation = true;
        alert("3");
    }

    // Checking if the Phone number input value is valid,
    // if not phoneNumberValidation is forcefully set to true and a message is shown
    if (document.getElementById("phone-number").value === "" ||
        phoneNumberValidation === true) {

        phoneNumberValidation = true;
        alert("4");
    }

    // Checking if the Mail input value is valid,
    // if not mailValidation is forcefully set to true and a message is shown
    if (document.getElementById("mail").value === "" ||
        mailValidation === true) {

        mailValidation = true;
        alert("5");
    }


    // if all the validations are false the Purchase registration goes through
    if (!ticketValidation && !firstNameValidation && !lastNameValidation && !phoneNumberValidation && !mailValidation) {
        // This is an array containing all the selector and input elements, the elements in the array
        // are put in the same order the table headers are (Movie, Number of tickets, etc.)
        const purchaseInformation = document.getElementsByName("input");

        // Code generating the next row in the Registered purchases table
        // All values from the array are added to purchaseRow
        let purchaseRow = "<tr>";
        for (let input of purchaseInformation) {
            purchaseRow += "<td>" + input.value + "</td>";
        }
        purchaseRow += "</tr>";

        // Adds purchaseRow to the Registered purchases inner HTML
        document.getElementById("registered-purchases").innerHTML += purchaseRow;
    }
}


// Function that restarts the Registered purchases table
function removePurchases() {
    document.getElementById("registered-purchases").innerHTML = "";
}