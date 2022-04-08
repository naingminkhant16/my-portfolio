<?php
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
echo "<pre>";
print_r($name);
print_r($email);
print_r($message);
die();
$to = "somebody@example.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);
?>