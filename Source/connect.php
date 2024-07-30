<?php

    include_once 'config.php';

    // Retrieve form data
    $fullname = $_POST['fullname'];
    $qualification = $_POST['qualification'];
    $expertise = $_POST['expertise'];
    $mail = $_POST['mail'];
    $linkedin = $_POST['linkedin'];


    // Create connection
    $conn = new mysqli('localhost', 'root', '', 'registrations');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        // Insert data into the database
        $stmt = $conn->prepare("INSERT INTO registrations (fullname, qualification, expertise, mail, linkedin) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $fullname, $qualification, $expertise, $mail, $linkedin);
    }

    if ($stmt->execute()) {
        header("Location: success.php?message=success");
    } else {
        echo "Error: " . $stmt->error;
    }
   
    // Close the statement and connection
    $stmt->close();
    $conn->close();
?>