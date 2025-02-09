import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {dataAffiliateStat ,dataUser,dataProduct,dataProductStat , dataTransaction, dataOverallStat } from "./data/index.js";

//configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

//routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
			console.log(`Database connected successfully`);
			
		});
        //only add data once
		// User.insertMany(dataUser);
		// Product.insertMany(dataProduct);
		// ProductStat.insertMany(dataProductStat);
		// Transaction.insertMany(dataTransaction);
		// OverallStat.insertMany(dataOverallStat);
		// AffiliateStat.insertMany(dataAffiliateStat);

	})
	.catch((err) => {
		console.log(`${err} did not connect`);
	});
