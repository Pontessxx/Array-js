const btnOrdenaPreco = document.getElementById('btnOrdenarPorPrecoMenor')
const btnOrdenaPrecoMaior = document.getElementById('btnOrdenarPorPrecoMaior')

btnOrdenaPreco.addEventListener('click', ordenarLivroPreco)
function ordenarLivroPreco(){
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco) //menor para maior
    exibirOsLivrosNaTela(livrosOrdenados)
}
btnOrdenaPrecoMaior.addEventListener('click', ordenarLivroPrecoMaior)
function ordenarLivroPrecoMaior(){
    let livrosOrdenados = livros.sort((a,b)=> b.preco - a.preco) //Maior para menor
    exibirOsLivrosNaTela(livrosOrdenados)
}