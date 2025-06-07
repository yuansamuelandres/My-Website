<!-- In the name of Allah -->

<?php

$dsn = "mysql:host=localhost;dbname=umrs";
$dbusername = "root";
$dbpassword = "";

try {
    $options = [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4",
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ];
    $pdo = new PDO($dsn, $dbusername, $dbpassword, $options);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}