<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $messenger = htmlspecialchars($_POST["messenger"]);
    $contact = htmlspecialchars($_POST["contact"]);

    $to = "tuk.adam.1999@gmail.com"; // Замени на свою почту
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nМессенджер: $messenger\nКонтакт: $contact";
    $headers = "From: https://gordon0027.github.io/\r\n"; // Замени на свой домен

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
