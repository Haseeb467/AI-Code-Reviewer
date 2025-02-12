const aiService = require('../services/ai.service')

module.exports.getReview = async (req, res) => {
    const code = req.body.prompt;

    if (!code) {
        return res.status(400).send("Prompt is require")
    }

    const response = await aiService(code)

    res.send(response)
}