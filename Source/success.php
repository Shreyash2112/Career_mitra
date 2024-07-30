<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration successful</title>
    <link rel="stylesheet" href="CSS/success.css">
</head>
<body>
    <div class="container">
        <div class="success-message">
            <?php
            // Check if the success message is passed as a URL parameter
            if (isset($_GET['message']) && $_GET['message'] == 'success') {
                echo "Registration successful";
            } else {
                header("Location: index.html"); 
                exit();
            }
            ?>
        </div>
        <div class="link">
            <a href="index.html">Back to Home</a>
        </div>
    </div>
</body>
</html>
