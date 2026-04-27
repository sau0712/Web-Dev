document.getElementById("studentForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let age = document.getElementById("age").value.trim();
let roll = document.getElementById("roll").value.trim();
let photo = document.getElementById("photo").value;

let valid = true;

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("ageError").innerHTML="";
document.getElementById("rollError").innerHTML="";
document.getElementById("photoError").innerHTML="";

/* Name */
if(name==""){
document.getElementById("nameError").innerHTML="Enter full name";
valid=false;
}

/* Email */
let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML="Invalid email";
valid=false;
}

/* Age */
if(age<18 || age>30){
document.getElementById("ageError").innerHTML="Age must be 18 to 30";
valid=false;
}

/* Roll */
let rollPattern=/^[0-9]{4}$/;

if(!roll.match(rollPattern)){
document.getElementById("rollError").innerHTML="Roll must be 4 digits";
valid=false;
}

/* Photo */
if(photo==""){
document.getElementById("photoError").innerHTML="Upload image";
valid=false;
}
else{
let ext = photo.split('.').pop().toLowerCase();

if(ext!="jpg" && ext!="jpeg" && ext!="png"){
document.getElementById("photoError").innerHTML="Only jpg png jpeg";
valid=false;
}
}

/* Success */
if(valid){
let btn=document.getElementById("submitBtn");

btn.innerHTML="Submitted Successfully";
btn.style.background="blue";
}
});