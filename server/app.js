require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

const mainRouter = require('./routes/main')
const mypageRouter = require('./routes/mypage')
const userRouter = require('./routes/user')

app.use(cookieParser());

app.use('/', mainRouter)
app.use('/', userRouter)
app.use('/mypage' , mypageRouter)










const PORT = process.env.HTTP_PORT || 4000;


app.listen(PORT, () => console.log("서버 정상 작동"));