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
      req.files.map(el => {
        imageArr.push(el.location);
      });
      console.log(req.files);
      await Shop.update(
        {
          image_src: `${imageArr}`,
        },
        { where: { user_id: userInfo.dataValues.id } },
      );
      res.send('good!');
    } catch (err) {
      console.log(err);
      res.send('서버 에러');
    }
  },
};
