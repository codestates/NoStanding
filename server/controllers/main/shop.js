const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  get: async (req, res) => {
    const shopInfo = await Models.Shop.findAll({
      // 리뷰리뷰수, 리뷰별점
      include: [
        {
          model: Models.User,
          as: 'user',
          attributes: ['shop_name', 'master_address'],
        },
        {
          model: Models.Bookmark,
          as: 'Bookmarks',
          attributes: ['ismarked'],
        },
        {
          model: Models.Review,
          as: 'Reviews',
          attributes: ['contents'],
        },
        {
          model: Models.Menu,
          as: 'Menus',
          attributes: ['image_src', 'menu_category', 'name', 'price'],
        },
      ],
      attributes: ['image_src', 'contents', 'map'],
    });
    res.status(200).send({ data: shopInfo, message: '정보 전달 완료' });
  },
};
