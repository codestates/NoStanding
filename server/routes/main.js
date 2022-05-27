const router = require('express').Router();
const main = require('../controllers/main')

router.get('/', main.main.get)
router.get('/shop/:id', main.shop.get)



module.exports = router;