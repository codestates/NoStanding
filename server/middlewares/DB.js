const { sequelize } = require('../models');
const initModels = require('../models/init-models');
const Models = initModels(sequelize);
const axios = require('axios');
require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    searching = '합정 스타벅스';
    url =
      'https://dapi.kakao.com/v2/local/search/keyword.json?query=' + searching;

    const headers = {
      headers: { Authorization: `KakaoAK ${process.env.KAKAO_CLIENT_ID}` },
    };

    const places = axios.get(url, headers).then(res => console.log(res));

    res.send({ data: places });
  },
};
