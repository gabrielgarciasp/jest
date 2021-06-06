const { Router } = require("express");

const productService = require("../service/product.service");

const router = Router();

router.get("/:id", (req, res) => {
	const product = productService.findProductById(req.params.id);
	res.status(product != undefined ? 200 : 404).send(product);
});

router.post("/", (req, res) => {
	const product = productService.createProduct(req.body);
	res.set("Location", "http://localhost:3000/products/" + product.id);
	res.status(201).end();
});

router.put("/:id", (req, res) => {
	const product = productService.updateProduct({
		...req.body,
		id: req.params.id,
	});
	res.status(product != undefined ? 200 : 404).end();
});

router.delete("/:id", (req, res) => {
	const product = productService.deleteProduct(req.params.id);
	res.status(product != undefined ? 200 : 404).end();
});

module.exports = router;
