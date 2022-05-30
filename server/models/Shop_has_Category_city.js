const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Shop_has_Category_city',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Shop',
          key: 'id',
        },
      },
      category_city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Category_city',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'Shop_has_Category_city',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'fk_Shop_has_Category_city_Shop1_idx',
          using: 'BTREE',
          fields: [{ name: 'shop_id' }],
        },
        {
          name: 'fk_Shop_has_Category_city_Category_city1_idx',
          using: 'BTREE',
          fields: [{ name: 'category_city_id' }],
        },
      ],
    },
  );
};
