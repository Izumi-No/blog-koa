const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views');
const router = require("./router")
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const PORT = 3000 || process.env.PORT

const app = new Koa

const render = views(__dirname + '/views', { map: { html: "ejs" } })

app.use(serve('./public'));
app.use(render)
app.use(json())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => { console.log(`server abriu em ${PORT}`) })