const router = require('express').Router();
const user = require('../controllers/user');

/**
 * @swagger
 * tags:
 *   name: user
 *   description: 유저 추가 조회
 */

router.post('/login', user.login.post);
router.post('/logout', user.logout.post);
router.post('/signup', user.signup.post);
router.post('/emailcheck', user.emailcheck.post);
<<<<<<< HEAD
router.post('/emailsend', user.passwordfind.emailsend);
router.post('/confirm', user.passwordfind.confirm);
router.post('/passwordchange', user.passwordfind.passwordchange);
=======

router.post('/emailsend', user.passwordfind.emailsend);
router.post('/confirm', user.passwordfind.confirm);
router.post('/passwordchange', user.passwordfind.passwordchange);

>>>>>>> 7319f1c01fc4dc7422f24453fd29d676799ffa68

/**
 * @swagger
 * paths:
 *  /login:
 *    post:
 *      summary: "로그인 요청"
 *      description: ""
 *      tags: [user]
 *      responses:
 *        "200":
 *          description: 로그인 성공
 *        "400":
 *          description: 로그인 실패
 */

/**
 * @swagger
 * paths:
 *  /logout:
 *    post:
 *      summary: "로그아웃 요청"
 *      description: ""
 *      tags: [user]
 *      responses:
 *        "200":
 *          description: 로그아웃 성공
 *        "400":
 *          description: 로그아웃 실패
 */

/**
 * @swagger
 * paths:
 *  /signup:
 *    post:
 *      summary: "회원가입 요청"
 *      description: ""
 *      tags: [user]
 *      responses:
 *        "200":
 *          description: 회원가입 성공
 *        "400":
 *          description: 회원가입 실패
 */

module.exports = router;
