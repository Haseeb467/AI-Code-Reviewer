const express = require('express')
const router = express.Router()

router.get('/get-response', (req, res) => {
    const prompt = req.query.prompt

    if (!prompt) {
        return res.status(400).send("Promt is require")
    }
} )


module.exports = router;