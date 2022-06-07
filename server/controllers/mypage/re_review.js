const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const { userAuth } = require('../../middlewares/authorized/auth');

module.exports = {
  get: async (req, res) => {
    try {
      // const userInfo = await userAuth(req, res);
      // if (!userInfo) {
      //   return res.status(400).json({ message: '유저정보 없음' });
      // }
      // delete userInfo.dataValues.password;
      // delete userInfo.dataValues.user_salt;

      const { user_name } = req.params;
      //고객 정보 불러오기
      const userInfo2 = await Models.User.findOne({
        include: [
          {
            model: Models.Review,
            as: 'Reviews',
            attributes: [
              'id',
              'shop_id',
              'image_src',
              'score',
              'contents',
              'createdAt',
              'updatedAt',
            ],
          },
          {
            model: Models.Shop,
            as: 'Shops',
            attributes: ['id'],
          },
        ],
        where: { user_name: user_name },
        attributes: ['is_master', 'nickname'],
      });
      const is_master = userInfo2.dataValues.is_master;

      if (is_master === 0) {
        // 유저일 때
        let shopArr = [];
        for (let n = 0; n < userInfo2.dataValues.Reviews.length; n++) {
          const shopinfo = await Models.Shop.findOne({
            include: [
              {
                model: Models.User,
                as: 'user',
                attributes: ['shop_name'],
              },
            ],
            where: { id: userInfo2.dataValues.Reviews[n].shop_id },
            attributes: ['id', 'image_src'],
          });
          shopArr.push(shopinfo);
        }
        return res
          .status(200)
          .send({ data: userInfo2, shopArr, message: '정보 전달 완료' });
      }
      if (is_master === 1) {
        // 점주일 때
        const shopReview = await Models.Shop.findOne({
          include: [
            {
              model: Models.User,
              as: 'user',
              where: { user_name: user_name },
              attributes: ['nickname', 'shop_name'],
            },
            {
              model: Models.Review,
              as: 'Reviews',
              attributes: [
                'id',
                'image_src',
                'score',
                'contents',
                'createdAt',
                'updatedAt',
              ],
              include: [
                {
                  model: Models.ReReview,
                  as: 'ReReviews',
                  attributes: ['id', 'contents', 'createdAt', 'updatedAt'],
                },
              ],
            },
          ],
          attributes: [],
        });
        return res
          .status(200)
          .send({ data: [shopReview], message: '정보 전달 완료' });
      }
    } catch (err) {
      res.status(500).send({ message: 'Server Error' });
    }
  },
  post: async (req, res) => {
    try {
      const userInfo = await userAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '유저정보 없음' });
      }
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { review_id, user_name } = req.params;

      const shopInfo = await Models.Shop.findOne({
        include: [
          {
            model: Models.User,
            as: 'user',
            where: { user_name: user_name },
            attributes: ['id'],
          },
        ],
        attributes: ['id'],
      });

      const { contents } = req.body;

      if (!contents) {
        return res.status(400).send({ message: '리뷰 작성은 필수입니다.' });
      }
      await Models.ReReview.create({
        review_id: review_id,
        shop_id: shopInfo.dataValues.id,
        contents: contents,
      });

      res.status(200).send({ message: '리뷰 작성 완료' });
    } catch (err) {
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
