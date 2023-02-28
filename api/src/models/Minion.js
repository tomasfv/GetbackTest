const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('minion', {
    
    

    minionAsk: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    relatedCode: {
      type: DataTypes.STRING,
      allowNull: false,
    }


  }, {
    
    timestamps: false,                  
    
  });
};
