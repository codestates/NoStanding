const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

//숫자 순서대로 발생하는 반복문 하나 만들고
// let number = ~~

const s3 = new aws.S3();
let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'semicolon-nostanding.com',
    acl: 'public-read-write',
    key: (req, file, callback) => {
      callback(null, `Shop/35/${number}${Date.now()}_${file.originalname}`);
    },
  }),
});

module.exports = upload;
