import type { Sequelize } from "sequelize";
import { Bookmark as _Bookmark } from "./Bookmark";
import type { BookmarkAttributes, BookmarkCreationAttributes } from "./Bookmark";
import { Category as _Category } from "./Category";
import type { CategoryAttributes, CategoryCreationAttributes } from "./Category";
import { Category_city as _Category_city } from "./Category_city";
import type { Category_cityAttributes, Category_cityCreationAttributes } from "./Category_city";
import { Category_has_Category_city as _Category_has_Category_city } from "./Category_has_Category_city";
import type { Category_has_Category_cityAttributes, Category_has_Category_cityCreationAttributes } from "./Category_has_Category_city";
import { Master as _Master } from "./Master";
import type { MasterAttributes, MasterCreationAttributes } from "./Master";
import { Master_address as _Master_address } from "./Master_address";
import type { Master_addressAttributes, Master_addressCreationAttributes } from "./Master_address";
import { Menu as _Menu } from "./Menu";
import type { MenuAttributes, MenuCreationAttributes } from "./Menu";
import { Notification as _Notification } from "./Notification";
import type { NotificationAttributes, NotificationCreationAttributes } from "./Notification";
import { ReReview as _ReReview } from "./ReReview";
import type { ReReviewAttributes, ReReviewCreationAttributes } from "./ReReview";
import { Reservation as _Reservation } from "./Reservation";
import type { ReservationAttributes, ReservationCreationAttributes } from "./Reservation";
import { Review as _Review } from "./Review";
import type { ReviewAttributes, ReviewCreationAttributes } from "./Review";
import { Shop as _Shop } from "./Shop";
import type { ShopAttributes, ShopCreationAttributes } from "./Shop";
import { Shop_has_Category as _Shop_has_Category } from "./Shop_has_Category";
import type { Shop_has_CategoryAttributes, Shop_has_CategoryCreationAttributes } from "./Shop_has_Category";
import { Shop_has_Category_city as _Shop_has_Category_city } from "./Shop_has_Category_city";
import type { Shop_has_Category_cityAttributes, Shop_has_Category_cityCreationAttributes } from "./Shop_has_Category_city";
import { User as _User } from "./User";
import type { UserAttributes, UserCreationAttributes } from "./User";

export {
  _Bookmark as Bookmark,
  _Category as Category,
  _Category_city as Category_city,
  _Category_has_Category_city as Category_has_Category_city,
  _Master as Master,
  _Master_address as Master_address,
  _Menu as Menu,
  _Notification as Notification,
  _ReReview as ReReview,
  _Reservation as Reservation,
  _Review as Review,
  _Shop as Shop,
  _Shop_has_Category as Shop_has_Category,
  _Shop_has_Category_city as Shop_has_Category_city,
  _User as User,
};

