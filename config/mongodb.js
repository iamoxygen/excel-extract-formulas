const mongoose = require("mongoose");
const environment = require("../helper/environment");
const { logger } = require("../helper/ErrorHandler");

(function () {
    try {
        mongoose
            .connect(environment?.uri ?? "")
            .then((value) =>
                console.log(`${environment?.title ?? "unknown"} db is connected successfully`)
            )
            .catch((value) => console.log(`Db connection error`, value));
    } catch (error) {
        logger(error)
    }
})()