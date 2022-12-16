
const { Router } = require("express")
const router = Router()
const db = require('../db');
const os = require('os');
var fs = require('fs');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })


router.post('/create', async (req, res) => {

	const { name, lastname, age } = req.body
	console.log("NEW USER", name, lastname, age)
	const newUser = await db.query(`INSERT INTO users (name,lastname,age) VALUES ($1,$2,$3) RETURNING *`, [name, lastname, age])


	res.status(201).json({ message: newUser })
})

router.get('/', async (req, res) => {
	
	require('dns').reverse(req.socket.remoteAddress,function(err,domains){
		console.log('DOMAINS ______')
		console.log(domains)
	})
	const result = { headers: ["Имя", "Фамилия", "Возраст"], rows: [] }

	const users = await db.query(`select * from users`)
	users.rows.forEach(user => {
		const cell = [user.name, user.lastname, user.age]

		result.rows.push(cell)
	})


	res.status(201).json({ message: result })
})

module.exports = router
