function displayData(event) {
    event.preventDefault()

    // Get the form element
    var form = document.querySelector('form');

    // Get values from the form inputs
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var table = document.createElement("table");
    table.border="1";

    var header = table.createTHead();
    var row = header.insertRow(0);
    row.insertCell(0).innerHTML = "<strong>S. No</strong>";
    row.insertCell(1).innerHTML = "<strong>Field</strong>";
    row.insertCell(2).innerHTML = "<strong>Value</strong>";

    var tbody = table.createTBody();

    var serialNo = 1;

    var nameRow = tbody.insertRow();
    nameRow.insertCell(0).innerText = serialNo++;
    nameRow.insertCell(1).innerText = "Name";
    nameRow.insertCell(2).innerText = name? name: "N/A";

    var phoneRow = tbody.insertRow();
    phoneRow.insertCell(0).innerText = serialNo++;
    phoneRow.insertCell(1).innerText = "Phone No";
    phoneRow.insertCell(2).innerText = phone? phone: "N/A";

    var phoneRow = tbody.insertRow();
    phoneRow.insertCell(0).innerText = serialNo++;
    phoneRow.insertCell(1).innerText = "Email";
    phoneRow.insertCell(2).innerText = email? email: "N/A";

     // Display the table in the output div
     document.getElementById("output").innerHTML = "";
     document.getElementById("output").appendChild(table);
 
     // Show an alert that the form was submitted
     alert("Form has been submitted successfully!");
 
     // Reset the form after submission
    //  document.querySelector('form').reset();
    form.reset();
}