export type {
  BookmarkAttributes,
  BookmarkCreationAttributes,
  CategoryAttributes,
  CategoryCreationAttributes,
  Category_cityAttributes,
  Category_cityCreationAttributes,
  Category_has_Category_cityAttributes,
  Category_has_Category_cityCreationAttributes,
  MasterAttributes,
  MasterCreationAttributes,
  Master_addressAttributes,
  Master_addressCreationAttributes,
  MenuAttributes,
  MenuCreationAttributes,
  NotificationAttributes,
  NotificationCreationAttributes,
  ReReviewAttributes,
  ReReviewCreationAttributes,
  ReservationAttributes,
  ReservationCreationAttributes,
  ReviewAttributes,
  ReviewCreationAttributes,
  ShopAttributes,
  ShopCreationAttributes,
  Shop_has_CategoryAttributes,
  Shop_has_CategoryCreationAttributes,
  Shop_has_Category_cityAttributes,
  Shop_has_Category_cityCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Bookmark = _Bookmark.initModel(sequelize);
  const Category = _Category.initModel(sequelize);
  const Category_city = _Category_city.initModel(sequelize);
  const Category_has_Category_city = _Category_has_Category_city.initModel(sequelize);
  const Master = _Master.initModel(sequelize);
  const Master_address = _Master_address.initModel(sequelize);
  const Menu = _Menu.initModel(sequelize);
  const Notification = _Notification.initModel(sequelize);
  const ReReview = _ReReview.initModel(sequelize);
  const Reservation = _Reservation.initModel(sequelize);
  const Review = _Review.initModel(sequelize);
  const Shop = _Shop.initModel(sequelize);
  const Shop_has_Category = _Shop_has_Category.initModel(sequelize);
  const Shop_has_Category_city = _Shop_has_Category_city.initModel(sequelize);
  const User = _User.initModel(sequelize);

  Category_has_Category_city.belongsTo(Category, { as: "category", foreignKey: "category_id"});
  Category.hasMany(Category_has_Category_city, { as: "Category_has_Category_cities", foreignKey: "category_id"});
  Shop_has_Category.belongsTo(Category, { as: "category", foreignKey: "category_id"});
  Category.hasMany(Shop_has_Category, { as: "Shop_has_Categories", foreignKey: "category_id"});
  Category_has_Category_city.belongsTo(Category_city, { as: "category_city", foreignKey: "category_city_id"});
  Category_city.hasMany(Category_has_Category_city, { as: "Category_has_Category_cities", foreignKey: "category_city_id"});
  Shop_has_Category_city.belongsTo(Category_city, { as: "category_city", foreignKey: "category_city_id"});
  Category_city.hasMany(Shop_has_Category_city, { as: "Shop_has_Category_cities", foreignKey: "category_city_id"});
  Master_address.belongsTo(Master, { as: "master", foreignKey: "master_id"});
  Master.hasMany(Master_address, { as: "Master_addresses", foreignKey: "master_id"});
  Shop.belongsTo(Master, { as: "master", foreignKey: "master_Id"});
  Master.hasMany(Shop, { as: "Shops", foreignKey: "master_Id"});
  Reservation.belongsTo(Menu, { as: "menu", foreignKey: "menu_id"});
  Menu.hasMany(Reservation, { as: "Reservations", foreignKey: "menu_id"});
  Notification.belongsTo(Reservation, { as: "reservation", foreignKey: "reservation_id"});
  Reservation.hasMany(Notification, { as: "Notifications", foreignKey: "reservation_id"});
  ReReview.belongsTo(Review, { as: "review", foreignKey: "review_id"});
  Review.hasMany(ReReview, { as: "ReReviews", foreignKey: "review_id"});
  Bookmark.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Bookmark, { as: "Bookmarks", foreignKey: "shop_id"});
  Master.belongsTo(Shop, { as: "shop", foreignKey: "shop_Id"});
  Shop.hasMany(Master, { as: "Masters", foreignKey: "shop_Id"});
  Menu.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Menu, { as: "Menus", foreignKey: "shop_id"});
  ReReview.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(ReReview, { as: "ReReviews", foreignKey: "shop_id"});
  Review.belongsTo(Shop, { as: "Shop", foreignKey: "Shop_id"});
  Shop.hasMany(Review, { as: "Reviews", foreignKey: "Shop_id"});
  Shop_has_Category.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Shop_has_Category, { as: "Shop_has_Categories", foreignKey: "shop_id"});
  Shop_has_Category_city.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Shop_has_Category_city, { as: "Shop_has_Category_cities", foreignKey: "shop_id"});
  Bookmark.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Bookmark, { as: "Bookmarks", foreignKey: "user_id"});
  Reservation.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Reservation, { as: "Reservations", foreignKey: "user_id"});
  Review.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Review, { as: "Reviews", foreignKey: "user_id"});

  return {
    Bookmark: Bookmark,
    Category: Category,
    Category_city: Category_city,
    Category_has_Category_city: Category_has_Category_city,
    Master: Master,
    Master_address: Master_address,
    Menu: Menu,
    Notification: Notification,
    ReReview: ReReview,
    Reservation: Reservation,
    Review: Review,
    Shop: Shop,
    Shop_has_Category: Shop_has_Category,
    Shop_has_Category_city: Shop_has_Category_city,
    User: User,
  };
}
