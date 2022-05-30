const { QueryTypes } = require('sequelize');
const db = require('../../models');

module.exports = {
  get: async (req, res) => {
    let { text } = req.params;

    // req로 받는 문자 띄어쓰기 구별하기
    text = `%${text.replace(/ /gi, '%')}%`;

    // DB에 저장되있는 값의 띄어쓰기 찾기
    const query =
      'SELECT * FROM Nostanding.User where replace(shop_name," ","") like :text';
    try {
      const searchList = await db.sequelize.query(query, {
        replacements: { text: text },
        type: QueryTypes.SELECT,
        raw: true,
      });

      res.status(201).send({
        data: searchList,
        message: '검색결과입니다.',
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        data: null,
        message: '검색 실패',
      });
    }
  },
};
