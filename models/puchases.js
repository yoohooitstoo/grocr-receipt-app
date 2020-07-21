module.exports = function(sequelize, DataTypes) {
    var Purchases = sequelize.define("Purchases", {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      sku: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      item_price: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: false,
      }
    });
  
    // Purchases.associate = function(models) {

    //   Purchases.belongsTo(models.Grocerylist, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    //   Purchases.belongsTo(models.Receipt, {
    //       foreignKey: {
    //           allowNull: true
    //       }
    //   })
    // };
    return Purchases;
  };
  