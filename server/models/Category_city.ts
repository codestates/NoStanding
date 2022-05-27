import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category_has_Category_city, Category_has_Category_cityId } from './Category_has_Category_city';
import type { Shop_has_Category_city, Shop_has_Category_cityId } from './Shop_has_Category_city';

export interface Category_cityAttributes {
  id: number;
  name?: string;
}

export type Category_cityPk = "id";
export type Category_cityId = Category_city[Category_cityPk];
export type Category_cityOptionalAttributes = "id" | "name";
export type Category_cityCreationAttributes = Optional<Category_cityAttributes, Category_cityOptionalAttributes>;

export class Category_city extends Model<Category_cityAttributes, Category_cityCreationAttributes> implements Category_cityAttributes {
  id!: number;
  name?: string;

  // Category_city hasMany Category_has_Category_city via category_city_id
  Category_has_Category_cities!: Category_has_Category_city[];
  getCategory_has_Category_cities!: Sequelize.HasManyGetAssociationsMixin<Category_has_Category_city>;
  setCategory_has_Category_cities!: Sequelize.HasManySetAssociationsMixin<Category_has_Category_city, Category_has_Category_cityId>;
  addCategory_has_Category_city!: Sequelize.HasManyAddAssociationMixin<Category_has_Category_city, Category_has_Category_cityId>;
  addCategory_has_Category_cities!: Sequelize.HasManyAddAssociationsMixin<Category_has_Category_city, Category_has_Category_cityId>;
  createCategory_has_Category_city!: Sequelize.HasManyCreateAssociationMixin<Category_has_Category_city>;
  removeCategory_has_Category_city!: Sequelize.HasManyRemoveAssociationMixin<Category_has_Category_city, Category_has_Category_cityId>;
  removeCategory_has_Category_cities!: Sequelize.HasManyRemoveAssociationsMixin<Category_has_Category_city, Category_has_Category_cityId>;
  hasCategory_has_Category_city!: Sequelize.HasManyHasAssociationMixin<Category_has_Category_city, Category_has_Category_cityId>;
  hasCategory_has_Category_cities!: Sequelize.HasManyHasAssociationsMixin<Category_has_Category_city, Category_has_Category_cityId>;
  countCategory_has_Category_cities!: Sequelize.HasManyCountAssociationsMixin;
  // Category_city hasMany Shop_has_Category_city via category_city_id
  Shop_has_Category_cities!: Shop_has_Category_city[];
  getShop_has_Category_cities!: Sequelize.HasManyGetAssociationsMixin<Shop_has_Category_city>;
  setShop_has_Category_cities!: Sequelize.HasManySetAssociationsMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  addShop_has_Category_city!: Sequelize.HasManyAddAssociationMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  addShop_has_Category_cities!: Sequelize.HasManyAddAssociationsMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  createShop_has_Category_city!: Sequelize.HasManyCreateAssociationMixin<Shop_has_Category_city>;
  removeShop_has_Category_city!: Sequelize.HasManyRemoveAssociationMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  removeShop_has_Category_cities!: Sequelize.HasManyRemoveAssociationsMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  hasShop_has_Category_city!: Sequelize.HasManyHasAssociationMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  hasShop_has_Category_cities!: Sequelize.HasManyHasAssociationsMixin<Shop_has_Category_city, Shop_has_Category_cityId>;
  countShop_has_Category_cities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Category_city {
    return Category_city.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Category_city',
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
    ]
  });
  }
}
