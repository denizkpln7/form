const form = document.querySelector('#form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message){
  
        input.className = 'form-control is-invalid';
        const div = input.nextElementSibling;
        div.innerText = message;
        div.className = 'invalid-feedback';
}
function success(input){
    input.className='form-control is-valid';
}

function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value===""){
            error(input,"zorunlu alan");
        }else{
            success(input);
        }
    });
}


function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,"az sayı girdiniz");
    }
    else if(input.value.length>max){
        error(input,"fazla sayı girdiniz");
    }else{
        success(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı bir mail adresi');
    }
}

function checkPasswords(input1,input2){
    if(input1.value!==input2.value){
        error(input2,"hatalı şifre");
    }
}



form.addEventListener("submit",function(e){

    checkRequired([username,email,password,repassword]);
    checkLength(username,7,15);
    checkLength(password,7,12);
  
    checkEmail(email);
    e.preventDefault();
    checkPasswords(password,repassword);
})