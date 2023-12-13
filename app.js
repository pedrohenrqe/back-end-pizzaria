/****************************************************************************************************************************************************
* Objetivo: Cria uma API 
* Data: 24/11/2023
* Autor: Pedro Barbosa
* Versão: 1.0
****************************************************************************************************************************************************/

const apiPizzaria = require('./modulo/pizzaria.js');

const listarUsuarios = () => {
    let usuarios = apiPizzaria.usuario;
    let usuariosArray = [];

    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        let informacoesUsuarios = {};

        informacoesUsuarios.id = usuario.Id;
        informacoesUsuarios.nome = usuario.Nome;
        informacoesUsuarios.email = usuario.Email;
        informacoesUsuarios.telefone = usuario.Telefone;
        informacoesUsuarios.endereco = usuario.Endereço;

        usuariosArray.push(informacoesUsuarios);
    }
    return usuariosArray;
};

const listarProdutos = () => {
    let produtos = apiPizzaria.produtos;
    let produtosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let informacoesProdutos = {};

        informacoesProdutos.id = produto.id;
        informacoesProdutos.nome = produto.Nome;
        informacoesProdutos.preco = produto.Preço;
        informacoesProdutos.avaliacao = produto.Avaliação;
        informacoesProdutos.descricao = produto.Descrição;
        informacoesProdutos.imagem = produto.Foto;

        produtosArray.push(informacoesProdutos);
    }

    return produtosArray;
};

const listarComentarios = () => {
    let produtos = apiPizzaria.produtos;
    let comentariosArray = [];

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let comentariosProduto = produto.comentario || [];

        for (let j = 0; j < comentariosProduto.length; j++) {
            let comentario = comentariosProduto[j];

            let usuarioComentario = apiPizzaria.usuario.find(user => user.Id === comentario.usuario.id);

            let comentariosInformacoes = {
                id: comentario.id,
                mensagem: comentario.mensagem,
                data: comentario.data,
                usuario: usuarioComentario ? usuarioComentario.Nome : "Usuário não disponível"
            };

            comentariosArray.push(comentariosInformacoes);
        }
    }

    return comentariosArray;
};



const categorias = () => {
    return apiPizzaria.categorias || [];
};

console.log(listarUsuarios());
console.log(listarProdutos());
console.log(categorias());
console.log(listarComentarios());
