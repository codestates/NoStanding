const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notification', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    reservation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Reservation',
        key: 'id'
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Review',
        key: 'id'
      }
    },
    rereview_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReReview',
        key: 'id'
      }
    },
    contents: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    read: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    review: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_Notification_Reservation1_idx",
        using: "BTREE",
        fields: [
          { name: "reservation_id" },
        ]
      },
      {
        name: "fk_Notification_User1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_Notification_Review1_idx",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "fk_Notification_ReReview1_idx",
        using: "BTREE",
        fields: [
          { name: "rereview_id" },
        ]
      },
    ]
  });
};
