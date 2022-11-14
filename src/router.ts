import { Router } from "express";

export const router = Router();

const baseUrl = "/waiter/v1";

router.get(baseUrl + "/categories", (req, res) => {
	res.send("OK");
});

router.get(baseUrl + "/categories/:categoryId/products", (req, res) => {
	res.send("OK");
});

router.post(baseUrl + "/categories", (req, res) => {
	res.send("OK");
});



router.get(baseUrl + "/products", (req, res) => {
	res.send("OK");
});

router.post(baseUrl + "/products", (req, res) => {
	res.send("OK");
});



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
