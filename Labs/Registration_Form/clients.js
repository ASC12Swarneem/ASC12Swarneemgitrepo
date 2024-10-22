document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data from localStorage
    let storedData = JSON.parse(localStorage.getItem('formEntries')) || [];

    const tableBody = document.getElementById('clientsTable').getElementsByTagName('tbody')[0];

    if (storedData.length > 0) {
        storedData.forEach(function (data) {
            const row = tableBody.insertRow(); 

            Object.values(data).forEach(function (value) {
                const cell = row.insertCell();
                cell.textContent = value;
            });
        });
    } else {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 11; 
        cell.textContent = "No data available";
    }
});
