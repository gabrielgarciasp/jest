const generateNewId = require("../utils/generate-new-id");

const products = [];
let index = 0;

function findById(id) {
	return products.find((product) => product.id == id);
}

function save(product) {
	if (product.id != undefined) {
		const index = products.findIndex((x) => x.id == product.id);

		if (index === -1) return;

		products[index] = { ...products[index], ...product };
	} else {
		index = generateNewId(index);
		product.id = index;
		products.push(product);
	}

	return product;
}

function destroy(id) {
	const index = products.findIndex((x) => x.id == id);

	if (index === -1) return;

	return products.splice(index, 1);
}

module.exports = {
	findById,
	save,
	destroy,
};
