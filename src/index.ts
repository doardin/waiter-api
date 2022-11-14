import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();
		app.listen(9000, () => {
			console.log("🚀 Server is running on http://localhost:9000");
		});
	})
	.catch(() => console.log("Error when connect to database ❌"));
