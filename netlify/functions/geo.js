const axios = require("axios");
const dotenv = require("dotenv").config();

exports.handler = async function (event, context) {
    const { ip } = event.queryStringParameters;

    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ip}`);
        console.log(response.data);
        
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error("Error: ", error);

        return {
            statusCode: 400,
            body: JSON.stringify({ error: true, message: "Failed to fetch country information. Please check your request and try again." }),
        };
    }
};