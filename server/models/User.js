const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'User',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_salt: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      user_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      shop_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      shop_category: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      shop_category_city: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      address_line1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      address_line2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      postal_code: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      is_master: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'User',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    },
  );
};
