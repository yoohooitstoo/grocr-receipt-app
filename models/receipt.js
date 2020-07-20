module.exports = function(sequelize, DataTypes) {
    var Receipt = sequelize.define("Receipt", {
    });

  Receipt.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Receipt.belongsTo(models.Store, {
      foreignKey: {
        allowNull: false
      } 
    });
    Receipt.belongsTo(models.User, {
        foreignKey: {
          allowNull: true,
        } 
      });
      Receipt.hasMany(models.Purchases, {
        foreignKey: {
          allowNull: true,
          onDelete: "cascade"
        }
      })
  };

  return Receipt;
};
