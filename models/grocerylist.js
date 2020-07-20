module.exports = function(sequelize, DataTypes) {
    var Grocerylist = sequelize.define("Grocerylist", {

    });

  Grocerylist.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Grocerylist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      } 
    });
  };
  return Grocerylist;
}
