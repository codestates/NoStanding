const axios = require('axios');
module.exports = {
  post: async (req, res) => {
    try {
      // 요청이 잘못된 경우, 다음 에러메시지를 반환한다.
      const { authorizationCode } = req.body;
      if (!authorizationCode)
        return res.status(400).json({ message: 'Bad Request!' });
      /* OAuth 2.0 */
      const redirectUri = `${process.env.CLIENT_ORIGIN}/callbackKakao`;
      const url = `https://kauth.kakao.com/oauth/token?code=${authorizationCode}&client_id=${process.env.KAKAO_CLIENT_ID}&client_secret=${process.env.KAKAO_CLIENT_SECRET}&redirect_uri=${redirectUri}&grant_type=authorization_code`;
      // authorizationCode로 kakao_token 을 받아온다.
      const response = await axios.post(url);
      const { access_token } = response.data;
    } catch (err) {}
  },
};
