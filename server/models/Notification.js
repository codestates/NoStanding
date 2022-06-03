const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Notification',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Reservation',
          key: 'id',
        },
      },
      contents: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      read: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Notification',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'fk_Notification_Reservation1_idx',
          using: 'BTREE',
          fields: [{ name: 'reservation_id' }],
        },
      ],
    },
  );
};
