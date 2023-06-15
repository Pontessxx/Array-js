function calcularValorLivrosDisp(livros){
    return livros.reduce((i,livro)=> i + livro.preco, 0).toFixed(2)
}