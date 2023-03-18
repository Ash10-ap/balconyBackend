import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url'

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1);
});
//configure env
dotenv.config();

//databse config
connectDB();

// es module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//rest object
const app = express();

//middelwares
app.use(cors({ credentials: true, origin: 'https://balcony-backend.vercel.app/' }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")))
    //routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use('*', function(req, res) {
        res.sendFile(path.join(__dirname, './client/build/index.html'))
            // res.sendFile(path.join(__dirname,'./client/built/'))
    })
    //PORT
const PORT = process.env.PORT || 5500;

//run listen
const server = app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
    );
});

process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    })
});
