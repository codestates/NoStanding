var DataTypes = require('sequelize').DataTypes;
var _Bookmark = require('./Bookmark');
var _Menu = require('./Menu');
var _Notification = require('./Notification');
var _ReReview = require('./ReReview');
var _Reservation = require('./Reservation');
var _Review = require('./Review');
var _Shop = require('./Shop');
var _User = require('./User');

function initModels(sequelize) {
  var Bookmark = _Bookmark(sequelize, DataTypes);
  var Menu = _Menu(sequelize, DataTypes);
  var Notification = _Notification(sequelize, DataTypes);
  var ReReview = _ReReview(sequelize, DataTypes);
  var Reservation = _Reservation(sequelize, DataTypes);
  var Review = _Review(sequelize, DataTypes);
  var Shop = _Shop(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Reservation.belongsTo(Menu, { as: 'menu', foreignKey: 'menu_id' });
  Menu.hasMany(Reservation, { as: 'Reservations', foreignKey: 'menu_id' });
  Notification.belongsTo(Reservation, {
    as: 'reservation',
    foreignKey: 'reservation_id',
  });
  Reservation.hasMany(Notification, {
    as: 'Notifications',
    foreignKey: 'reservation_id',
  });
  ReReview.belongsTo(Review, { as: 'review', foreignKey: 'review_id' });
  Review.hasMany(ReReview, { as: 'ReReviews', foreignKey: 'review_id' });
  Bookmark.belongsTo(Shop, { as: 'shop', foreignKey: 'shop_id' });
  Shop.hasMany(Bookmark, { as: 'Bookmarks', foreignKey: 'shop_id' });
  Menu.belongsTo(Shop, { as: 'shop', foreignKey: 'shop_id' });
  Shop.hasMany(Menu, { as: 'Menus', foreignKey: 'shop_id' });
  ReReview.belongsTo(Shop, { as: 'shop', foreignKey: 'shop_id' });
  Shop.hasMany(ReReview, { as: 'ReReviews', foreignKey: 'shop_id' });
  Review.belongsTo(Shop, { as: 'shop', foreignKey: 'shop_id' });
  Shop.hasMany(Review, { as: 'Reviews', foreignKey: 'shop_id' });
  Bookmark.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(Bookmark, { as: 'Bookmarks', foreignKey: 'user_id' });
  Reservation.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(Reservation, { as: 'Reservations', foreignKey: 'user_id' });
  Review.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(Review, { as: 'Reviews', foreignKey: 'user_id' });
  Shop.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(Shop, { as: 'Shops', foreignKey: 'user_id' });

  return {
    Bookmark,
    Menu,
    Notification,
    ReReview,
    Reservation,
    Review,
    Shop,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
