const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('./TabelaProduto')
const Produto = require('./produto')

roteador.get('/', async (requisicao, resposta) => {
  const produtos = await Tabela.lista(requisicao.fornecedor.id)
  resposta.send(JSON.stringify(produtos))
})

roteador.post('/', async (requisicao, resposta, proximo) => {
  try {
    const idFornecedor = requisicao.fornecedor.id
    const corpo = requisicao.body
    const dados = Object.assign({}, corpo, { fornecedor: idFornecedor })
    const produto = new Produto(dados)
    await produto.criar()
    resposta.status(201)
    resposta.send(produto)
  } catch (erro) {
    proximo(erro)
  }
})

roteador.delete('/:id', (requisicao, resposta) => {
  const dados = {
    id: requisicao.params.id,
    fornecedor: requisicao.fornecedor.id
  }

  const produto = new Produto(dados)
  await produto.apagar()
  resposta.status(204)
  resposta.end()
})

roteador.get('/:id', async (requisicao, resposta) => {
  try {
    const dados = {
      id: requisicao.params.id,
      fornecedor: requisecao.fornecedor.id
    }

    const produto = new Produto(dados)
    produto.carregar()
    resposta.send(JSON.stringify(produto))
  } catch (erro) {
    proximo(erro)
  }
})

module.exports = roteador
