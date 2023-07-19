function validate(){
    var user=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var conformPassword=document.getElementById('confirm-password').value;
    checkUsername(user) 
    checkEmail(email) 
    checkPassword(password) 
    checkVal(password,conformPassword) 
}
  function checkUsername(user){
        if(user.length > 7){
            document.getElementById('username-error').innerText = ""
        }else{
            document.getElementById('username-error').innerText = "username must be 8 character"
        }
    }

  function checkEmail(email) {
        if(email.length > 8 && email.includes('@gmail.com')){
            document.getElementById('email-error').innerText = ""
        }else{
            document.getElementById('email-error').innerText = "Enter a valid email eg:username@gmail.com"
        }
    }
    function checkPassword(password){
        if(password.length > 8 && password.includes('.')){
            document.getElementById('password-error').innerText = ""
        }else{
            document.getElementById('password-error').innerText = "password must be 8 letters long and also includes ."
        } 
    }
    function checkVal(password,conformPassword){
        if(password=== password && conformPassword){
            document.getElementById('conformPassword-error').innerText = ""
        }else{
            document.getElementById('conformPassword-error').innerText = "Password do not match!"
        }
    }
