const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
        const codeSnippet = req.body.code;

        if (!codeSnippet) {
            return res.status(400).send({ error: "Code is required" }); // Send JSON error
        }

        // Consider adding a size limit to the code snippet
        if (codeSnippet.length > 10000) { // Example: Limit to 10000 characters
            return res.status(400).send({ error: "Code snippet is too large" });
        }

        const response = await aiService(codeSnippet);

        res.status(200).send(response); // Explicit 200 OK
    } catch (error) {
        console.error("Error in getReview:", error); // Log the error
        res.status(500).send({ error: "Failed to process code review" }); // Generic error to client
    }
};