var inputs = document.querySelectorAll('input');    
var submit = document.querySelector('button');    

// focus on first input
inputs[0].focus();

let MassageUserExist = false;
function UserIsExist() {
            for(let i=0; i<localStorage.length; i++){
                var key = localStorage.key(i);
            if(key == inputs[0].value)return true;
        }
    return false;
    }
let MassageUserNotExist = false;
inputs[0].addEventListener('blur', function(){
    if(UserIsExist() == false){
        // append InvalidMassage
        if(MassageUserNotExist == false){
        inputs[0].style.borderColor =  'rgb(207, 56, 56)';
        inputs[0].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)'; 
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = "We cannot find an account with that email address";
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[0].parentNode.appendChild(InvalidMassage);
        MassageUserNotExist = true;
        }
    }
    else{
        if(MassageUserNotExist == true){
                inputs[0].parentNode.removeChild(inputs[0].parentNode.lastChild);
                MassageUserExist = false;
            }
        inputs[0].style.borderColor =  'rgb(109, 240, 137)';
        inputs[0].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';
    }
});

// function TruePassword 
function TruePassword(){
    let user = JSON.parse(localStorage.getItem(inputs[0].value));
    // console.log(user);
    // console.log(inputs[1].value);
    if(user['password'] == inputs[1].value)return true;
    return false;
}


let MassagePassword = false;
// if(UserIsExist() == true ){
submit.addEventListener('click', function(ev){
    ev.preventDefault();
    if(UserIsExist() == true && TruePassword() == true){
        window.location.href = './index.html';

    }
    else{
        // console.log('Error');
        if(UserIsExist() == true){
            if(TruePassword() == false){
                if(MassagePassword == false){
                    // append InvalidMassage
                inputs[1].style.borderColor =  'rgb(207, 56, 56)';
                inputs[1].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)'; 
                let InvalidMassage = document.createElement('em');
                InvalidMassage.innerHTML = "The password you entered is incorrect";
                InvalidMassage.style.color = 'rgb(207, 56, 56)';
                InvalidMassage.style.left;
                InvalidMassage.style.fontSize = '12px';
                inputs[1].parentNode.appendChild(InvalidMassage);
                MassagePassword = true;
                }
            }
        }
    }
});
// }


if(UserIsExist() == true ){
inputs[1].addEventListener('blur', function(){
    if(TruePassword() == false && UserIsExist() == true){
        // append InvalidMassage
        if(MassagePassword == false){
        inputs[1].style.borderColor =  'rgb(207, 56, 56)';
        inputs[1].style.boxShadow = '0 0 4px 1px rgb(207, 56, 56)';
        let InvalidMassage = document.createElement('em');
        InvalidMassage.innerHTML = "The password you entered is incorrect";
        InvalidMassage.style.color = 'rgb(207, 56, 56)';
        InvalidMassage.style.left;
        InvalidMassage.style.fontSize = '12px';
        inputs[1].parentNode.appendChild(InvalidMassage);
        MassagePassword = true;
        }
    }
    else{
        if(MassagePassword == true){
                inputs[1].parentNode.removeChild(inputs[1].parentNode.lastChild);
                MassagePassword = false;
            }
            inputs[1].style.borderColor =  'rgb(109, 240, 137)';
            inputs[1].style.boxShadow = '0 0 4px 1px rgb(109, 240, 137)';
    }
});
}