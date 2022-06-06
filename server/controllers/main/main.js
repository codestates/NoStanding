const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const axios = require('axios');
const request = require('request');

require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    //   const mainInfo = await Models.Shop.findAll({
    //     // 샵사진, 리뷰별점, 리뷰리뷰
    //     include: [
    //       {
    //         model: Models.User,
    //         as: 'user',
    //         attributes: [
    //           'shop_category',
    //           'shop_name',
    //           'shop_category_city',
    //           'master_address',
    //         ],
    //       },
    //       {
    //         model: Models.Bookmark,
    //         as: 'Bookmarks',
    //         attributes: ['is_marked'],
    //       },
    //       {
    //         model: Models.Review,
    //         as: 'Reviews',
    //         attributes: [],
    //       },
    //     ],
    //     attributes: ['image_src', 'id'],
    //   });
    //  return res.status(200).send({ data: mainInfo, message: '정보 전달 완료' });
    // },
    let keyword = '스타벅스';
    axios
      .get(
        `https://dapi.kakao.com//v2/local/search/keyword.json?query=star&category_group_code=CE7`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_CLIENT_ID}`,
          },
        },
      )
      .then(res => console.log(res.data.documents))
      //   .then(res=>console.log(meetingPlace))
      .catch(err => console.log(err)); //237줄에 console.log(meetingPlace)있음.
  },
};
