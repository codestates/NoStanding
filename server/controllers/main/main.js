const axios = require('axios');
const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const request = require('request');

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
          model: Models.Bookmark,
          as: 'Bookmarks',
          attributes: ['is_marked'],
        },
      ],
      attributes: ['image_src', 'id'],
    });
    return res.status(200).send({ data: mainInfo, message: '정보 전달 완료' });
  },
};
