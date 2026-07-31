const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const Expense_routes = require('./routes/expenseRoutes')

const app = express();

app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Smart Expense Tracker API is running."
    });
});

app.use('/api',Expense_routes);

module.exports = app;