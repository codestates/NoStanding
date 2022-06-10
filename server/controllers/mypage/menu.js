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
      const shopInfo = await Models.Shop.findAll({
        include: [
          {
            model: Models.User,
            as: 'user',
            where: { user_name: user_name },
            attributes: ['user_name'],
          },
          {
            model: Models.Menu,
            as: 'Menus',
            attributes: ['id', 'shop_id', 'image_src', 'name', 'price'],
          },
        ],
        attributes: [],
      });
      res.status(200).send({ data: shopInfo, message: '정보 전달 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
  post: async (req, res) => {
    try {
      // const userInfo = await userAuth(req, res);
      // if (!userInfo) {
      //   return res.status(400).json({ message: '유저정보 없음' });
      // }
      // delete userInfo.dataValues.password;
      // delete userInfo.dataValues.user_salt;

      const { shop_id, image_src, name, price } = req.body;
      const menuInfo = await Models.Menu.findOne({
        where: {
          shop_id: shop_id,
        },
      });

      if (!menuInfo) {
        return res.status(400).send({ message: '존재하지 않는 가게입니다.' });
      } else {
        const menuUpdate = await Models.Menu.create({
          shop_id: shop_id,
          image_src: image_src,
          name: name,
          price: price,
        });
        res.status(200).send({
          data: { menuInfo: menuUpdate },
          message: '정보 입력 완료',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
  delete: async (req, res) => {
    try {
      // const userInfo = await userAuth(req, res);
      // if (!userInfo) {
      //   return res.status(400).json({ message: '유저정보 없음' });
      // }
      // delete userInfo.dataValues.password;
      // delete userInfo.dataValues.user_salt;

      const { shop_id, name } = req.params;
      console.log(req.params);
      await Models.Menu.destroy({ where: { shop_id: shop_id, name: name } });

      res.status(201).send({ message: '정보 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
