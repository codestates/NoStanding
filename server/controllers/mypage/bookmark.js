const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  get: async (req, res) => {
    try {
      const { user_name } = req.params;

      const userInfo = await Models.User.findOne({
        where: { user_name: user_name },
      });

      const bookmarkInfo = await Models.Bookmark.findAll({
        where: {
          user_id: userInfo.dataValues.id,
          is_marked: 1,
        },
      });

      let bookmarkData = [];

      for (let i = 0; i < bookmarkInfo.length; i++) {
        const shopInfo = await Models.Shop.findAll({
          // 리뷰리뷰수, 리뷰별점
          include: [
            {
              model: Models.User,
              as: 'user',
              attributes: ['shop_name', 'master_address', 'user_name'],
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
          where: { id: bookmarkInfo[i].dataValues.shop_id },
          attributes: ['image_src', 'contents', 'map', 'id'],
        });

        bookmarkData.push(shopInfo);
      }

      console.log(bookmarkData);

      res.status(200).send({ data: bookmarkData, message: '정보 전달 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
