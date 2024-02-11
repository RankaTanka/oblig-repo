// JS for all functions used in index.html

// Function that validates and registers information, then writes it into the webpage


function registerPurchase() {
    // Is an array containing all the selector and input elements, the elements in the array
    // are put in the same order the table headers are (Movie, Number of tickets, etc.)
    const purchaseInformation = document.getElementsByName("input");

    // Code generating the next row in the Registered purchases table
    let purchaseRow = "<tr>";
    // All values from the array are added to purchaseRow
    for (let input of purchaseInformation) {
        purchaseRow += "<td>" + input.value + "</td>";
    }
    purchaseRow += "</tr>";

    // Adds purchaseRow to the Registered purchases inner HTML
    document.getElementById("registered-purchases").innerHTML += purchaseRow;
}
