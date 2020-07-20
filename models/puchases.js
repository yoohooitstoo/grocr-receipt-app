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
    });
  
    Purchases.associate = function(models) {

      Purchases.belongsTo(models.Grocerylist, {
        foreignKey: {
          allowNull: false
        }
      });
      Purchases.belongsTo(models.Receipt, {
          foreignKey: {
              allowNull: false
          }
      })
    };
    return Purchases;
  };
  