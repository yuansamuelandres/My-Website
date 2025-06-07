<!-- In the name of Allah -->

<?php    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $search = trim($_POST["search"]);

        try {
            require_once "dbh.inc.php";

            $query = "SELECT * FROM entries WHERE TRIM(LOWER(chapter)) = TRIM(LOWER(?));";

            $stmt = $pdo -> prepare($query);

            $stmt -> execute([$search]);

            $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);

            $pdo = null;
            $stmt = null;

        } catch (PDOException $e) {
            die("Query failed: " . $e -> getMessage());
        }
    } else {
        header("Location: ../new-umrs.html");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
</head>
<body>
    <h3>Search Results:</h3>
    <?php
        if (empty($result)) {
            echo "<div>";
            echo "<p>No result.</p>";
            echo "</div>";
        } else {
            foreach ($result as $row) {
                echo "<div>";
                echo "<h3>" . htmlspecialchars($row["chapter"]) . "</h3>";
                echo "<p>" . htmlspecialchars($row["theRange"]) . "</p>";
                echo "<p>" . htmlspecialchars($row["theStatus"]) . "</p>";
                echo "</div>";
            }
        }
    ?>
</body>
</html>