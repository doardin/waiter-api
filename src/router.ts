import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
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

// GET ALL CATEGORIES
router.get(baseUrl + "/categories", listCategories);

// GET ALL PRODUCTS BY CATEGORY
router.get(baseUrl + "/categories/:categoryId/products", listProductsByCategory);

// CREATE CATEGORY
router.post(baseUrl + "/categories", createCategory);


// GET ALL PRODUCTS
router.get(baseUrl + "/products", listProducts);

// CREATE PRODUCTS
router.post(baseUrl + "/products", upload.single("image"), createProduct);


// GET ALL ORDERS
router.get(baseUrl + "/orders", listOrders);


// CREATE ORDER
router.post(baseUrl + "/orders", createOrder);

// UPDATE ORDER STATUS
router.patch(baseUrl + "/orders/:orderId", changeOrderStatus);

// CANCEL ORDER
router.delete(baseUrl + "/orders/:orderId", cancelOrder);
