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
          {
            model: Models.Menu,
            as: 'Menus',
            attributes: [
              'id',
              'shop_id',
              'image_src',
              'menu_category',
              'name',
              'price',
            ],
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
      const userInfo = await userAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '유저정보 없음' });
      }
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { shop_id, image_src, menu_category, name, price } = req.body;
      const menuInfo = await Models.Menu.findOne({
        where: {
          shop_id: shop_id,
        },
      });

      if (!menuInfo) {
        return res.status(200).send({ message: '메뉴 정보를 입력해주세요' });
      } else {
        const menuUpdate = await Models.Menu.update(
          {
            image_src: image_src ? image_src : menuInfo.dataValues.image_src,
            menu_category: menu_category
              ? menu_category
              : userInfo.dataValues.menu_category,
            name: name ? name : menuInfo.dataValues.name,
            price: price ? price : menuInfo.dataValues.price,
          },
          { where: { shop_id: shop_id } },
        );
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
  patch: async (req, res) => {
    try {
      const userInfo = await userAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '유저정보 없음' });
      }
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.user_salt;

      const { shop_id, image_src, menu_category, name, price } = req.body;
      const menuInfo = await Models.Menu.findOne({
        where: {
          shop_id: shop_id,
        },
      });

      if (menu_category === null) {
        // menu_category를 지우면 전부 삭제
        await Models.Menu
          .Destory
          // {
          //   image_src: null,
          //   name: null,
          //   price: null,
          //   menu_category: null,
          // },
          // { where: { shop_id: shop_id } },
          ();
      }

      await Models.Menu.update(
        {
          // x 버튼을 눌러서 true 값으로 변환되면, null값을 줘서 삭제
          image_src: image_src ? null : menuInfo.dataValues.image_src,
          name: name ? null : menuInfo.dataValues.name,
          price: price ? null : menuInfo.dataValues.price,
        },
        { where: { shop_id: shop_id } },
      );

      res.status(201).send({ message: '정보 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
