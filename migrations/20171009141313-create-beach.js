'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Beaches',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        sand_rating: {
          type: Sequelize.INTEGER
        }
      },
      { timestamps: false }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beaches');
  }
};
