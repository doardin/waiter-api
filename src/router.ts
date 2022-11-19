import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { listOrders } from "./app/useCases/orders/listOrders";
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

router.get(baseUrl + "/categories/:categoryId/products", listProductsByCategory);

router.post(baseUrl + "/categories", createCategory);



router.get(baseUrl + "/products", listProducts);

router.post(baseUrl + "/products", upload.single("image"), createProduct);



router.get(baseUrl + "/orders", listOrders);

router.post(baseUrl + "/orders", createOrder);

router.patch(baseUrl + "/orders/:orderId", changeOrderStatus);

router.delete(baseUrl + "/orders/:orderId", (req, res) => {
	res.send("OK");
});
