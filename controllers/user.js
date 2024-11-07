const { logger } = require("../helper/ErrorHandler")

exports.userInfo = async (req, res) => {
    try {

        res.send({ message: "Successfully created accounts", });
    } catch (error) {
        logger(error)
    }
};
