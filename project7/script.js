function validateForm(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();
let course=document.getElementById("course").value;

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("mobileError").innerHTML="";
document.getElementById("courseError").innerHTML="";

let valid=true;

if(name==""){
document.getElementById("nameError").innerHTML="Enter name";
valid=false;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML="Invalid email";
valid=false;
}

let mobilePattern=/^[0-9]{10}$/;
if(!mobile.match(mobilePattern)){
document.getElementById("mobileError").innerHTML="Enter 10 digit number";
valid=false;
}

if(course==""){
document.getElementById("courseError").innerHTML="Select course";
valid=false;
}

return valid;
}