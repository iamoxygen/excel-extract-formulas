const { logger } = require("../helper/ErrorHandler");
const extractFormulas = require("../utils/extractFormulas");


const fs = require('fs');


exports.extract = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const filePath = req?.file?.path;
        try {
            // Extract formulas from the uploaded file
            const formulas = extractFormulas(filePath);

            // Return formulas as JSON
            res.json(formulas);
        } catch (error) {
            res.status(500).json({ error: "Failed to extract formulas" });
        } finally {

            // Clean up: delete the uploaded file after processing
            fs.unlinkSync(filePath);
        }
    } catch (error) {
        logger(error)
    }
};
