const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  post: async (req, res) => {
    try {
      const { shop_id, user_name } = req.params;

      const userInfo = await Models.User.findOne({
        where: { user_name: user_name },
      });
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { image_src, score, contents } = req.body;

      if (!score || !contents) {
        return res
          .status(400)
          .send({ message: '별점과 리뷰 작성은 필수입니다.' });
      }
      await Models.Review.create({
        user_id: userInfo.dataValues.id,
        shop_id: shop_id,
        image_src: image_src, // 해싱된 비밀번호
        score: score,
        contents: contents,
      });

      res.status(200).send({ message: '리뷰 작성 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
