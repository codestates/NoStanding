const router = require('express').Router();
const mypage = require('../controllers/mypage');

router.get('/reservation/:user_id', mypage.reservation.get);
router.post('/reservation/:user_id', mypage.reservation.post);
router.delete('/reservation/:user_id', mypage.reservation.delete);

router.get('/bookmark/:user_id', mypage.bookmark.get);

router.get('/img/:user_id', mypage.img.get);
router.post('/img/:user_id', mypage.img.post);

router.get('/menu/:user_id', mypage.menu.get);
router.patch('/menu/:user_id', mypage.menu.patch);

router.get('/notification/:user_id', mypage.notification.get);

router.get('/review/:user_id', mypage.review.get);
router.post('/review/:user_id', mypage.review.post);

router.get('/shopinfo/:user_id', mypage.shopinfo.get);
router.post('/shopinfo/:user_id', mypage.shopinfo.post);

router.get('/userinfo/:user_id', mypage.userinfo.get);
router.post('/userinfo/:user_id', mypage.userinfo.post);
router.delete('/userinfo/:user_id', mypage.userinfo.delete);

module.exports = router;
