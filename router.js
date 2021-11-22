const Router = require('koa-router');
const router = new Router

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const bcrypt = require('bcrypt')

router.post("/signup", async (ctx) => {
	let { username, password } = ctx.request.body

	const salt = await bcrypt.genSalt(10)
	const passHash = await bcrypt.hash(password.toString(), salt)

	const result = await prisma.user.create({
		data: {
			username,
			passHash
		},
	})
	ctx.body = result
})
router.post("/signin", async (ctx) => {
	let { username } = ctx.request.body

	const user = await prisma.user.findUnique({
		where: {
			username
		}
	})

	ctx.body = user
})


router.get("/", async (ctx) => {
	ctx.state = {
		users: [{ name: "jão" }, { name: "cu" }]
	}
	await ctx.render("index")
})

router.get("/login", async (ctx) => {
	ctx.state = {
		users: [{ name: "jão" }, { name: "cu" }]
	}
	await ctx.render("login")
})

module.exports = router

