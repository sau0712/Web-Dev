<?php

$conn = mysqli_connect("localhost","root","","studentdb");

if(!$conn){
die("Connection Failed");
}

$result = mysqli_query($conn,"SELECT * FROM students");

echo "<h1 align='center'>Student Records</h1>";

echo "<table border='1' align='center' cellpadding='10'>
<tr>
<th>ID</th>
<th>Full Name</th>
<th>Email</th>
<th>Mobile Number</th>
<th>Select Course</th>
</tr>";

while($row=mysqli_fetch_assoc($result))
{
echo "<tr>
<td>".$row['id']."</td>
<td>".$row['Full Name']."</td>
<td>".$row['Email']."</td>
<td>".$row['Mobile Number']."</td>
<td>".$row['Select Course']."</td>
</tr>";
}

echo "</table>";

mysqli_close($conn);

?>