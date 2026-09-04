<?php
header("Content-Type: application/json; charset=utf-8");

require_once "conexion.php";

$nombre = trim($_POST["nombre"] ?? "");
$email = trim($_POST["email"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$servicio = trim($_POST["servicio"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

if ($nombre === "" || $email === "" || $telefono === "" || $mensaje === "") {
    echo json_encode([
        "success" => false,
        "message" => "Completa todos los campos obligatorios."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Ingresa un correo válido."
    ]);
    exit;
}

$sql = "INSERT INTO contactos (nombre, email, telefono, servicio, mensaje)
        VALUES (:nombre, :email, :telefono, :servicio, :mensaje)";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":nombre" => $nombre,
    ":email" => $email,
    ":telefono" => $telefono,
    ":servicio" => $servicio,
    ":mensaje" => $mensaje
]);

echo json_encode([
    "success" => true,
    "message" => "¡Gracias, $nombre! Hemos recibido tu consulta."
]);
?>