<?php
$host = "127.0.0.1";
$puerto = "8889"; // MAMP normalmente usa 8889 para MySQL
$bd = "mv_consulting";
$usuario = "root";
$password = "root";

try {
    $conexion = new PDO(
        "mysql:host=$host;port=$puerto;dbname=$bd;charset=utf8mb4",
        $usuario,
        $password
    );

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>