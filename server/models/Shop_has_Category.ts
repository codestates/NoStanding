import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category, CategoryId } from './Category';
import type { Shop, ShopId } from './Shop';

export interface Shop_has_CategoryAttributes {
  id: number;
  shop_id: number;
  category_id: number;
}

export type Shop_has_CategoryPk = "id";
export type Shop_has_CategoryId = Shop_has_Category[Shop_has_CategoryPk];
export type Shop_has_CategoryOptionalAttributes = "id";
export type Shop_has_CategoryCreationAttributes = Optional<Shop_has_CategoryAttributes, Shop_has_CategoryOptionalAttributes>;

export class Shop_has_Category extends Model<Shop_has_CategoryAttributes, Shop_has_CategoryCreationAttributes> implements Shop_has_CategoryAttributes {
  id!: number;
  shop_id!: number;
  category_id!: number;

  // Shop_has_Category belongsTo Category via category_id
  category!: Category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<Category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<Category, CategoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<Category>;
  // Shop_has_Category belongsTo Shop via shop_id
  shop!: Shop;
  getShop!: Sequelize.BelongsToGetAssociationMixin<Shop>;
  setShop!: Sequelize.BelongsToSetAssociationMixin<Shop, ShopId>;
  createShop!: Sequelize.BelongsToCreateAssociationMixin<Shop>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Shop_has_Category {
    return Shop_has_Category.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Shop_has_Category',
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
        name: "fk_Shop_has_Category_Shop1_idx",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "fk_Shop_has_Category_Category1_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
