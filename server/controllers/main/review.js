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

      const { score, contents } = req.body;

      console.log(req.body);

      if (!score || !contents) {
        return res
          .status(400)
          .send({ message: '별점과 리뷰 작성은 필수입니다.' });
      }
      await Models.Review.create({
        user_id: userInfo.dataValues.id,
        shop_id: shop_id,
        score: score,
        contents: contents,
      });

      const reviewInfo = await Models.Review.findAll({
        where: { shop_id: shop_id },
      });

      let score_average = 0;
      let average = 0;

      // 별점 모두 더하기
      for (let n = 0; n < reviewInfo.length; n++) {
        average += reviewInfo[n].dataValues.score;
      }
      // 별점 평균 구하기
      score_average = average / reviewInfo.length;

      // let array = JSON.stringify(['a', 'b', 'c']);

      await Models.Shop.update(
        {
          total_views: reviewInfo.length,
          // 소수점 1의 자리로 자르기
          score_average: score_average.toFixed(1),
        },
        { where: { id: shop_id } },
      );
      res.status(200).send({ message: '리뷰 작성 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
