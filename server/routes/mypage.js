const router = require('express').Router();
const mypage = require('../controllers/mypage');

/**
 * @swagger
 * tags:
 *   name: mypage_reservation
 *   description: 예약 정보 조회 수정 삭제
 */

/**
 * @swagger
 * tags:
 *   name: mypage_bookmark
 *   description: 즐겨찾기 조회
 */

/**
 * @swagger
 * tags:
 *   name: mypage_img
 *   description: 가게 사진정보 조회 추가
 */

/**
 * @swagger
 * tags:
 *   name: mypage_menu
 *   description: 가게 메뉴 조회 수정
 */

/**
 * @swagger
 * tags:
 *   name: mypage_notification
 *   description: 알람 조회
 */

/**
 * @swagger
 * tags:
 *   name: mypage_review
 *   description: 리뷰 조회 추가
 */

/**
 * @swagger
 * tags:
 *   name: mypage_shopinfo
 *   description: 가게 정보 조회 수정
 */

/**
 * @swagger
 * tags:
 *   name: mypage_userinfo
 *   description: 유저 정보 조회 수정
 */

router.get('/reservation/:user_name', mypage.reservation.get);
router.post('/reservation/:user_name', mypage.reservation.post);
router.delete('/reservation/:user_name', mypage.reservation.delete);

router.get('/bookmark/:user_name', mypage.bookmark.get);

router.get('/img/:user_name', mypage.img.get);
router.post('/img/:user_name', mypage.img.post);
router.patch('/img/:user_name', mypage.img.patch);

router.get('/menu/:user_name', mypage.menu.get);
router.post('/menu/:user_name', mypage.menu.post);
router.patch('/menu/:user_name', mypage.menu.patch);

router.get('/notification/:user_name', mypage.notification.get);

router.get('/re_review/:user_name', mypage.re_review.get);
router.post('/re_review/:review_id/:user_name', mypage.re_review.post);

router.get('/shopinfo/:user_name', mypage.shopinfo.get);
router.post('/shopinfo/:user_name', mypage.shopinfo.post);

router.get('/userinfo/:user_name', mypage.userinfo.get);
router.patch('/userinfo/:user_name', mypage.userinfo.patch);
router.delete('/userinfo/:user_name', mypage.userinfo.delete);

/**
 * @swagger
 * paths:
 *  mypage/reservation/:user_id:
 *    get:
 *      summary: "예약 정보 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_reservation]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/reservation/:user_id:
 *    post:
 *      summary: "예약 추가"
 *      description: ""
 *      tags: [mypage_reservation]
 *      responses:
 *        "200":
 *          description: 예약 완료
 *        "400":
 *          description: 예약 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/reservation/:user_id:
 *    delete:
 *      summary: "예약 취소"
 *      description: ""
 *      tags: [mypage_reservation]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/bookmark/:user_id:
 *    get:
 *      summary: "즐겨찾기 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_bookmark]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/img/:user_id:
 *    get:
 *      summary: "가게 사진 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_img]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/img/:user_id:
 *    post:
 *      summary: "가게 사진 추가"
 *      description: ""
 *      tags: [mypage_img]
 *      responses:
 *        "200":
 *          description: 사진 추가 성공
 *        "400":
 *          description: 사진 추가 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/img/:user_id:
 *    patch:
 *      summary: "가게 사진 수정"
 *      description: ""
 *      tags: [mypage_img]
 *      responses:
 *        "200":
 *          description: 사진 추가 성공
 *        "400":
 *          description: 사진 추가 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/menu/:user_id:
 *    get:
 *      summary: "가게 메뉴 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_menu]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/menu/:user_id:
 *    post:
 *      summary: "가게 메뉴 추가"
 *      description: ""
 *      tags: [mypage_menu]
 *      responses:
 *        "200":
 *          description: 메뉴 추가 성공
 *        "400":
 *          description: 메뉴 추가 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/menu/:user_id:
 *    patch:
 *      summary: "가게 메뉴 수정"
 *      description: ""
 *      tags: [mypage_menu]
 *      responses:
 *        "200":
 *          description: 메뉴 추가 성공
 *        "400":
 *          description: 메뉴 추가 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/notification/:user_id:
 *    get:
 *      summary: "알림 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_notification]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/re_review/:user_id:
 *    get:
 *      summary: "리뷰 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_re_review]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/re_review/:user_id:
 *    post:
 *      summary: "리뷰 추가"
 *      description: "점주가 답글달 때, Post방식으로 요청"
 *      tags: [mypage_re_review]
 *      responses:
 *        "200":
 *          description: 리뷰 추가 성공
 *        "400":
 *          description: 리뷰 추가 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/shopinfo/:user_id:
 *    get:
 *      summary: "가게 정보 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_shopinfo]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/shopinfo/:user_id:
 *    patct:
 *      summary: "가게 정보 수정"
 *      description: ""
 *      tags: [mypage_shopinfo]
 *      responses:
 *        "200":
 *          description: 정보 수정 완료
 *        "400":
 *          description: 정보 수정 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/userinfo/:user_id:
 *    get:
 *      summary: "유저 정보 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [mypage_userinfo]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/userinfo/:user_id:
 *    patch:
 *      summary: "유저 정보 수정"
 *      description: ""
 *      tags: [mypage_userinfo]
 *      responses:
 *        "200":
 *          description: 정보 수정 완료
 *        "400":
 *          description: 정보 수정 실패
 */

/**
 * @swagger
 * paths:
 *  mypage/userinfo/:user_id:
 *    delete:
 *      summary: "회원 탈퇴"
 *      description: ""
 *      tags: [mypage_userinfo]
 *      responses:
 *        "200":
 *          description: 회원 탈퇴 성공
 *        "400":
 *          description: 회원 탈퇴 실패
 */

module.exports = router;
