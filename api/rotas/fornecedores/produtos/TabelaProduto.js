const { route } = require('.')
const { pegarPorId } = require('../TabelaFornecedor')
const Modelo = require('./ModeloTabelaProduto')

module.exports = {
  lista(idFornecedor) {
    return Modelo.findAll({
      where: {
        fornecedor: idFornecedor
      }
    })
  },

  inserir(dados) {
    return Modelo.create(dados)
  },

  remover(idProduto, idFornecedor) {
    return Modelo.destroy({
      where: {
        id: idProduto,
        fornecedor: idFornecedor
      }
    })
  },

  async pegarPorId(idProduto, idFornecedor) {
    const encrontra = await Modelo.findOne({
      where: {
        id: idProduto,
        fornecedor: idFornecedor
      },
      raw: true
    })

    if (!encontrado) {
      throw new Error('Produto nao foi encontrado!')
    }

    return encontrado
  }
}
