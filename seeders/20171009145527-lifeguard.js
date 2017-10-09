'use strict';

const { lifeguards } = require('./Data/lifeguards.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lifeguards', lifeguards, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lifeguards', null, {});
  }
};
