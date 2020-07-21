module.exports = function(sequelize, DataTypes) {
    var Store = sequelize.define("Store", {
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            },
        }
    })


  Store.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Store.hasMany(models.Receipt, {
      foreignKey: {
        allowNull: true,
        onDelete: "cascade"
      } 
    });
    };
  return Store;
};
