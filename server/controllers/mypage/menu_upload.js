const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const { User, Shop } = require('../../models');

module.exports = {
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

      console.log(req.files);
      await Shop.update(
        {
          image_src: JSON.stringify(imageArr),
        },
        { where: { user_id: userInfo.dataValues.id } },
      );
      res.status(200).send({ message: '이미지 업로드 완료' });
    } catch (err) {
      console.log(err);
      res.send('서버 에러');
    }
  },
};
