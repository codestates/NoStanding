const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Menu',
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
      image_src: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Menu',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'fk_Menu_Shop1_idx',
          using: 'BTREE',
          fields: [{ name: 'shop_id' }],
        },
      ],
    },
  );
};
