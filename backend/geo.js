const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/geo", async (req, res) => {
    let ip = req.query.ip;
    try {
        let response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error: ", error);
        res.status(400).json({ error: true, message:"Failed to fetch country information. Please check your request and try again." });
    }
});

app.listen(PORT, () => console.log("Server listening on port:", PORT));