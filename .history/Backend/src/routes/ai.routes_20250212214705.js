const express = require('express')
const router = express.Router()
const aiControler = require('../controller/ai.controller')



router.get('/get-response',  aiControler)


module.exports = router;