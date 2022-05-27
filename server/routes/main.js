const router = require('express').Router();
const main = require('../controllers/main');

/**
 * @swagger
 *  /:
 *    get:
 *      tags:
 *      - main
 */

// *      description: 모든 제품 조회
// *      produces:
// *      - application/json
// *      parameters:
// *        - in: query
// *          name: category
// *          required: false
// *          schema:
// *            type: integer
// *            description: 카테고리
// *      responses:
// *       200:
// *        description: 제품 조회 성공

router.get('/', main.main.get);

/**
 * @swagger
 *  /shop/:id:
 *    get:
 *      tags:
 *      - main
 */

router.get('/shop/:id', main.shop.get);

module.exports = router;
