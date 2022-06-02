const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const { userAuth } = require('../../middlewares/auth');

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
    try {
      const userInfo = await userAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '유저정보 없음' });
      }
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { user_id, image_src } = req.body;
      const imgInfo = await Models.Shop.findOne({
        where: {
          user_id: user_id,
        },
      });

      if (!imgInfo) {
        return res.status(200).send({ message: '메뉴 정보를 입력해주세요' });
      } else {
        const imgUpdate = await Models.Shop.update(
          {
            image_src: image_src ? image_src : imgInfo.dataValues.image_src,
          },
          { where: { user_id: user_id } },
        );
        res.status(200).send({
          data: { imgInfo: imgUpdate },
          message: '정보 입력 완료',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
  patch: async (req, res) => {
    const userInfo = await userAuth(req, res);
    if (!userInfo) {
      return res.status(400).json({ message: '유저정보 없음' });
    }
    delete userInfo.dataValues.password;
    delete userInfo.dataValues.user_salt;

    try {
      const { user_id, image_src } = req.body;
      const menuInfo = await Models.Shop.findOne({
        where: {
          user_id: user_id,
        },
      });

      await Models.Shop.update(
        {
          // x 버튼을 눌러서 true 값으로 변환되면, null값을 줘서 삭제
          image_src: image_src ? null : menuInfo.dataValues.image_src,
        },
        { where: { user_id: user_id } },
      );

      res.status(201).send({ message: '정보 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
