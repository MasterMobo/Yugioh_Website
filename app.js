require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connect");
const app = express();

// Middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

// Routers
const authRouter = require("./routes/auth");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const start = async () => {
    await connectDB(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
};

start();
