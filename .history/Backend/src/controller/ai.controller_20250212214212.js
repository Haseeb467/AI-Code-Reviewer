const aiservice

module.exports = (req, res) => {
    const prompt = req.query.prompt

    if (!prompt) {
        return res.status(400).send("Promt is require")
    }
}