const router = require('express').Router();
const oauth = require('../controllers/oauth');

router.post('/kakao', oauth.kakao.post);
router.post('/google', oauth.google.post);

module.exports = router;
