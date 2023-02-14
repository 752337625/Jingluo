let express = require('express'); //加载express模块
let path = require('path'); //路径模块
let cookieParser = require('cookie-parser'); //这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
let cookieSession = require('cookie-session');
let lessMiddleware = require('less-middleware');
let logger = require('morgan'); //在控制台中，显示req请求的信息
const cors = require('cors');
let app = express();
// 载入中间件
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	cookieSession({
		name: 'session',
		keys: ['abcdefg'],
		maxAge: 24 * 60 * 60 * 1000,
	}),
);
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
	next();
});
app.get('/hello', (req, res) => {
	res.send('Hello World!');
});
//这个路由必须放到express.urlencoded 和express.json后面否则获取不到req.body
require('./routes/routerHandler')(app);

module.exports = app;
