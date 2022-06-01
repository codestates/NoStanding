const { Shop, User } = require('../../models');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const db = require('../../models');

module.exports = {
  get: async (req, res) => {
    const { shop_category, shop_category_city } = req.body;

    const query = `SELECT * FROM User U join Shop S ON U.id = S.user_id`;

    const shoplist = await db.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    const shopInfo = await shoplist.findAll({
      where: {
        [Op.and]: [
          shop_category ? { shop_category: shop_category } : null,
          shop_category_city
            ? { shop_category_city: shop_category_city }
            : null,
        ],
      },
    });

    if (!shopInfo) {
      res.status(404).send({ message: '해당 자료 없음' });
    } else {
      res.status(200).send({ data: shopInfo, message: '검색 성공' });
    }
  },
};

// module.exports = {
//   get: async (req, res) => {
//     const { shop_category, shop_category_city } = req.body;

//     const shopInfo = await User.findAll({
//       include: [
//         {
//           model: Shop,
//           attributes: ['business_hour', 'image_src', 'phone_number', 'holiday', 'map', 'contents'],
//         },
//       ],
//       where: {
//         [Op.and]: [
//           shop_category ? { shop_category: shop_category } : null,
//           shop_category_city
//             ? { shop_category_city: shop_category_city }
//             : null,
//         ],
//       },
//     });

//     if (!shopInfo) {
//       res.status(404).send({ message: '해당 자료 없음' });
//     } else {
//       res.status(200).send({ data: shopInfo, message: '검색 성공' });
//     }
//   },
// };
