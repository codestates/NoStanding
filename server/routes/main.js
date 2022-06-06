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
router.get('/search', main.search.get);
router.post('/review/:shop_id/:user_name', main.review.post);
router.post('/bookmark/:shop_id/:user_name', main.bookmark.post);

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
 *      parameters:
 *      - in : path
 *        name : id
 *        required : true
 *        description : shop의 id
 *        schema:
 *          type: Number
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
 *      description: "선택한 카테고리에 맞는 데이터를 뽑아 보낸다"
 *      tags: [main]
 *      parameters:
 *      - in: query
 *        name: shop_category
 *        required: false
 *        description: 가게 카테고리
 *        schema:
 *          type: string
 *      - in: query
 *        name:  shop_category_city
 *        required: false
 *        description: 지역 카테고리
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 정보 전달 완료
 *        "400":
 *          description: 자료 조회 실패
 */

/**
 * @swagger
 * paths:
 *  /search:
 *    get:
 *      summary: "메인 페이지 검색 데이터 조회"
 *      description: ""
 *      tags: [main]
 *      parameters:
 *      - in: query
 *        name: text
 *        required: false
 *        description: 검색명
 *        schema:
 *          type: string
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
