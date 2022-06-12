const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const { userAuth } = require('../../middlewares/authorized/auth');
const { User, Shop } = require('../../models');
const { json } = require('body-parser');

module.exports = {
  get: async (req, res) => {
    try {
      const userInfo = await userAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '유저정보 없음' });
      }
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { user_name } = req.params;
      const shopInfo = await Models.Shop.findAll({
        include: [
          {
            model: Models.User,
            as: 'user',
            where: { user_name: user_name },
            attributes: ['user_name'],
          },
        ],
        attributes: ['image_src', 'user_id'],
      });
      console.log(shopInfo);
      res.status(200).send({ data: shopInfo, message: '정보 전달 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
  post: async (req, res) => {
    const { user_name } = req.params;

    const userInfo = await User.findOne({
      where: {
        user_name: user_name,
      },
    });
    try {
      const imageArr = [];

      for (let i = 0; i < req.files.length; i++) {
        let key = req.files[i].key;
        let location = req.files[i].location;

        imageArr.push({ key: key, location: location });
      }

      await Shop.update(
        {
          image_src: JSON.stringify(imageArr),
        },
        { where: { user_id: userInfo.dataValues.id } },
      );
      res.send({ message: '사진 업로드 완료' });
    } catch (err) {
      console.log(err);
      res.send('서버 에러');
    }
  },

  patch: async (req, res) => {
    // const userInfo = await userAuth(req, res);
    // if (!userInfo) {
    //   return res.status(400).json({ message: '유저정보 없음' });
    // }
    // delete userInfo.dataValues.password;
    // delete userInfo.dataValues.user_salt;

    try {
      const { user_id, image_src, image_number } = req.body;
      const menuInfo = await Models.Shop.findOne({
        where: {
          user_id: user_id,
        },
        attributes: ['image_src'],
      });

      let menu = menuInfo.dataValues;
      console.log(menu);
      let menuParse = JSON.parse(menu.image_src);
      console.log(menuParse[0]);

      // for (let n = 0; n < 4; n++) {
      //   await Models.Shop.update(
      //     {
      //       // x 버튼을 눌러서 true 값으로 변환되면, null값을 줘서 삭제
      //       image_src: image_src
      //         ? menuParse[n] === null
      //         : menuInfo.dataValues.image_src,
      //     },
      //     { where: { user_id: user_id } },
      //   );
      // }

      menuParse[image_number] = null;
      // await Models.Shop.update(
      //   {
      //     // x 버튼을 눌러서 true 값으로 변환되면, null값을 줘서 삭제
      //     image_src: image_src
      //       ? JSON.stringify(menuParse)
      //       : menuInfo.dataValues.image_src,
      //   },
      //   { where: { user_id: user_id } },
      // );

      res.status(201).send({ message: '정보 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
