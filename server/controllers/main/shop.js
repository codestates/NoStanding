const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);

module.exports = {
  get: async (req, res) => {
    const { id } = req.params;
    const shopInfo = await Models.Shop.findAll({
      // 리뷰리뷰수, 리뷰별점
      include: [
        {
          model: Models.User,
          as: 'user',
          attributes: [
            'shop_name',
            'address_line1',
            'address_line2',
            'user_name',
          ],
        },
        {
          model: Models.Bookmark,
          as: 'Bookmarks',
          attributes: ['is_marked'],
        },
        {
          model: Models.Review,
          as: 'Reviews',
          attributes: [
            'image_src',
            'score',
            'contents',
            'createdAt',
            'updatedAt',
          ],
        },
        {
          model: Models.Menu,
          as: 'Menus',
          attributes: ['image_src', 'menu_category', 'name', 'price'],
          include: [
            {
              model: Models.Reservation,
              as: 'Reservations',
            },
          ],
        },
      ],
      where: { id: id },
      attributes: [
        'business_hour',
        'phone_number',
        'holiday',
        'image_src',
        'contents',
        'id',
        'x',
        'y',
        'total_views',
        'score_average',
      ],
    });

    res.status(200).send({ data: shopInfo, message: '정보 전달 완료' });
  },
};
