const productRepository = require("../repository/product.repository");

function findProductById(id) {
	return productRepository.findById(id);
}

function createProduct(product) {
	return productRepository.save(product);
}

function updateProduct(product) {
	return productRepository.save(product);
}

function deleteProduct(id) {
	return productRepository.destroy(id);
}

module.exports = {
	findProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
