const myObject = {};
require('dotenv').config({ processEnv: myObject });

// Function to remove keys from process.env based on myObject
function removeFromProcessEnv() {
    for (const key in myObject) {
        if (key in process.env) {
            delete process.env[key];
        }
    }
}



// Call the function to remove variables
removeFromProcessEnv();

module.exports = myObject
