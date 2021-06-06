const { Router } = require("express");

const productRouter = require("./product.routes");

const router = Router();

router.use("/products", productRouter);

module.exports = router;
