const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const { User, Shop } = require('../../models');
const Review = require('../../models/Review');
const { json } = require('body-parser');
const Models = initModels(sequelize);

module.exports = {
  post: async (req, res) => {
    const { user_name, shop_id } = req.params;

    const userInfo = await User.findOne({
      where: {
        user_name: user_name,
      },
    });

    try {
        const imageArr = [];
      // const imageArr = [];

      for (let i = 0; i < req.files.length; i++) {
        let key = req.files[i].key;
        let location = req.files[i].location;
        imageArr.push({ key: key, location: location });
      }
      // const image = {key : req.file.key , src : req.file.location}

      const reviewInfo = Models.Review.findOne({
        where: {
          user_id: userInfo.dataValues.id,
          shop_id: shop_id,
        },
      });

      if (!reviewInfo) {
        await Models.Review.create({
          user_id: userInfo.dataValues.id,
          image_src: JSON.stringify(imageArr),
          shop_id: shop_id,
        });
      } else {
        await Models.Review.update(
          {
            image_src: JSON.stringify(imageArr),
          },
          {
            where: {
              user_id: userInfo.dataValues.id,
              shop_id: shop_id,
            },
          },
        );
      }
      res.status(200).send({ message: '이미지 업로드 완료' });
    } catch (err) {
      console.log(err);
      res.send({ message: '서버 에러' });
    }
  },

  patch: async (req, res) => {
    const {} = req.body;

    const userInfo = await User.findOne({
      where: {
        user_name: user_name,
      },
    });

    try {
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};