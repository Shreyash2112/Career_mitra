<?php
    // Database connection parameters
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $database = "registrations"; 

    // Create connection
    $conn = new mysqli('localhost', 'root', '', 'registrations');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>