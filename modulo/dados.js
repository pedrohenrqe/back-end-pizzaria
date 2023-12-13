var usuario = [
    {
        Id: "1",
        Nome: "Pedro Barbosa",
        Email: "pedro@gmail.com",
        Senha: "pedro123",
        Telefone: "(11) 94002-8922",
        Endereço: "Rua Guarulhos, Jandira, São Paulo",
    },
    {
        Id: "2",
        Nome: "Matheus Zanoni Barbosa",
        Email: "matheus@gmail.com",
        Senha: "matheus1",
        Telefone: "(11) 94792-4237",
        Endereço: "Rua Carapicuiba, Carapícuiba, São Paulo",
},
{
        Id: "3",
        Nome: "Pedro Pedraga",
        Email: "pedrofofo@email.com",
        Senha: "pedrinho1",
        Telefone: "(11) 94444-4444",
        Endereço: "Rua São Pedro, Carapícuiba, São Paulo",
},
{

        Id: "4",
        Nome: "Vitor Hugo",
        Email: "vitex@gmail.com",
        Senha: "vitor1",
        Telefone: "(11) 96666-6666",
        Endereço: "Rua Jandira, Jandira, São Paulo",
    },
    {
        Id: "5",
        Nome: "Natalia Bastazini",
        Email: "natalia@email.com.br",
        Senha: "natalia1",
        Telefone: "(11) 98888-8888",
        Endereço: "Avendia Inocencio, Carapícuiba, São Paulo",
    },
{
    Id: "6",
    Nome: "Sid",
    Email: "Sid@gmail.com",
    Senha: "sid1",
    Telefone: "(11) 97777-7777",
    Endereço: "Rua Do Varejo, São Paulo, São Paulo"
}
]



var categorias = [
    {

        ID: "1",
        Nome: "Pizzas",
        Icone: "imagem-pizza",
        Descrição: "*descrição*",
    },
    {
        ID: "2",
        Nome: "Bebidas",
        Icone: "imagem-bebida",
        Descrição: "*descrição*",
    },
    {
        ID: "3",
        Nome: "Sobremesa",
        Icone: "imagem-sobremesa",
        Descrição: "*descrição*"
    }
]




var produtos = [
    {
        id: "1",
        Nome: "Pizza de Margherita",
        Descrição: "Uma Saborosa Pizza de Margherita, recém saida do forno!",
        Foto: "imagem",
        Preço: "18,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "413",
                mensagem: "Uma das melhores pizzas que eu ja comi na vida!",
                data: "15/03/2023",
                usuario: {id:1}
                 
            }
        ],
    },
    {

        id: "2",
        Nome: "Pizza de Frango com Catupiry",
        Descrição: "Uma Saborosa Pizza de Frango com Catupiry, recém saida do forno!",
        Foto: "imagem",
        Preço: "21,50",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "215",
                mensagem: "Uma das melhores pizzas que eu ja comi na vida!",
                data: "15/03/2023",
                usuario: {id:2}
                 
            }
        ],
    },
    {
        id: "3",
        Nome: "Pizza de calabreza com queijo",
        Descrição: "Uma Saborosa Pizza de Calabresa com queijo, recém saida do forno!",
        Foto: "imagem",
        Preço: "18,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "551",
                mensagem: "Uma das melhores pizzas que eu ja comi na vida!",
                data: "15/03/2023",
                usuario: {id:3}
                 
            }
        ],
    },
    {

        id: "4",
        Nome: "Pizza de Quatro Queijos",
        Descrição: "Uma Saborosa Pizza de Quatro Queijos, recém saida do forno!",
        Foto: "imagem",
        Preço: "18,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "563",
                mensagem: "Uma das melhores pizzas que eu ja comi na vida!",
                data: "15/03/2023",
                usuario: {id:4}
                 
            }
        ],

    },
    {
        id: "5",
        Nome: "Pizza de Vegetariana",
        Descrição: "Uma Saborosa Pizza de Vegetariana, recém saida do forno!",
        Foto: "imagem",
        Preço: "21,50",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "511",
                mensagem: "Ótimo custo beneficio!",
                data: "15/03/2023",
                usuario: {id:5}
                 
            }
        ],
    },
    {

        id: "6",
        Nome: "Pizza de Pepperoni com Queijo",
        Descrição: "Uma Saborosa Pizza de Pepperoni com Queijo, recém saida do forno!",
        Foto: "imagem",
        Preço: "18,00",
        Avaliação: "5",
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id: "455",
                mensagem: "Ótimo custo beneficio, com certeza comprarei mais!",
                data: "15/03/2023",
                usuario: {id:6}
                 
            }
        ],
    }
    
]

module.exports={usuario, categorias, produtos}