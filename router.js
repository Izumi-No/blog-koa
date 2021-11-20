const Router = require('koa-router');
const router = new Router

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

module.exports = router

