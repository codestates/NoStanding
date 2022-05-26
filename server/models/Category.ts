import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category_has_Category_city, Category_has_Category_cityId } from './Category_has_Category_city';
import type { Shop_has_Category, Shop_has_CategoryId } from './Shop_has_Category';

export interface CategoryAttributes {
  id: number;
  name?: string;
}

export type CategoryPk = "id";
export type CategoryId = Category[CategoryPk];
export type CategoryOptionalAttributes = "id" | "name";
export type CategoryCreationAttributes = Optional<CategoryAttributes, CategoryOptionalAttributes>;

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  id!: number;
  name?: string;

  // Category hasMany Category_has_Category_city via category_id
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
  // Category hasMany Shop_has_Category via category_id
  Shop_has_Categories!: Shop_has_Category[];
  getShop_has_Categories!: Sequelize.HasManyGetAssociationsMixin<Shop_has_Category>;
  setShop_has_Categories!: Sequelize.HasManySetAssociationsMixin<Shop_has_Category, Shop_has_CategoryId>;
  addShop_has_Category!: Sequelize.HasManyAddAssociationMixin<Shop_has_Category, Shop_has_CategoryId>;
  addShop_has_Categories!: Sequelize.HasManyAddAssociationsMixin<Shop_has_Category, Shop_has_CategoryId>;
  createShop_has_Category!: Sequelize.HasManyCreateAssociationMixin<Shop_has_Category>;
  removeShop_has_Category!: Sequelize.HasManyRemoveAssociationMixin<Shop_has_Category, Shop_has_CategoryId>;
  removeShop_has_Categories!: Sequelize.HasManyRemoveAssociationsMixin<Shop_has_Category, Shop_has_CategoryId>;
  hasShop_has_Category!: Sequelize.HasManyHasAssociationMixin<Shop_has_Category, Shop_has_CategoryId>;
  hasShop_has_Categories!: Sequelize.HasManyHasAssociationsMixin<Shop_has_Category, Shop_has_CategoryId>;
  countShop_has_Categories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Category {
    return Category.init({
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
    tableName: 'Category',
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
