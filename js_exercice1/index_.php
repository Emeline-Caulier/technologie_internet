<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <!--<script src="./assets/js/fonction1.js" defer language="javascript"></script>!-->
    <!--script src="./assets/js/fonction2_attribut.js" defer language="javascript"></script>
    <script src="./assets/js/fonction_array.js" defer language="javascript"></script>!-->
    <script src="./assets/js/fonction_events.js" defer language="javascript"></script>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<nav>
    <?php
    if (file_exists("src/utils/menu.php")) {
        include("src/utils/menu.php");
    }
    ?>

</nav>
<main>
    <?php
    if (isset($_GET["page"])) {
        $page = $_GET["page"];
        include("src/content/" . $page . ".php");
    }
    ?>
</main>
</body>
</html>
