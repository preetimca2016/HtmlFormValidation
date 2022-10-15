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
    var salaryInput = document.querySelector('#salary');
    var output = document.querySelector('.salary-error')
    output.textContent = salaryInput.value;
    salaryInput.addEventListener('input', function(){
        output.textContent = salaryInput.value;
    });

   