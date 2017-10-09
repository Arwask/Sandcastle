'use strict';

const { beaches } = require('./Data/beaches.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Beaches', beaches, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Beaches', null, {});
  }
};
