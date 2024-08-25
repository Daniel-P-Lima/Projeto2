<?php

    $conexao = mysqli_connect("localhost:3306", "root", "Oportunity23#", "Projeto2");
    $nome = $_POST["nome"];
    $senha = $_POST["senha"];
    $genero = $_POST["escolha"];

    mysqli_query($conexao, "INSERT INTO pessoa(usuario, senha, genero) VALUES ('$nome', '$senha', '$genero')");

    mysqli_query($conexao, "SELECT * FROM Pessoa");

    
    $response = ['message' => 'Usuário cadastrado com sucesso!'];
    echo json_encode($response);









?>