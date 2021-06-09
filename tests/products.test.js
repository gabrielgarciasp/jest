const request = require("./request");

describe("Unitary Tests Products", () => {
	const generateNewId = require("../src/utils/generate-new-id");

	it("Test generate new id", async () => {
		expect(generateNewId(1)).toBe(2);
	});
});

describe("Integration Tests Products", () => {
	it("Test create product", async () => {
		const res = await request.post("/products").send({
			name: "Uniforme Uni-FACEF",
			price: 59.9,
		});

		expect(res.status).toBe(201);
		expect(res.body).toEqual({});
		expect(res.headers.location).toBe(
			"http://localhost:3000/products/1"
		);
	});

	it("Test get product", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(200);
		expect(res.body).toEqual({ id: 1, name: "Uniforme Uni-FACEF", price: 59.9 });
	});

	it("Test update product", async () => {
		const res = await request.put("/products/1").send({
			name: "Uniforme Uni-FACEF",
			price: 69.9,
		});

		expect(res.status).toBe(204);
		expect(res.body).toEqual({});
	});

	it("Test get updated product", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(200);
		expect(res.body).toEqual({ id: "1", name: "Uniforme Uni-FACEF", price: 69.9 });
	});

	it("Test delete product", async () => {
		const res = await request.delete("/products/1");

		expect(res.status).toBe(204);
		expect(res.body).toEqual({});
	});

	it("Test get product deleted", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(404);
		expect(res.body).toEqual({});
	});

	it("Test update product deleted", async () => {
		const res = await request.put("/products/1").send({
			name: "Uniforme Uni-FACEF",
			price: 69.9,
		});

		expect(res.status).toBe(404);
		expect(res.body).toEqual({});
	});

	it("Test delete product deleted", async () => {
		const res = await request.delete("/products/1");
		console.log(res.status);

		expect(res.status).toBe(404);
		expect(res.body).toEqual({});
	});
});
