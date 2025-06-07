<!-- In the name of Allah  -->

    <!-- Font Awesome Icons -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"> -->


<?php
    
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $chapter = trim($_POST["chapter"]);
    $range = $_POST["range"];
    $difficulty = $_POST["difficulty"];
    $day = $_POST["day"];
    $reviewDate = $_POST["review"];
    $status = $_POST["status"]; 

    if ($status === "<i class='fa-solid fa-hourglass-end'></i>") {
        $status = "Completed";
    } else {
        $status = "Pending";
    }
    
    try {
        require_once("dbh.inc.php");

        $query = "INSERT INTO entries (chapter, theRange, difficulty, day, review, theStatus)
            VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = $pdo -> prepare($query);

        $stmt -> execute([$chapter, $range, $difficulty, $day, $reviewDate, $status]);

        // $query = "SELECT * FROM entries WHERE theRange = :theRange";
        
        // $stmt -> bindParam(":theRange", $range);
        
        // $stmt -> execute();
        
        // $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // echo $data[0]["chapter"];


        $pdo = null;
        $stmt = null;
        header("Location: ../new-umrs.html");
        die();


    } catch (PDOException $e) {
        die("Query faild:" . $e -> getMessage());
    }
} else {
    header("Location: ../new-umrs.html");
}