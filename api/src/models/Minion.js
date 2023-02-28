const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
    //este argumento hace referencia a las columnas que vienen por defecto createdAt y updatedAt
    timestamps: false,           //si no quiero que aparezca nada extra lo paso a false        
    
  });
};
