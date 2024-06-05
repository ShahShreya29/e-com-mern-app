const express = require("express");
const cors = require("cors");
const connect = require("./Connection/db");
const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5051;

app.get("/", (req, res) => {
    return res.status(200).send({ message: "hellooooooooo" });
});

app.listen(PORT, async () => {
    try {
        console.log(`Server is running on PORT ${PORT}, database connected successfully`);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
});

module.exports = app;
