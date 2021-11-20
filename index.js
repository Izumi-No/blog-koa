const Koa = require('koa')
const serve = require('koa-static')
var Router = require('koa-router');
const views = require('koa-views');
const PORT = 3000 || process.env.PORT


const app = new Koa
var router = new Router();


const render = views(__dirname + '/views', {map:{html: "ejs"}})

app.use(serve('./public'));
app.use(render)

router.get("/", async (ctx) => {
	ctx.state = {
		users: [{name: "jão"}, {name: "cu"}]
	}
	await ctx.render("index")
})
router.get("/login", async (ctx) => {
	ctx.state = {
		users: [{name: "jão"}, {name: "cu"}]
	}
	await ctx.render("login")
})
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(PORT, ()=>{console.log(`abriu em ${PORT}`)})