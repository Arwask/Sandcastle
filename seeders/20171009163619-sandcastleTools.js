'use strict';

const { SandcastleTools } = require('./Data/SandcastleTools.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sandcastleTools', SandcastleTools, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sandcastleTools', null, {});
  }
};
