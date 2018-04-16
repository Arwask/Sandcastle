'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Castles',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        description: {
          type: Sequelize.STRING
        },
        toolId: {
          type: Sequelize.INTEGER
        },
        beachId: {
          type: Sequelize.INTEGER
        }
      },
      { timestamps: false }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Castles');
  }
};
