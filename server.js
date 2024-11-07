require("./config/env")
const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
const fs = require("fs");
const morgon = require("morgan");


// calling database
require("./config/mongodb");

// middleware

app.use(express.json());
app.use(morgon("dev"));

fs.readdirSync("./routes").map((route) =>
    app.use("/api/", require(`./routes/${route}`))
);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});