<?php

$conn = mysqli_connect("localhost","root","","studentdb");

if(!$conn){
die("Connection Failed");
}

$name   = $_POST['name'];
$email  = $_POST['email'];
$mobile = $_POST['mobile'];
$course = $_POST['course'];

$sql = "INSERT INTO students(`Full Name`,`Email`,`Mobile Number`,`Select Course`)
VALUES('$name','$email','$mobile','$course')";

if(mysqli_query($conn,$sql)){
echo "<h2>Registered Successfully</h2>";
echo "<a href='index.html'>Back</a>";
}else{
echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);

?>