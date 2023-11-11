<?php
    if (isset($_POST['submit']))
    {
    $name = $_POST['name'];
    $mail = $_POST['mail'];
        mail();
    }    
?>