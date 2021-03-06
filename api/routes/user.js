const express = require('express')
const UserController = require('../controller/user.js')

const router = express.Router()
router.get('/', UserController.getUserCont)

router.post('/', UserController.postUserCont)
router.delete('/:userId', UserController.deleteUserCont)

module.exports = router
