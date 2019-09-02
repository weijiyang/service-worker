const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const static = require('koa-static');

app.use(views(__dirname))
app.use(static(__dirname, { maxage: 30*24*60*60*1000 } ))
app.use(ctx => {
    return ctx.render('./index.html')
})

app.listen(3000)
console.log('服务启动: http://localhost:3000')