<?php
include('./pg_connect.php');
try {
    $query = 'insert into pays (id_pays,nom_pays, iso_code) values (3,:nom_pays, :iso_code)';
    $stmt = $cnx->prepare($query);
    $stmt->bindValue(':nom_pays', 'Allemagne');
    $stmt->bindValue(':iso_code', 'DE');
    $stmt->execute();

    echo "Pays ajouté avec succès.";
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
// la fleche correspond au / en c# il relie la variable $cnx à la méthode prepare() de l'objet PDO
