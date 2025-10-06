<?php
$servidor = "localhost";
$usuario = "user";
$senha = "@senha123";
$banco_de_dados = "bacon";

$conexao = new mysqli($servidor, $usuario, $senha, $banco_de_dados);

if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}
?>