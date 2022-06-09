require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = process.env.HTTP_PORT || 4000;
const { swaggerUi, specs } = require('./swagger');

const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const webSocket = require('./socket');
// const indexRouter = require('./routes')

// //* view engine(어떤 종류의 템플릿 엔진을 사용할 거냐?)을 html로 지정
// app.set('view engine', 'html');
// nunjucks.configure('../client/public', {
//   autoescape: true, //* false일 경우 html태그가 인식되어 버린다.
//   express: app, //* express 실행함수를 app 변수에 넣어주었다
//   watch: true, //* html이 변경될때마다 template엔진을 다시 렌더링
// });
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  }),
);

const mainRouter = require('./routes/main');
const mypageRouter = require('./routes/mypage');
const userRouter = require('./routes/user');
const oauthRouter = require('./routes/oauth');
const apiRouter = require('./routes/api');

app.use(cookieParser(123123));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: '123123',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use('/', mainRouter);
app.use('/', userRouter);
// app.use('/', apiRouter);
app.use('/mypage', mypageRouter);
app.use('/oauth', oauthRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const server = app.listen(PORT, () => console.log('서버 정상 작동'));

// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//   error.status = 404;
//   next(error);
// });

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/', (req, res, next) => {
//   res.render('index.html', { name: 'HI' });
// });

webSocket(server);
