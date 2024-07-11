import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDb from "./configs/mongoose.config.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`Connected to server on port ${PORT}`);
	connectToDb();
});
