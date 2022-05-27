const router = require('express').Router();
const user = require('../controllers/user');

router.post('/login', user.login.post);
router.post('/logout', user.logout.post);
router.post('/signup', user.signup.post);

module.exports = router;
