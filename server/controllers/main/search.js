const { QueryTypes } = require('sequelize');
const db = require('../../models');

module.exports = {
  get: async (req, res) => {
    let { text } = req.params;

    // req로 받는 문자 띄어쓰기 구별하기
    text = `%${text.replace(/ /gi, '%')}%`;

    // DB에 저장되있는 값의 띄어쓰기 찾기

    const query = `SELECT U.shop_name, U.shop_category, U.shop_category_city, U.master_address
    FROM User U
    Join Shop S ON S.user_id = U.id
    where replace(shop_name," ","") like :text`;
    try {
      const searchList = await db.sequelize.query(query, {
        replacements: { text: text },
        type: QueryTypes.SELECT,
      });

      res.status(201).send({
        data: { searchList },
        message: '검색결과입니다.',
      });
    } catch (err) {
      res.status(404).send({
        data: null,
        message: '검색 실패',
      });
    }
  },
};
