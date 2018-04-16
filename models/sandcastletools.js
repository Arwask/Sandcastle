'use strict';
module.exports = (sequelize, DataTypes) => {
  var sandcastleTools = sequelize.define('sancastleTools', {
    name: DataTypes.STRING
  });

  sandcastleTools.associate = function(models) {
    sandcastleTools.belongsToMany(models.Castle, {
      as: 'castleTools',
      through: 'castleTools'
    });
  };
  return sandcastleTools;
};
