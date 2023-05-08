'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {nome: 'M', sobrenome: 'O', idade: '17', altura: '176'},
      {nome: 'O', sobrenome: 'N', idade: '17', altura: '176'},
      {nome: 'I', sobrenome: 'E', idade: '17', altura: '176'},
      {nome: 'vito', sobrenome: 'hdm', idade: '15', altura: '174'},
      {nome: 'caio', sobrenome: 'hygino', idade: '16', altura: '201'},
      {nome: 'renas', sobrenome: 'tos', idade: '18', altura: '203'},
      {nome: 'rafs', sobrenome: 'little', idade: '16', altura: '120'},
      {nome: 'lipe', sobrenome: 'bx', idade: '36', altura: '150'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
