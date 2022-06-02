const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  get: async (req, res) => {
    const reviewInfo = await Models.Review.findAll({
      include: [
        {
          model: Models.User,
          as: 'user',
          attributes: ['user_name', 'profile', 'shop_name'],
        },
        {
          model: Models.Shop,
          as: 'shop',
          attributes: ['image_src'],
        },
      ],
      attributes: [
        'image_src',
        'user_id',
        'score',
        'contents',
        'createdAt',
        'updatedAt',
        'shop_id',
      ],
    });
    res.status(200).send({ data: reviewInfo, message: '정보 전달 완료' });
  },
  post: async (req, res) => {
    res.send('');
  },
};
