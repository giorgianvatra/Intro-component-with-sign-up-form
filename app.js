
const form = document.getElementById('form'); 
const firstName = document.getElementById('firstName'); 
const lastName = document.getElementById('lastName'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const submitButton = document.getElementById('submitButton'); 

//event when the button is submitted
form.addEventListener('submit', (e) => { 
    //prevent default
    e.preventDefault()

    checkInputs();
});

// checking inputs

function checkInputs(){ 
    // get the values from the inputs

    const firstNameValue = firstName.value.trim(); 
    const lastNameValue = lastName.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
     
    //trim() - removes all the white spaeces 

    // >> condition for first name 

    if(firstNameValue === ''){ 
        //show error
        errorFunction(firstName)
    } else{ 
        //show success
        successFunction(firstName)
    }

    if(lastNameValue === ''){ 
        //show error
        errorFunction(lastName)
    } else{ 
        //show success
        successFunction(lastName)
    }    
    if(emailValue === ''){ 
        //show error
        errorFunction(email)
    } else if(!isEmail(emailValue)){

        errorFunction(email)

    } else{ 
        //show success
        successFunction(email)
    }
    if(passwordValue === ''){ 
        //show error
        errorFunction(password)
    } else{ 
        //show success
        successFunction(password)
    }    
}

function errorFunction(input){ 
    const formControl = input.parentElement;
    formControl.className = "form-changer invalid";
    
}

function successFunction(input){
    const formControl = input.parentElement;
    formControl.className = "form-changer valid";
    
}
function isEmail (email){ 
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


