require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

// Path imports 👇
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const hotelRoutes = require("./routes/hotel")

// Middleware 👇
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// DB Connection 👇
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED")
    })
    .catch(() => {
        console.log("😟 COULDN'T CONNECT TO THE DATABASE")
    })

// My Routes 👇
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", hotelRoutes)

app.listen(PORT, () => {
    console.log(`Port listening on http://localhost:${PORT}`)
})
