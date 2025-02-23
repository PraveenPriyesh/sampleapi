const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Allow all origins and headers
app.use(cors({
    origin: "*",  // Allow requests from anywhere
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

const information = require('./data.json');

app.get("/api/information", (req, res) => {
    res.json(information);
});

app.get('/api/information/2', (req, res) => {
    res.json(information[1]);
});

module.exports = app;
