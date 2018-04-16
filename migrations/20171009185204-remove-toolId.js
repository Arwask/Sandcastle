'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Castles', 'toolId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addCoulmn('Castles', 'toolId', Sequelize.INTEGER);
  }
};
