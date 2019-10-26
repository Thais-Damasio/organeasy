'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AtividadeLazer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Aluno'
          },
          key: 'id'
        },
      },
      id_atividade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Atividade'
          },
          key: 'id'
        },
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AtividadeLazer');
  }
};
