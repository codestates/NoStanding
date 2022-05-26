import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Bookmark, BookmarkId } from './Bookmark';
import type { Master, MasterId } from './Master';
import type { Menu, MenuId } from './Menu';
import type { ReReview, ReReviewId } from './ReReview';
import type { Review, ReviewId } from './Review';
import type { Shop_has_Category, Shop_has_CategoryId } from './Shop_has_Category';
import type { Shop_has_Category_city, Shop_has_Category_cityId } from './Shop_has_Category_city';

export interface ShopAttributes {
  id: number;
  master_Id: number;
  business_hour?: string;
  image_src?: string;
  phoneNumber?: string;
  holiday?: string;
  map?: string;
  contents?: string;
}

export type ShopPk = "id";
export type ShopId = Shop[ShopPk];
export type ShopOptionalAttributes = "id" | "business_hour" | "image_src" | "phoneNumber" | "holiday" | "map" | "contents";
export type ShopCreationAttributes = Optional<ShopAttributes, ShopOptionalAttributes>;

export class Shop extends Model<ShopAttributes, ShopCreationAttributes> implements ShopAttributes {
  id!: number;
  master_Id!: number;
  business_hour?: string;
  image_src?: string;
  phoneNumber?: string;
  holiday?: string;
  map?: string;
  contents?: string;

  // Shop belongsTo Master via master_Id
  master!: Master;
  getMaster!: Sequelize.BelongsToGetAssociationMixin<Master>;
  setMaster!: Sequelize.BelongsToSetAssociationMixin<Master, MasterId>;
  createMaster!: Sequelize.BelongsToCreateAssociationMixin<Master>;
  // Shop hasMany Bookmark via shop_id
  Bookmarks!: Bookmark[];
  getBookmarks!: Sequelize.HasManyGetAssociationsMixin<Bookmark>;
  setBookmarks!: Sequelize.HasManySetAssociationsMixin<Bookmark, BookmarkId>;
  addBookmark!: Sequelize.HasManyAddAssociationMixin<Bookmark, BookmarkId>;
  addBookmarks!: Sequelize.HasManyAddAssociationsMixin<Bookmark, BookmarkId>;
  createBookmark!: Sequelize.HasManyCreateAssociationMixin<Bookmark>;
  removeBookmark!: Sequelize.HasManyRemoveAssociationMixin<Bookmark, BookmarkId>;
  removeBookmarks!: Sequelize.HasManyRemoveAssociationsMixin<Bookmark, BookmarkId>;
  hasBookmark!: Sequelize.HasManyHasAssociationMixin<Bookmark, BookmarkId>;
  hasBookmarks!: Sequelize.HasManyHasAssociationsMixin<Bookmark, BookmarkId>;
  countBookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // Shop hasMany Master via shop_Id
  Masters!: Master[];
  getMasters!: Sequelize.HasManyGetAssociationsMixin<Master>;
  setMasters!: Sequelize.HasManySetAssociationsMixin<Master, MasterId>;
  addMaster!: Sequelize.HasManyAddAssociationMixin<Master, MasterId>;
  addMasters!: Sequelize.HasManyAddAssociationsMixin<Master, MasterId>;
  createMaster!: Sequelize.HasManyCreateAssociationMixin<Master>;
  removeMaster!: Sequelize.HasManyRemoveAssociationMixin<Master, MasterId>;
  removeMasters!: Sequelize.HasManyRemoveAssociationsMixin<Master, MasterId>;
  hasMaster!: Sequelize.HasManyHasAssociationMixin<Master, MasterId>;
  hasMasters!: Sequelize.HasManyHasAssociationsMixin<Master, MasterId>;
  countMasters!: Sequelize.HasManyCountAssociationsMixin;
  // Shop hasMany Menu via shop_id
  Menus!: Menu[];
  getMenus!: Sequelize.HasManyGetAssociationsMixin<Menu>;
  setMenus!: Sequelize.HasManySetAssociationsMixin<Menu, MenuId>;
  addMenu!: Sequelize.HasManyAddAssociationMixin<Menu, MenuId>;
  addMenus!: Sequelize.HasManyAddAssociationsMixin<Menu, MenuId>;
  createMenu!: Sequelize.HasManyCreateAssociationMixin<Menu>;
  removeMenu!: Sequelize.HasManyRemoveAssociationMixin<Menu, MenuId>;
  removeMenus!: Sequelize.HasManyRemoveAssociationsMixin<Menu, MenuId>;
  hasMenu!: Sequelize.HasManyHasAssociationMixin<Menu, MenuId>;
  hasMenus!: Sequelize.HasManyHasAssociationsMixin<Menu, MenuId>;
  countMenus!: Sequelize.HasManyCountAssociationsMixin;
  // Shop hasMany ReReview via shop_id
  ReReviews!: ReReview[];
  getReReviews!: Sequelize.HasManyGetAssociationsMixin<ReReview>;
  setReReviews!: Sequelize.HasManySetAssociationsMixin<ReReview, ReReviewId>;
  addReReview!: Sequelize.HasManyAddAssociationMixin<ReReview, ReReviewId>;
  addReReviews!: Sequelize.HasManyAddAssociationsMixin<ReReview, ReReviewId>;
  createReReview!: Sequelize.HasManyCreateAssociationMixin<ReReview>;
  removeReReview!: Sequelize.HasManyRemoveAssociationMixin<ReReview, ReReviewId>;
  removeReReviews!: Sequelize.HasManyRemoveAssociationsMixin<ReReview, ReReviewId>;
  hasReReview!: Sequelize.HasManyHasAssociationMixin<ReReview, ReReviewId>;
  hasReReviews!: Sequelize.HasManyHasAssociationsMixin<ReReview, ReReviewId>;
  countReReviews!: Sequelize.HasManyCountAssociationsMixin;
  // Shop hasMany Review via Shop_id
  Reviews!: Review[];
  getReviews!: Sequelize.HasManyGetAssociationsMixin<Review>;
  setReviews!: Sequelize.HasManySetAssociationsMixin<Review, ReviewId>;
  addReview!: Sequelize.HasManyAddAssociationMixin<Review, ReviewId>;
  addReviews!: Sequelize.HasManyAddAssociationsMixin<Review, ReviewId>;
  createReview!: Sequelize.HasManyCreateAssociationMixin<Review>;
  removeReview!: Sequelize.HasManyRemoveAssociationMixin<Review, ReviewId>;
  removeReviews!: Sequelize.HasManyRemoveAssociationsMixin<Review, ReviewId>;
  hasReview!: Sequelize.HasManyHasAssociationMixin<Review, ReviewId>;
  hasReviews!: Sequelize.HasManyHasAssociationsMixin<Review, ReviewId>;
  countReviews!: Sequelize.HasManyCountAssociationsMixin;
  // Shop hasMany Shop_has_Category via shop_id
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
  // Shop hasMany Shop_has_Category_city via shop_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Shop {
    return Shop.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    master_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Master',
        key: 'id'
      }
    },
    business_hour: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_src: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    holiday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    map: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contents: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Shop',
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
        name: "fk_Shop_Master_idx",
        using: "BTREE",
        fields: [
          { name: "master_Id" },
        ]
      },
    ]
  });
  }
}
