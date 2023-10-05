// Função para listar os Produto.
const listaProduto = () => {
    // Faz uma requisição GET para buscar os Produto no endereço especificado.
    return fetch(`http://localhost:3000/products`)
    // Depois de receber a resposta da requisição...
    .then(resposta => {
       // ... converte essa resposta de formato JSON para um objeto JavaScript.
       return resposta.json()
    })   
 }
 
 // Função para criar um novo cliente.
 const criarProduto = (produto, preco, descricao, id) => {
    // Faz uma requisição POST para adicionar um novo cliente no endereço especificado.
    return fetch(`http://localhost:3000/products`, {
       method: 'POST', // Define o método da requisição como POST.
       headers: {
          'Content-type' : 'application/json' // Define o tipo de conteúdo enviado como JSON.
       },
       // Converte o produto e preco fornecidos para formato JSON para serem enviados na requisição.
       body: JSON.stringify({
          produto: produto,
          preco: preco,
          descricao: descricao
       })
    })
    // Depois de receber a resposta da requisição...
    .then(resposta => {
       // ... converte essa resposta de formato JSON para um objeto JavaScript.
       return resposta.json();
    })
 }
 
 const removeProduto = () => {
    return fetch(`http://localhost:3000/products`, {method: 'DELETE'});
 }
 
 // Exporta as funções listaProduto e criarProduto 
 // para que elas possam ser usadas em outros módulos/arquivos.
 export const produtoService = {
    listaProduto,
    criarProduto,
    removeProduto
 }