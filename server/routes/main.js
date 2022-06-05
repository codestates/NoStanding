const router = require('express').Router();
const main = require('../controllers/main');

/**
 * @swagger
 * tags:
 *   name: main
 *   description: 메인 페이지 조회
 */

router.get('/', main.main.get);
router.get('/shop/:id', main.shop.get);
router.get('/category', main.category.get);
router.get('/search/:text', main.search.get);
router.post('/review/:shop_id/:user_name', main.review.post);

/**
 * @swagger
 * paths:
 *  /:
 *    get:
 *      summary: "메인 페이지 데이터 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [main]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  /shop/:id:
 *    get:
 *      summary: "가게 상세 정보 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [main]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  /category:
 *    get:
 *      summary: "메인 페이지 카테고리 별 데이터 조회"
 *      description: ""
 *      tags: [main]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  /search/:text :
 *    get:
 *      summary: "메인 페이지 검색 데이터 조회"
 *      description: ""
 *      tags: [main]
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  /review/:shop_id/:user_name :
 *    post:
 *      summary: "리뷰 작성 양식"
 *      description: ""
 *      tags: [main]
 *      parameters:
 *        - in: path
 *          name: shop_id
 *          required: true
 *          description: 샵 ID
 *          schema:
 *            type: number
 *        - in: path
 *          name: user_name
 *          description: 유저 아이디
 *          schema:
 *            type: string
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

module.exports = router;
