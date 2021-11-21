const Router = require('koa-router');
const router = new Router

const { PrismaClient, Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

router.post("/signup", async (ctx) =>{
	
	let data = ctx.request.body
	let {username} = data

	const result = await prisma.user.create({
    data: {
      username
    },
  })
	ctx.body = result
})


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

