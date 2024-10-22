document.addEventListener('DOMContentLoaded', function () {

    // Capturing and saving form data to local storage
    function saveForm() {
        let firstName = document.getElementById('fName').value;
        let lastName = document.getElementById('lName').value;
        let phoneNumber = document.getElementById('phoneNO').value;
        let email = document.getElementById('email').value;
        let dob = document.getElementById('DOB').value;
        let gender = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : '';
        let weight = document.getElementById('weight').value;
        let packageSelection = document.querySelector('select[name="package"]').value;
        let dietaryPlan = document.querySelector('input[name="DietaryPlan"]:checked') ? document.querySelector('input[name="DietaryPlan"]:checked').value : '';
        let paymentMethod = document.querySelector('select[name="paymentMethod"]').value;
        let questions = document.getElementById('questions').value;

        let formData = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            dob: dob,
            gender: gender,
            weight: weight,
            packageSelection: packageSelection,
            dietaryPlan: dietaryPlan,
            paymentMethod: paymentMethod,
            questions: questions
        };

        // Retrieve the existing form data array from localStorage, or initialize a new array if it doesn't exist
        let formEntries = JSON.parse(localStorage.getItem('formEntries')) || [];

        // Add the new form data to the array
        formEntries.push(formData);

        // Store the updated array back in localStorage
        localStorage.setItem('formEntries', JSON.stringify(formEntries));

        alert("Registered Successfully!");

        // Reset the form after saving
        document.getElementById('myForm').reset();
    }
    window.saveForm = saveForm;
});



//OLD CODE 
// document.addEventListener('DOMContentLoaded', function () {

//     //Capturing and saving form data to local storage
//     function saveForm() {
//         let firstName = document.getElementById('fName').value;
//         let lastName = document.getElementById('lName').value;
//         let phoneNumber = document.getElementById('phoneNO').value;
//         let email = document.getElementById('email').value;
//         let dob = document.getElementById('DOB').value;
//         let gender = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : '';
//         let weight = document.getElementById('weight').value;
//         let packageSelection = document.querySelector('select[name="package"]').value;
//         let dietaryPlan = document.querySelector('input[name="DietaryPlan"]:checked') ? document.querySelector('input[name="DietaryPlan"]:checked').value : '';
//         let paymentMethod = document.querySelector('select[name="paymentMethod"]').value;
//         let questions = document.getElementById('questions').value;

//         let formData = {
//             firstName: firstName,
//             lastName: lastName,
//             phoneNumber: phoneNumber,
//             email: email,
//             dob: dob,
//             gender: gender,
//             weight: weight,
//             packageSelection: packageSelection,
//             dietaryPlan: dietaryPlan,
//             paymentMethod: paymentMethod,
//             questions: questions
//         };

//         localStorage.setItem('formData', JSON.stringify(formData));

//         alert("Form data has been saved to localStorage!");

//         document.getElementById('myForm').reset();
//     }

//     function loadFormData() {
//         let storedData = localStorage.getItem('formData');

//         if (storedData) {
//             // let formData = JSON.parse(storedData);
//             // document.getElementById('fName').value = formData.firstName;
//             // document.getElementById('lName').value = formData.lastName;
//             // document.getElementById('phoneNO').value = formData.phoneNumber;
//             // document.getElementById('email').value = formData.email;
//             // document.getElementById('DOB').value = formData.dob;

//             document.getElementById('fName').value = formData.firstName || '';
//             document.getElementById('lName').value = formData.lastName || '';
//             document.getElementById('phoneNO').value = formData.phoneNumber || '';
//             document.getElementById('email').value = formData.email || '';
//             document.getElementById('DOB').value = formData.dob || '';

//             if (formData.gender === "Male") {
//                 document.getElementById('male').checked = true;
//             } else if (formData.gender === "Female") {
//                 document.getElementById('female').checked = true;
//             }

//             document.getElementById('weight').value = formData.weight;
//             document.querySelector('select[name="package"]').value = formData.packageSelection;

//             if (formData.dietaryPlan === "Veg") {
//                 document.getElementById('veg').checked = true;
//             } else if (formData.dietaryPlan === "Non-Veg") {
//                 document.getElementById('nonveg').checked = true;
//             }

//             document.querySelector('select[name="paymentMethod"]').value = formData.paymentMethod;
//             document.getElementById('questions').value = formData.questions;
//         }
//     }

//     loadFormData();

//     window.saveForm = saveForm;

// });