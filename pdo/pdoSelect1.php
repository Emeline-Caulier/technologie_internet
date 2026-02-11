<?php
include('./pg_connect.php');
try {
    $query = 'select * from pays';
    $stmt = $cnx->prepare($query);
    $stmt->execute();

    foreach ($stmt->fetchAll() as $data) {
        echo $data['id_pays'] . ' - ' . $data['nom_pays'] . ' - ' . $data['iso_code'] . '<br>';
    }
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
