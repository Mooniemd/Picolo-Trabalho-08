'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [
      {nome: 'M'},
      {nome: 'O'},
      {nome: 'O'},
      {nome: 'N'},
      {nome: 'I'},
      {nome: 'E'}
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
