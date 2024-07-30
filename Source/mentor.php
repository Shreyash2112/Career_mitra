<?php
    include_once 'config.php'; // Include database connection
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentors</title>
    <link rel="stylesheet" href="CSS/mentor.css">
</head>
<body>
<header>
      <h1>Career Mitra</h1>
    </header>

    <nav>
      <ul>
        <li><a href="Index.Html">Home</a></li>
        <li><a href="explore.html">Explore</a></li>
        <li><a href="mentor.php">Mentors</a></li>
        <li><a href="be-a-mentor.html">Be a Mentor</a></li>
        <li><a href="aptitude.html">Aptitude</a></li>
        <li><a href="resume.html">Resume Generator</a></li>
        <li><a href="aboutus.html">About us</a></li>
      </ul>
    </nav>

    <table>
        <thead>
            <tr>
                <th>Serial No.</th>
                <th>Full Name</th>
                <th>Qualification</th>
                <th>Expertise</th>
                <!-- <th>Email</th> -->
                <th>LinkedIn</th>
            </tr>
        </thead>
        <tbody>
            <?php
                // Fetch data from the database
                // $sql = "SELECT fullname, qualification, expertise, mail, linkedin FROM registrations";
                $sql = "SELECT fullname, qualification, expertise, linkedin FROM registrations";
                $result = $conn->query($sql);

                // Display data in HTML table
                if ($result->num_rows > 0) {
                    $serial = 1;
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $serial . "</td>";
                        echo "<td>" . $row['fullname'] . "</td>";
                        echo "<td>" . $row['qualification'] . "</td>";
                        echo "<td>" . $row['expertise'] . "</td>";
                        // echo "<td>" . $row['mail'] . "</td>";
                        echo "<td><a href='" . $row['linkedin'] . "' class='linkedin-button' target='_blank'>View Profile</a></td>";
                        echo "</tr>";
                        $serial++;
                    }
                } else {
                    echo "<tr><td colspan='5'>No data found</td></tr>";
                }

                // Close the connection
                $conn->close();
            ?>
        </tbody>
    </table>

    <footer>
        <p>&copy; 2024 Team Career Mitra, GCOE Yavatmal</p>
    </footer>
</body>
</html>
