const Koa = require('koa');
const path = require('path')
const Router = require('koa-router'); // 引入koa-router
const static = require('koa-static')
const app = new Koa();
/* 创建路由实例 */
const router = new Router();

/* 制定路由规则 */
router
    .get('/', ctx => {
    	/* ctx.body用来返回响应信息 */
        ctx.body = "Welcome to here!";
    })
    /* 可链式调用 */
    .get('/api', ctx => {
    	/* ctx.type用来指定返回的数据格式，默认为 text/plain */
        ctx.type = 'json';
        ctx.body = {
            msg: "hello"
        }
    });

app
	/* 在Koa应用实例上应用制定好的路由规则 */
    .use(router.routes())
    .use(router.allowedMethods())
    .use(static(path.join(__dirname,'./public')))

/* 开始监听/8091 */
app.listen(8091, () => {
    console.log('listening on port 8091 ...');
});