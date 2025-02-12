const aiService = require('../services/ai.service')

module.exports = (req, res) => {
    const prompt = req.query.prompt

    if (!prompt) {
        return res.status(400).send("Promt is require")
    }

    const response = await aiServi
}