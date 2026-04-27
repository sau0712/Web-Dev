function validateSignup() {

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let user = document.getElementById("user").value.trim();
let pass = document.getElementById("pass").value.trim();
let cpass = document.getElementById("cpass").value.trim();

document.getElementById("nameError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("userError").innerHTML = "";
document.getElementById("passError").innerHTML = "";
document.getElementById("cpassError").innerHTML = "";

let valid = true;

/* Full Name */
if(name == ""){
document.getElementById("nameError").innerHTML = "Enter full name";
valid = false;
}

/* Email */
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML = "Invalid email";
valid = false;
}

/* Username */
if(user == ""){
document.getElementById("userError").innerHTML = "Enter username";
valid = false;
}

/* Password */
if(pass.length < 6){
document.getElementById("passError").innerHTML = "Minimum 6 characters";
valid = false;
}

/* Confirm Password */
if(pass != cpass){
document.getElementById("cpassError").innerHTML = "Password not match";
valid = false;
}

return valid;
}



function validateLogin() {

let user = document.getElementById("loginUser").value.trim();
let pass = document.getElementById("loginPass").value.trim();

document.getElementById("loginUserError").innerHTML = "";
document.getElementById("loginPassError").innerHTML = "";

let valid = true;

/* Username / Email */
if(user == ""){
document.getElementById("loginUserError").innerHTML = "Enter username/email";
valid = false;
}

/* Password */
if(pass == ""){
document.getElementById("loginPassError").innerHTML = "Enter password";
valid = false;
}

return valid;
}