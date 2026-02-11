<?php
include('./pg_connect.php');
try {
    $query = 'insert into pays (nom_pays, iso_code) values (:nom_pays, :iso_code)';
    $stmt = $cnx->prepare($query);
    $stmt->bindValue(':nom_pays', 'Espagne');
    $stmt->bindValue(':iso_code', 'ES');
    $stmt->execute();

    echo "Pays ajouté avec succès.";
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
// la fleche correspond au / en c# il relie la variable $cnx à la méthode prepare() de l'objet PDO
