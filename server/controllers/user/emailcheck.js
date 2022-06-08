require('dotenv').config();
const { User } = require('../../models');
const { ejsCaller } = require('../../middlewares/ejs/ejsCaller');

module.exports = {
  post: async (req, res) => {
    try {
      const { email } = req.body;
      // 6자리 난수 설정
      const max = 999999;
      const min = 100000;
      const confirmNumber = Math.floor(Math.random() * (max - min)) + min;

      await ejsCaller('emailcheck', email, {
        confirmNumber,
      });
      
      // if (confirmNumber === confirm_body) {
      //   //이메일 인증번화와 body값이 동일하다면 'success' 값을 준다.
      // }
      // email_key = 'success';

      // 인증번호 입력 시간이 지나면, email_key가 다시 expired로 변경한다 (email_key !== 'success')
      // setTimeout(async () => {
      //   if (email_key !== 'success') {
      //     email_key = 'expired';
      //   }
      // }, 180000);

      // if (email_key === 'expired' || email_key === null) {
      //   return res.status(400).send({ message: '이메일 인증은 필수 입니다.' });
      // }

      await User.create({
        email: email,
        email_key: 'success',
      });

      res.status(200).json({data:confirmNumber, message: 'Success Email Send!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
};
