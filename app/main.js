
let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi(){
    const res = await fetch(endpointApi)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    console.table(livros)
    exibirOsLivrosNaTela(livrosDesconto)
}