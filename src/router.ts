import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	}),
});


const baseUrl = "/waiter/v1";

router.get(baseUrl + "/categories", listCategories);

router.get(baseUrl + "/categories/:categoryId/products", (req, res) => {
	res.send("OK");
});

router.post(baseUrl + "/categories", createCategory);



router.get(baseUrl + "/products", listProducts);

router.post(baseUrl + "/products", upload.single("image"), createProduct);



router.get(baseUrl + "/orders", (req, res) => {
	res.send("OK");
});

router.post(baseUrl + "/orders", (req, res) => {
	res.send("OK");
});

router.patch(baseUrl + "/orders/:orderId", (req, res) => {
	res.send("OK");
});

router.delete(baseUrl + "/orders/:orderId", (req, res) => {
	res.send("OK");
});
