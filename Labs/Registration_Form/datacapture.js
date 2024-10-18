function display(){
    event.preventDefault(event);

    // var form = document.querySelector('form');

    var First_Name = document.getElementById("fName").value;
    var Last_Name = document.getElementById("lName").value;
    var Contact = document.getElementById("phoneNO").value;    
    var Email_ID = document.getElementById("email").value;
    var Date_Of_Birth = document.getElementById("DOB").value;
    var Gender = document.querySelector('input[name=Gender]').value;
    var Weight = document.getElementById("weight").value;
    var Package = document.querySelector('input[name=package]').value;
    var Diet_Plan = document.querySelector('input[name=DietaryPlan]').value;
    var Payment_mode = document.querySelector('input[name=paymentMethod]').value;
    var Questions = document.getElementById("questions").value;
}