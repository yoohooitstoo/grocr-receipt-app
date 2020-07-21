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
        type: DataTypes.STRING,
        allowNull: true,
      },
      item_price: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: true,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    });
  
    Purchases.associate = function(models) {

      Purchases.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    //   Purchases.belongsTo(models.Receipt, {
    //       foreignKey: {
    //           allowNull: true
    //       }
    //   })
    };
    return Purchases;
  };
  