const express = require('express')
const UserController = require('../controller/user.js')

const router = express.Router()
router.get('/', UserController.getUserCont)
router.get('/total', UserController.totalUserCont)
router.post('/', UserController.postUserCont)
router.patch('/:userId', UserController.updateUserCont) // patch güncelleme işlemi yapar.
router.delete('/:userId', UserController.deleteUserCont)

module.exports = router
