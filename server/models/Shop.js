const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Shop',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      business_hour: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      image_src: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      holiday: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      contents: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      x: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      y: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      place_url: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Shop',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'fk_Shop_User1_idx',
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
      ],
    },
  );
};
