//Button Range
var salaryInput = document.querySelector('#salary');
var output = document.querySelector('.salary-error')
output.textContent = salaryInput.value;
salaryInput.addEventListener('input', function(){
    output.textContent = salaryInput.value;
});

//UC1:Name Validation
var text = document.querySelector("#name");
console.log(text);
var error = document.querySelector(".error");
text.addEventListener('input',function()
{
    var nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
    {
        error.textContent="";
    }
    else
        error.textContent="Name INVALID";
       
    });
    //UC2:Email Validation
    const Email = document.querySelector('#email');
    const emailError = document.querySelector('.email-error');
    emailError.addEventListener('input',function(){
        let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$"); 
        //checking email is valid or not.
        if(emailRegex.test(email.value))
        {
            emailError.textContent="";
        }
        else
        {
            emailError.textContent = "Email is invaild"
        }
    });
   

   