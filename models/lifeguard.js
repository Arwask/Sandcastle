'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  });
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foriegnKey: 'BeachId',
      onDelete: 'CASCADE'
    });
  };
  return Lifeguard;
};
