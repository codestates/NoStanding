import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Category, CategoryId } from './Category';
import type { Category_city, Category_cityId } from './Category_city';

export interface Category_has_Category_cityAttributes {
  id: number;
  category_id: number;
  category_city_id: number;
}

export type Category_has_Category_cityPk = "id" | "category_id";
export type Category_has_Category_cityId = Category_has_Category_city[Category_has_Category_cityPk];
export type Category_has_Category_cityOptionalAttributes = "id";
export type Category_has_Category_cityCreationAttributes = Optional<Category_has_Category_cityAttributes, Category_has_Category_cityOptionalAttributes>;

export class Category_has_Category_city extends Model<Category_has_Category_cityAttributes, Category_has_Category_cityCreationAttributes> implements Category_has_Category_cityAttributes {
  id!: number;
  category_id!: number;
  category_city_id!: number;

  // Category_has_Category_city belongsTo Category via category_id
  category!: Category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<Category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<Category, CategoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<Category>;
  // Category_has_Category_city belongsTo Category_city via category_city_id
  category_city!: Category_city;
  getCategory_city!: Sequelize.BelongsToGetAssociationMixin<Category_city>;
  setCategory_city!: Sequelize.BelongsToSetAssociationMixin<Category_city, Category_cityId>;
  createCategory_city!: Sequelize.BelongsToCreateAssociationMixin<Category_city>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Category_has_Category_city {
    return Category_has_Category_city.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Category',
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
    tableName: 'Category_has_Category_city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "category_id" },
        ]
      },
      {
        name: "fk_Category_has_Category_city_Category1_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "fk_Category_has_Category_city_Category_city1_idx",
        using: "BTREE",
        fields: [
          { name: "category_city_id" },
        ]
      },
    ]
  });
  }
}
