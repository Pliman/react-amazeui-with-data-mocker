var koa = require('koa'),
	route = require('koa-route'),
	static = require('koa-static'),
	gzip = require('koa-gzip'),
	bodyParser = require('koa-bodyparser');

var app = koa();

app.use(gzip());
// mock服务器可能在应用服务器没有启动的情况下启动，所以需要支持应用的静态文件
app.use(static('../../dist'));
app.use(static('mocks'));
app.use(bodyParser());

app.use(route.get('/hello', function* () {
	this.body = 'hello';
}));

var port = 3100;
app.listen(port, function (err) {
	console.log('listening on port %s', port);
});
