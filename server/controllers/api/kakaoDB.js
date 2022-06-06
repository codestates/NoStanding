const { sequelize } = require('../../models');
const initModels = require('../../models/init-models');
const Models = initModels(sequelize);
const axios = require('axios');

module.exports = {
  get: async (req, res) => {
    //FD6 음식점 , //CE7 카페
    url = `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&y=33.4&x=126.4&radius=20000`;
    headers = {
      Authorization: `KakaoAK ${process.env.KAKAO_CLIENT_ID}`,
    };

    const info = await axios
      .get(url, { headers: headers })
      .catch(err => res.send(err));
    console.log(info.data.documents[0]);

    // {
    //   [User]shop_category: '음식점',        category_group_name
    //   [Shop]image_src:
    //   [Shop]phone_number: '010-8885-7876',    phone
    //   [User]shop_name: '동백별장',     place_name
    //   [SHOP]place_url: 'http://place.map.kakao.com/203710945',      place_url
    //   [User]address_line1: '제주특별자치도 제주시 원노형3길 44',     road_address_name
    //   [User]shop_category_city:
    //   [Shop]x: '126.481435627565',    x
    //   [Shop]y: '33.4866056081701'     y
    // }

    for (let n = 0; n < info.data.documents.length; n++) {
      await Models.User.create({
        user_salt: `x1nP0muYg7pRqtqPyvZsF48f34xpXsunhn42sqMFK8qLItl+lIiIB0VZAUic2/Y5HuQeYLlVbd6oSZnM3irYAA==`,
        user_name: 'jejudo',
        password: `OE2Zru69TOuSTSNimkps6fQNkt4R5VSDIO+3Z2dq51jTHiQrDq9XcrI9dDWs/UynhvrFmMz7Ybcobvq3HCwh8A==`,
        shop_category: info.data.documents[n].category_group_name,
        shop_name: info.data.documents[n].place_name,
        address_line1: info.data.documents[n].road_address_name,
        nickname: '제주도',
        shop_category_city: '제주',
        is_master: 1,
      });
      await Models.Shop.create({
        user_id: 89 + n,
        business_hour: `0900~2200`,
        holiday: 'Mon',
        contents: 'jejudo가게에 오신 것을 환영합니다',
        phone_number: info.data.documents[n].phone,
        place_url: info.data.documents[n].place_url,
        x: info.data.documents[n].x,
        y: info.data.documents[n].y,
      });
    }
    res.status(200).send({ message: '정보 전달 완료' });
  },
};
