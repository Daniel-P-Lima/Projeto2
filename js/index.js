async function cadastrar(){
    var form = document.getElementById('formulario')
    var dados = new FormData(form);

    if(!dados.get('nome') || !dados.get('senha') || !dados.get('escolha')) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(dados.get('senha') < 8)
    {
        alert("Sua senha deve ter no mínimo 8");
        return;
    }

    try {
        var promise = await fetch("./php/cadastrar.php", {
            method: "POST",
            body: dados
        });
 

        var resposta = await promise.json();

        var genero = dados.get('escolha');
        var nome = dados.get('nome');
        var mensagem = '';

        if (genero === 'M') {
            mensagem = "Bem-vindo, " + nome + "!";
        } else if (genero === 'F') {
            mensagem = "Bem-vinda, " + nome + "!";
        } else {
            mensagem = "Bem-vindo(a), " + nome + "!";
        }

        alert(mensagem);

    } catch (error) {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao cadastrar o usuário.");
    }
}