const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()
const {createTodo,readTodo,updateTodo,deleteTodo} = require('../controller/todoController')

router.post('/create',authMiddleware,createTodo)
router.get('/read',authMiddleware,readTodo)
router.put('/update/:id',authMiddleware,updateTodo)
router.delete('/delete/:id',authMiddleware,deleteTodo)

module.exports = router
