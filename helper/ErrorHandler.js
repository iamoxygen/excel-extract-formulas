exports.logger = (...args) => {
    try {
        console.log(args)
    } catch (error) {
        console.log(error)
    }

}