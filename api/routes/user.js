const express = require('express')
const UserController = require('../controller/user.js')

const router = express.Router()
router.get('/', UserController.getUserCont)

router.post('/', UserController.postUserCont)
router.get('/mount/:dayNumber', UserController.findDayById)
router.delete('/:userId', UserController.deleteUserCont)

module.exports = router
