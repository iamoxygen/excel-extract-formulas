const env = require("../config/env")

const environmentType = {
    development: {
        title: "Development",
        uri: env.DB_DEVELOPMENT,
        type: env.NODE_ENV,
    },
    production: {
        title: "Production",
        uri: env.DB_PRODUCTION,
        type: env.NODE_ENV,
    },
    local: {
        title: "Local",
        uri: env.DB_LOCAL,
        type: env.NODE_ENV,
    },
    test: {
        title: "Test",
        uri: env.DB_TEST,
        type: env.NODE_ENV,
    },
};


module.exports = environmentType[env.NODE_ENV];