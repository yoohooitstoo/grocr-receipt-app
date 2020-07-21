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

        allowNull: true,
  09c1cb3cfb2c23b47d0958f7248a349d6246a1a7
        default: false,
        34b2b9002a703023560689392c71ae6660397bea
      }
    });
  
    Purchases.associate = function(models) {

      Purchases.belongsTo(models.Grocerylist, {
        foreignKey: {
          allowNull: true
        }
      });
      Purchases.belongsTo(models.Receipt, {
          foreignKey: {
              allowNull: true
          }
      })
    };
    return Purchases;
  };
  