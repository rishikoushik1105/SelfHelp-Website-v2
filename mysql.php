<?php
$servername = "localhost";
$username = "root";
$password = "Netid%9282";


    $conn = new mysqli($servername, $username, $password);

    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * from selfhelp.patron";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['FirstName'] . "</td>";
        echo "<td>" . $row['LastName'] . "</td>";
        echo "<td>" . $row['Country'] . "</td>";
        echo "<td>" . $row['Email'] . "</td>";
        echo "<td>" . $row['Website'] . "</td>";
        echo "</tr>";
    }
    } else {
    echo "0 results";
    }
    $conn->close();
?>
