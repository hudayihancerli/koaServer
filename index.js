const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();



router.get('/', (ctx) => {
    ctx.body = '<h1>Index</h1>'
})
router.get('/hakkimda', (ctx) => {
    ctx.body = '<h1>Hakkimda</h1>'
})
router.get('/iletisim', (ctx) => {
    ctx.body = '<h1>Iletisim</h1>'
})
router.get('*', (ctx) => {
    ctx.body = '<h1>404</h1>'
})

app.use(router.routes());

app.listen(3000)

//index, hakkimda ve iletisim
//xxx h1 
//port 3000
