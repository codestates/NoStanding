import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category_city, Category_cityId } from './Category_city';
import type { Shop, ShopId } from './Shop';

export interface Shop_has_Category_cityAttributes {
  id: number;
  shop_id: number;
  category_city_id: number;
}

export type Shop_has_Category_cityPk = "id";
export type Shop_has_Category_cityId = Shop_has_Category_city[Shop_has_Category_cityPk];
export type Shop_has_Category_cityOptionalAttributes = "id";
export type Shop_has_Category_cityCreationAttributes = Optional<Shop_has_Category_cityAttributes, Shop_has_Category_cityOptionalAttributes>;

export class Shop_has_Category_city extends Model<Shop_has_Category_cityAttributes, Shop_has_Category_cityCreationAttributes> implements Shop_has_Category_cityAttributes {
  id!: number;
  shop_id!: number;
  category_city_id!: number;

  // Shop_has_Category_city belongsTo Category_city via category_city_id
  category_city!: Category_city;
  getCategory_city!: Sequelize.BelongsToGetAssociationMixin<Category_city>;
  setCategory_city!: Sequelize.BelongsToSetAssociationMixin<Category_city, Category_cityId>;
  createCategory_city!: Sequelize.BelongsToCreateAssociationMixin<Category_city>;
  // Shop_has_Category_city belongsTo Shop via shop_id
  shop!: Shop;
  getShop!: Sequelize.BelongsToGetAssociationMixin<Shop>;
  setShop!: Sequelize.BelongsToSetAssociationMixin<Shop, ShopId>;
  createShop!: Sequelize.BelongsToCreateAssociationMixin<Shop>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Shop_has_Category_city {
    return Shop_has_Category_city.init({
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
    tableName: 'Shop_has_Category_city',
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
        name: "fk_Shop_has_Category_city_Shop1_idx",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
        ]
      },
      {
        name: "fk_Shop_has_Category_city_Category_city1_idx",
        using: "BTREE",
        fields: [
          { name: "category_city_id" },
        ]
      },
    ]
  });
  }
}
