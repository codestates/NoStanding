const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const { Op } = require('sequelize');

const db = require('../../models');

module.exports = {
  get: async (req, res) => {
    // 가게 이름 , 주소 ,
    try {
      const { shop_category, shop_category_city } = req.query;
      const shopInfo = await Models.Shop.findAll({
        include: [
          {
            model: Models.User,
            as: 'user',
            where: {
              [Op.and]: [
                shop_category ? { shop_category: shop_category } : null,
                shop_category_city
                  ? { shop_category_city: shop_category_city }
                  : null,
              ],
            },
            attributes: [
              'shop_category',
              'shop_name',
              'shop_category_city',
              'master_address',
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
            attributes: [],
          },
        ],
        attributes: ['id'],
      });

      return res
        .status(200)
        .send({ data: shopInfo, message: '정보 전달 완료' });
    } catch (err) {
      return res.status(500).send({ message: 'Server Error' });
    }
  },
};
