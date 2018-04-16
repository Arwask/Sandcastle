'use strict';

const { castles } = require('./Data/castles.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Castles', castles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Castles', null, {});
  }
};
