const aiService = require('../services/ai.service')

module.exports.get = async (req, res) => {
    const prompt = req.query.prompt

    if (!prompt) {
        return res.status(400).send("Prompt is require")
    }

    const response = await aiService(prompt)

    res.send(response)
}