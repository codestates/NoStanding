const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReReview', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Review',
        key: 'id'
      }
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'id'
      }
    },
    contents: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReReview',
    timestamps: true,
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
        name: "fk_ReReview_Review1_idx",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "fk_ReReview_Shop1_idx",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
};
