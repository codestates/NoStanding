require('dotenv').config();
const { User } = require('../../models');
const { ejsCaller } = require('../../middlewares/ejs/ejsCaller');

module.exports = {
  post: async (req, res) => {
    try {
      const { user_name, confirm_body } = req.body;
      // 클라이언트로부터 전달받은 user_name이 DB에 존재하는지 확인한다
      const userInfo = await User.findOne({ where: { user_name: user_name } });
      if (!userInfo) return res.status(403).json({ message: 'Invalid Email!' });

      // 6자리 난수 설정
      const max = 999999;
      const min = 100000;
      const confirmNumber = Math.floor(Math.random() * (max - min)) + min;

      email = userInfo.dataValues.email;

      // User 이메일로 인증번호 발송
      await ejsCaller('passwordFind', email, {
        confirmNumber,
      });

      // 유저 테이블에 email_key 필드를 업데이트
      if (confirmNumber === confirm_body) {
        await User.update(
          { email_key: 'success' },
          { where: { email: email } },
        );
      }

      // 인증번호 입력 시간이 지나면, email_key가 다시 expired로 변경한다 (email_key !== 'success')
      setTimeout(async () => {
        const emailKeyChecker = await User.findOne({
          where: { email: email },
        });
        if (emailKeyChecker.email_key !== 'success') {
          await User.update(
            { email_key: 'expired' },
            { where: { email: email } },
          );
        }
      }, 60000);

      res.status(200).json({ message: 'Success Email Send!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
};
