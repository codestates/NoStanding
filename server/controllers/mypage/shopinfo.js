const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const { userAuth } = require('../../middlewares/auth');

module.exports = {
  get: async (req, res) => {
    try {
      const { user_name } = req.params;
      const shopInfo = await Models.Shop.findOne({
        //상호명 운영시간 전화번호 휴무일 가게소개
        include: [
          {
            model: Models.User,
            as: 'user',
            where: { user_name: user_name },
            attributes: ['user_name', 'shop_name'],
          },
        ],
        attributes: [
          'user_id',
          'business_hour',
          'phone_number',
          'holiday',
          'contents',
        ],
      });
      res.status(200).send({ data: shopInfo, message: '정보 전달 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Sever Error' });
    }
  },
  post: async (req, res) => {
    try {
      const {
        user_id,
        shop_name,
        business_hour,
        phone_number,
        holiday,
        contents,
      } = req.body;

      const shopInfo = await Models.Shop.findOne({
        where: {
          user_id: user_id,
        },
      });

      if (!shopInfo) {
        return res.status(200).send({ message: '메뉴 정보를 입력해주세요' });
      } else {
        const shopUpdate = await Models.Shop.update(
          {
            shop_name: shop_name ? shop_name : shopInfo.dataValues.shop_name,
            business_hour: business_hour
              ? business_hour
              : userInfo.dataValues.business_hour,
            phone_number: phone_number
              ? phone_number
              : shopInfo.dataValues.phone_number,
            holiday: holiday ? holiday : shopInfo.dataValues.holiday,
            contents: contents ? contents : shopInfo.dataValues.contents,
          },
          { where: { user_id: user_id } },
        );
        res.status(200).send({
          data: { shopInfo: shopUpdate },
          message: '정보 입력 완료',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server Error' });
    }
  },
};
