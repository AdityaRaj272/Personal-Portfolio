function SetError(ID, Error) {
    var element = document.getElementById(ID);
   element.getElementsByClassName('Form-Error')[0].innerHTML = Error
}

function ClearErrors() {
    errors = document.getElementsByClassName('Form-Error');
    for (let item of errors) {
        item.innerHTML="";
    }
}

function ValidateForm() {
    var ReturnVal = true;

    ClearErrors();


    var Name = document.forms['MyForm']["Your Name"].value;
    var Email = document.forms['MyForm']["Your Mail"].value;
    var Phone = document.forms['MyForm']["Your Phone"].value;
    var FirstMail = Email[0];

    if (Name.length < 5) {
        SetError("Name", "*Length of name is too short");
        ReturnVal = false;

    }



    if ((!Email.includes('@'))|| (!Email.includes('.')) || (!/^[a-zA-Z_]$/.test(FirstMail))) {
        SetError("Mail", "*Invalid Email ID");

        ReturnVal = false;
    }




    if (!/^\d{10}$/.test(Phone)) {
        SetError("Phone", "*Invalid Phone number");
        ReturnVal = false;
    }




    return ReturnVal;
}
