const sequelize = require('sequelize')
const Sequelize = require('sequelize')
const instancia = require('../../../banco-de-dados')
const ModeloTabelaFornecedor = require('../ModeloTabelaFornecedor')

const colunas = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },

  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },

  estoque: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    Reference: {
      model: require('../ModeloTabelaFornecedor'),
      key: 'id'
    }
  }
}

const opcoes = {
  freezeTableName: true,
  tableName: 'produtos',
  timestamps: true,
  createdAt: 'dataCriacao',
  updatedAt: 'dataAtualizacao',
  version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)
