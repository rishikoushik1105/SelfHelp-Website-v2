<?php

$link = mysqli_connect("localhost", "root", "Netid%9282", "selfhelp");
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$first_name = mysqli_real_escape_string($link, $_REQUEST['FirstName']);
$last_name = mysqli_real_escape_string($link, $_REQUEST['LastName']);
$country = mysqli_real_escape_string($link, $_REQUEST['Country']);
$email = mysqli_real_escape_string($link, $_REQUEST['Email']);
$website = mysqli_real_escape_string($link, $_REQUEST['Website']);

 
$sql = "INSERT INTO patron (FirstName, LastName, Country, Email, Website) VALUES ('$first_name', '$last_name', '$country', '$email', '$website')";

mysqli_query($link, $sql);
include 'students.html';

mysqli_close($link);
?>