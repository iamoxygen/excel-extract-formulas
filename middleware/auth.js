exports.requireSignIn = async (req, res, next) => {
    try {
       return next();
    } catch (err) {
        res.status(500).send({ message: "internal server error" });
    }
};


