const { Reservation, Shop, Menu, User } = require('../../models');
const { QueryTypes } = require('sequelize');
const db = require('../../models');
const user = require('../user');

module.exports = {
  get: async (req, res) => {
    const userId = req.params.user_id;

    const userInfo = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (userInfo.ismaster === 0) {
      const query = `SELECT R.user_id, U.shop_name, U.master_address, M.name, R.date from Reservation R
      Join Menu M ON M.id = R.menu_id
      Join Shop S ON S.id = M.shop_id
      Join User U ON S.user_id = U.id
      where R.user_id = ${userId}`;

      const reservationlist = await db.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (!reservationlist) {
        res.status(400).send({ message: '자료 조회 실패' });
      } else {
        res
          .status(200)
          .send({ data: reservationlist, message: '정보 전달 완료' });
      }
    } else {
      const query2 = `SELECT U.id, M.name, R.date from User U
      Join Reservation R On U.id = R.user_id
      Join Menu M On R.menu_id = M.id
      where U.id = ${userId}`;

      const reservationlist2 = await db.sequelize.query(query2, {
        type: QueryTypes.SELECT,
      });

      if (!reservationlist2) {
        res.status(400).send({ message: '자료 조회 실패' });
      } else {
        res
          .status(200)
          .send({ data: reservationlist2, message: '정보 전달 완료' });
      }
    }
  },

  post: async (req, res) => {
    const { user_id, menu_id, date } = req.body;

    const reservationListPrev = await Reservation.findAll({
      where: {
        user_id: user_id,
      },
    });
    console.log('이전:' + reservationListPrev);
    await Reservation.create({
      user_id: user_id,
      menu_id: menu_id,
      date: date,
    });

    const reservationListCur = await Reservation.findAll({
      where: {
        user_id: user_id,
      },
    });

    console.log('현재:' + reservationListCur);

    const query = `SELECT * FROM Menu M Join Shop S On M.shop_id = S.id
    Join User U On S.user_id = U.id where M.id = ${menu_id}`;

    const masterInfo = db.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    Reservation.create({
      user_id: masterInfo.id,
      menu_id: menu_id,
      date: date,
    });

    const reservationMaster = await Reservation.findOne({
      where: {
        user_id: masterInfo.id,
      },
      order: 'id DESC',
    });

    if (
      reservationListPrev.length === reservationListCur.length ||
      !reservationMaster
    ) {
      res.status(400).send({ message: '예약 추가 실패' });
    } else {
      res.status(200).send({
        data: [reservationListCur, reservationMaster],
        message: '예약 추가 완료',
      });
    }
  },

  delete: async (req, res) => {},
};

// user
// 예약 조회 , 추가  , 삭제
// 조회 시 넘겨줘야 할 정보
// 사진 , 가게 이름 , 주소 , 메뉴 , 예약 시간
// req.query에 담긴 user의 id로 reservation 테이블 접근 => Menu , Shop 테이블 join하여 정보 획득 후 전달

// master
// 조회 시 넘겨줘야 할 정보
// date , menu 정보

// 추가
// 추가 시 DB에 넣어야 하는 정보
// -> user_id , menu_id , date(시간 정보) 받아서 입력

// 삭제
// 삭제 시 user_id

// master
// 예약 조회 , 삭제
