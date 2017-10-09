'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Lifeguards',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        first_name: {
          type: Sequelize.STRING
        },
        last_name: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
        },
        BeachId: {
          type: Sequelize.INTEGER
        }
      },
      { timestamps: false }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lifeguards');
  }
};
