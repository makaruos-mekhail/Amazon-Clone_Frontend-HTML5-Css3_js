var inputs = document.querySelectorAll('input');
var submit = document.querySelector('button');

// focus on first input
inputs[0].focus();

let error0 = false, error1 = false, error2 = false, error3 = false;
// name validation
inputs[0].addEventListener('keydown', function(ev) {
    const regex = /^[a-zA-Z ]/;
    if (regex.test(ev.key)) { 
        return;
    }
    else {
        ev.preventDefault();
    }
});

// function validateName
function validateName() {
    if(inputs[0].value.length >= 3) {
        inputs[0].style.borderColor =  'rgb(109, 240, 137)';
        inputs[0].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';
        // remove InvalidMassage message
        if(error0){
        inputs[0].parentNode.removeChild(inputs[0].parentNode.lastChild);
        error0 = false;
        }
    }
    else {
        inputs[0].style.borderColor =  'rgb(207, 56, 56)';
        inputs[0].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)';
    }
    
}

// function validateMobileOrEmail
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexPhone = /^(011|012|010|015)[0-9]{8}$/;
function validateMobileOrEmail() {
        if(UserIsExist() == false){
        if (regex.test(inputs[1].value)) {
            inputs[1].style.borderColor =  'rgb(109, 240, 137)';
            inputs[1].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';
            // remove InvalidMassage message
            if(error1){
                inputs[1].parentNode.removeChild(inputs[1].parentNode.lastChild);
                error1 = false;
                }
            }
            else {
                inputs[1].style.borderColor =  'rgb(207, 56, 56)';
                inputs[1].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)';
            }
        }
}

// function validatePassword
function validatePassword() {
    if(inputs[2].value.length < 8) {
        inputs[2].style.borderColor =  'rgb(207, 56, 56)';
        inputs[2].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)';        }
    else {
        inputs[2].style.borderColor =  'rgb(109, 240, 137)';
        inputs[2].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';        
        // remove InvalidMassage
        if(error2){
        inputs[2].parentNode.removeChild(inputs[2].parentNode.lastChild);
        error2 = false;
        }
    }
}

// function validateConfirmPassword
function validateConfirmPassword() {
    if(inputs[3].value === inputs[2].value && inputs[3].value.length >= 8) {
        inputs[3].style.borderColor =  'rgb(109, 240, 137)';
        inputs[3].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';    
        // remove InvalidMassage
        if(error3){
        inputs[3].parentNode.removeChild(inputs[3].parentNode.lastChild);
        error3 = false;
        }
    }
    else {
        inputs[3].style.borderColor =  'rgb(207, 56, 56)';
        inputs[3].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)';        
    }
}

// function UserIsExist
// var users = [];
let MassageUserExist = false;
function UserIsExist() {
    // let users = JSON.parse(localStorage.getItem();
    for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            // users.push(key);
            var value = localStorage.getItem(key);
            if(key == inputs[1].value) {
                // append InvalidMassage message
                if(MassageUserExist == false){
                inputs[1].style.borderColor =  'rgb(207, 56, 56)';
                inputs[1].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)'; 
                let InvalidMassage = document.createElement('em');
                InvalidMassage.innerHTML = 'This email is already registered';
                InvalidMassage.style.color = 'rgb(207, 56, 56)';
                InvalidMassage.style.left;
                InvalidMassage.style.fontSize = '12px';
                inputs[1].parentNode.appendChild(InvalidMassage);
                MassageUserExist = true;
                }
                return true;
            }
        }
        if(MassageUserExist == true){
            inputs[1].parentNode.removeChild(inputs[1].parentNode.lastChild);
            MassageUserExist = false;
        }
        
    return false;
}

// name validation
inputs[0].addEventListener('focusout', validateName);

// Phon or email validation
inputs[1].addEventListener('focusout', UserIsExist);

inputs[1].addEventListener('focusout', validateMobileOrEmail );

// password validation
inputs[2].addEventListener('focusout', validatePassword);

// confirm password validation
inputs[3].addEventListener('focusout', validateConfirmPassword);

// function UserIsExist return true if user is exist


// submit button validation
var cntInName = 0, cntInEmail = 0, cntInPassword = 0, cntInConfirmPassword = 0;
submit.addEventListener('click', function(ev) {
    ev.preventDefault();

    // Wrong or Invalid name
    if(inputs[0].value.length < 3 && error0 == false) {
        error1 = true;
        inputs[0].style.borderColor =  'rgb(207, 56, 56)';
        // append InvalidMassage 
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = 'Name must be at least 3 characters';
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[0].parentNode.appendChild(InvalidMassage);
        error0 = true;
        }
    // Wrong or Invalid email address
    if (regex.test(inputs[1].value) == false) {
        if(error1 == false) {
        inputs[1].style.borderColor =  'rgb(207, 56, 56)';
        // append InvalidMassage message
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = 'Invalid email address. Please correct and try again.';
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[1].parentNode.appendChild(InvalidMassage);
        error1 = true;
        }
    }
    if(inputs[2].value.length < 8 && error2 == false) {
        inputs[2].style.borderColor =  'rgb(207, 56, 56)';
        // append InvalidMassage message
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = 'Password must be at least 8 characters';
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[2].parentNode.appendChild(InvalidMassage);
        error2 = true;
    }
    if(inputs[3].value !== inputs[2].value && error3 == false) {
        inputs[3].style.borderColor =  'rgb(207, 56, 56)';
        // append InvalidMassage message
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = 'Password does not match';
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[3].parentNode.appendChild(InvalidMassage);
        error3 = true;
    }

    else{
        // remove  InvalidMassage 
        // if(found = inputs[1].parentNode.lastChild.nodeName == 'em')
        // inputs[1].parentNode.removeChild(inputs[1].parentNode.lastChild);

        // sava data in local storage

        // var data = {};
        // for (var i = 0; i < inputs.length; i++) {
        //     data[inputs[i].name] = inputs[i].value;
        // }
        
        // // console.log(data);
        // localStorage.setItem(inputs[1].value, JSON.stringify(data));
        // window.location.href = "../Login/index.html";
    }
});
submit.addEventListener('click', function(ev) {
    ev.preventDefault();
    if(error0 == false && error1 == false && error2 == false && error3 == false) {
        var data = {};
        for (var i = 0; i < inputs.length; i++) {
            data[inputs[i].name] = inputs[i].value;
        }
        // console.log(data);
        localStorage.setItem(inputs[1].value, JSON.stringify(data));
        window.location.href = "./Sign_in.html";
    }
});
// localStorage.clear();


// // submit button validation
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     var data = {};
//     for (var i = 0; i < inputs.length; i++) {
//         data[inputs[i].name] = inputs[i].value;
//     }
//     console.log(data);
//     });

// // sava data in local storage
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     var data = {};
//     for (var i = 0; i < inputs.length; i++) {
//         data[inputs[i].name] = inputs[i].value;
//     }
//     console.log(data);
//     localStorage.setItem('data', JSON.stringify(data));
//     });

// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     var data = {};
//     for (var i = 0; i < inputs.length; i++) {
//         data[inputs[i].name] = inputs[i].value;
//     }
//     console.log(data);
//     });