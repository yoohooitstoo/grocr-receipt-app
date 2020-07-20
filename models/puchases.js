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
        type: DataTypes.INT,
      },
      item_price: {
          type: DataTypes.INT
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
  
    return Post;
  };
  