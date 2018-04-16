'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    description: DataTypes.STRING,
    toolId: DataTypes.INTEGER,
    beachId: DataTypes.INTEGER
  });

  Castle.associate = function(models) {
    Castle.belongsTo(models.Tools, {
      foriegnKey: 'toolId'
    });
  };
  return Castle;
};
