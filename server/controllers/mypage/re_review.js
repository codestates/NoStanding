const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  get: async (req, res) => {
    const { user_name } = req.params;
    // const userInfo = await Models.User.findAll({
    //   where: { user_name: user_name },
    // });

    // const ismaster = userInfo.dataValues.ismaster;

    //유저일 때

    // [샵]가게 사진, [유저]가게 이름
    // 리뷰 전부

    const re_reviewInfo = await Models.User.findAll({
      include: [
        {
          model: Models.Shop,
          as: 'Shops',
          attributes: ['image_src'],
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
        },
      ],
      attributes: ['shop_name'],
      where: { user_name: user_name },
    });
    res.status(200).send({ data: re_reviewInfo, message: '정보 전달 완료' });

    // 점주일 때
    // [리뷰] 전부
    // [유저] 이름

    //   const re_reviewInfo = await Models.Review.findAll({
    //     include: [
    //       {
    //         model: Models.User,
    //         as: 'user',
    //         where: { user_name: user_name },
    //         attributes: ['user_name'],
    //       },
    //       {
    //         model: Models.Shop,
    //         as: 'shop',
    //         attributes: ['id'],
    //       },
    //       {
    //         model: Models.ReReview,
    //         as: 'ReReviews',
    //         attributes: [
    //           'review_id',
    //           'shop_id',
    //           'contents',
    //           'createdAt',
    //           'updatedAt',
    //         ],
    //       },
    //     ],
    //     attributes: [
    //       'id',
    //       'image_src',
    //       'score',
    //       'contents',
    //       'createdAt',
    //       'updatedAt',
    //     ],
    //   });
    //   res.status(200).send({ data: re_reviewInfo, message: '정보 전달 완료' });
  },
  post: (req, res) => {
    res.send('');
  },
};
