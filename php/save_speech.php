<?php

// Database configuration
$db_name = "mysql:host=localhost;dbname=recognition;charset=utf8";
$username = "root";
$password = "";

// Creating a new PDO connection to the database
$conn = new PDO($db_name, $username, $password);

// Check if an action is set in the POST request and if it is equal to 'save'
if (isset($_POST['action']) && $_POST['action']== 'save' ) {
    // Check if the 'text' parameter is set in the POST request
    if (isset($_POST['text'])) {
        // Retrieve the value of 'text' parameter
        $text = $_POST['text'];
        // Prepare a SQL statement to insert the speech text into the 'speech' table
        $insert_speech = $conn->prepare("INSERT INTO `speech` (speech_text) VALUES(?)");
        // Execute the prepared statement by passing the speech text as a parameter
        if ($insert_speech->execute([$text])) {
            // If the insertion is successful, output "success"
            echo "success";
        } else {
            // If the insertion fails, output "failed"
            echo "failed";
        }
       
    }
}
?>
