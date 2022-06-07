const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    const mainInfo = await Models.Shop.findAll({
      // 샵사진, 리뷰별점, 리뷰리뷰
      include: [
        {
          model: Models.User,
          as: 'user',
          attributes: [
            'shop_category',
            'shop_name',
            'shop_category_city',
            'address_line1',
            'address_line2',
          ],
        },
        {
          model: Models.Review,
          as: 'Reviews',
          attributes: [
            'image_src',
            'score',
            'contents',
            'createdAt',
            'updatedAt',
          ],
        },
        {
          model: Models.Bookmark,
          as: 'Bookmarks',
          attributes: ['is_marked'],
        },
        {
          model: Models.Review,
          as: 'Reviews',
          attributes: [
            'image_src',
            'score',
            'contents',
            'createdAt',
            'updatedAt',
          ],
        },
      ],
      attributes: ['image_src', 'id'],
    });

    const arrInfo = [];
    mainInfo.map(el => {
      arrInfo.push({
        image_src: el.image_src,
        id: el.id,
        shop_category: el.user.shop_category,
        shop_category_city: el.user.shop_category_city,
        shop_name: el.user.shop_name,
        address_line1: el.user.address_line1,
        address_line2: el.user.address_line2,
        is_marked: el.Bookmarks.is_marked,
        review_num: el.Reviews.length,
      });
    });

    return res.status(200).send({ data: arrInfo, message: '정보 전달 완료' });
  },
};
