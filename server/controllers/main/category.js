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
              'address_line1',
              'address_line2',
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
        attributes: ['id', 'image_src'],
      });

      const arrInfo = [];
      shopInfo.map(el => {
        arrInfo.push({
          image_src: el.image_src,
          id: el.id,
          shop_category: el.user.shop_category,
          shop_category_city: el.user.shop_category_city,
          shop_name: el.user.shop_name,
          address_line1: el.user.address_line1,
          address_line2: el.user.address_line2,
          is_marked: el.Bookmarks.is_marked,
        });
      });

      return res.status(200).send({ data: arrInfo, message: '정보 전달 완료' });
    } catch (err) {
      return res.status(500).send({ message: 'Server Error' });
    }
  },
};