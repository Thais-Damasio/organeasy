'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Avatar', 
    [
      { id: 1, nome: 'Garoto 01', path: 'boy1.svg', criado_em: new Date(), atualizado_em: new Date()},
      { id: 2, nome: 'Garoto 02', path: 'boy2.svg', criado_em: new Date(), atualizado_em: new Date()},
      { id: 3, nome: 'Garota 01', path: 'girl1.svg', criado_em: new Date(), atualizado_em: new Date()},
      { id: 4, nome: 'Garota 02', path: 'girl2.svg', criado_em: new Date(), atualizado_em: new Date()},
      { id: 5, nome: 'Garota 03', path: 'girl3.svg', criado_em: new Date(), atualizado_em: new Date()},
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Avatar', null, {})
  }
};
