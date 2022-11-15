import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();
		const port = 9000;

		app.use(router);
		app.listen(port, () => {
			console.log("🚀 Server is running on http://localhost:9000");
		});
	})
	.catch(() => console.log("Error when connect to database ❌"));
