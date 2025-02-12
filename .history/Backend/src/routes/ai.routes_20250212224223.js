// const express = require('express')
// const router = express.Router()
// const aiController = require('../controller/ai.controller')



// router.post("/get-review",  aiController.getReview)


// module.exports = router;


const express = require('express');
const router = express.Router();
const aiController = require('../controller/ai.controller');

router.post("/get-review", async (req, res) => {
    try {
        // Input Validation (example)
        if (!req.body || !req.body.code) {
            return res.status(400).json({ error: "Missing 'code' in request body." });
        }

        const review = await aiController.getReview(req, res); // Assuming aiController.getReview handles response
        //  If aiController.getReview doesn't handle the response:
        // res.status(200).json(review);

    } catch (error) {
        console.error("Error in /get-review:", error);
        res.status(500).json({ error: "Failed to get review", details: error.message });
    }
});

module.exports = router;