const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category_has_Category_city', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    category_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category_city',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Category_has_Category_city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "category_id" },
        ]
      },
      {
        name: "fk_Category_has_Category_city_Category1_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "fk_Category_has_Category_city_Category_city1_idx",
        using: "BTREE",
        fields: [
          { name: "category_city_id" },
        ]
      },
    ]
  });
};
