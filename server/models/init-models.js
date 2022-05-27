var DataTypes = require("sequelize").DataTypes;
var _Bookmark = require("./Bookmark");
var _Category = require("./Category");
var _Category_city = require("./Category_city");
var _Category_has_Category_city = require("./Category_has_Category_city");
var _Master_address = require("./Master_address");
var _Menu = require("./Menu");
var _Notification = require("./Notification");
var _ReReview = require("./ReReview");
var _Reservation = require("./Reservation");
var _Review = require("./Review");
var _Shop = require("./Shop");
var _Shop_has_Category = require("./Shop_has_Category");
var _Shop_has_Category_city = require("./Shop_has_Category_city");
var _User = require("./User");

function initModels(sequelize) {
  var Bookmark = _Bookmark(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var Category_city = _Category_city(sequelize, DataTypes);
  var Category_has_Category_city = _Category_has_Category_city(sequelize, DataTypes);
  var Master_address = _Master_address(sequelize, DataTypes);
  var Menu = _Menu(sequelize, DataTypes);
  var Notification = _Notification(sequelize, DataTypes);
  var ReReview = _ReReview(sequelize, DataTypes);
  var Reservation = _Reservation(sequelize, DataTypes);
  var Review = _Review(sequelize, DataTypes);
  var Shop = _Shop(sequelize, DataTypes);
  var Shop_has_Category = _Shop_has_Category(sequelize, DataTypes);
  var Shop_has_Category_city = _Shop_has_Category_city(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Category_has_Category_city.belongsTo(Category, { as: "category", foreignKey: "category_id"});
  Category.hasMany(Category_has_Category_city, { as: "Category_has_Category_cities", foreignKey: "category_id"});
  Shop_has_Category.belongsTo(Category, { as: "category", foreignKey: "category_id"});
  Category.hasMany(Shop_has_Category, { as: "Shop_has_Categories", foreignKey: "category_id"});
  Category_has_Category_city.belongsTo(Category_city, { as: "category_city", foreignKey: "category_city_id"});
  Category_city.hasMany(Category_has_Category_city, { as: "Category_has_Category_cities", foreignKey: "category_city_id"});
  Shop_has_Category_city.belongsTo(Category_city, { as: "category_city", foreignKey: "category_city_id"});
  Category_city.hasMany(Shop_has_Category_city, { as: "Shop_has_Category_cities", foreignKey: "category_city_id"});
  Reservation.belongsTo(Menu, { as: "menu", foreignKey: "menu_id"});
  Menu.hasMany(Reservation, { as: "Reservations", foreignKey: "menu_id"});
  Notification.belongsTo(Reservation, { as: "reservation", foreignKey: "reservation_id"});
  Reservation.hasMany(Notification, { as: "Notifications", foreignKey: "reservation_id"});
  ReReview.belongsTo(Review, { as: "review", foreignKey: "review_id"});
  Review.hasMany(ReReview, { as: "ReReviews", foreignKey: "review_id"});
  Bookmark.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Bookmark, { as: "Bookmarks", foreignKey: "shop_id"});
  Menu.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Menu, { as: "Menus", foreignKey: "shop_id"});
  ReReview.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(ReReview, { as: "ReReviews", foreignKey: "shop_id"});
  Review.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Review, { as: "Reviews", foreignKey: "shop_id"});
  Shop_has_Category.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Shop_has_Category, { as: "Shop_has_Categories", foreignKey: "shop_id"});
  Shop_has_Category_city.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(Shop_has_Category_city, { as: "Shop_has_Category_cities", foreignKey: "shop_id"});
  User.belongsTo(Shop, { as: "shop", foreignKey: "shop_id"});
  Shop.hasMany(User, { as: "Users", foreignKey: "shop_id"});
  Bookmark.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Bookmark, { as: "Bookmarks", foreignKey: "user_id"});
  Master_address.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Master_address, { as: "Master_addresses", foreignKey: "user_id"});
  Reservation.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Reservation, { as: "Reservations", foreignKey: "user_id"});
  Review.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Review, { as: "Reviews", foreignKey: "user_id"});
  Shop.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Shop, { as: "Shops", foreignKey: "user_id"});

  return {
    Bookmark,
    Category,
    Category_city,
    Category_has_Category_city,
    Master_address,
    Menu,
    Notification,
    ReReview,
    Reservation,
    Review,
    Shop,
    Shop_has_Category,
    Shop_has_Category_city,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
