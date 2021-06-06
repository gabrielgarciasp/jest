const request = require("./request");

describe("Unitary Test Products", () => {
	const generateNewId = require("../src/utils/generate-new-id");

	it("Test generate new id", async () => {
		expect(generateNewId(1)).toBe(2);
	});
});

describe("Integration Test Products", () => {
	it("Test create product", async () => {
		const res = await request.post("/products").send({
			name: "Uniforme Uni-FACEF",
			price: 59.9,
		});

		expect(res.status).toEqual(201);
		expect(res.headers.location).toEqual(
			"http://localhost:3000/products/1"
		);
	});

	it("Test get product", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(200);
		expect(res.body).toMatchObject({ id: 1 });
		expect(res.body).toMatchObject({ name: "Uniforme Uni-FACEF" });
		expect(res.body).toMatchObject({ price: 59.9 });
	});

	it("Test update product", async () => {
		const res = await request.put("/products/1").send({
			name: "Uniforme Uni-FACEF",
			price: 69.9,
		});

		expect(res.status).toEqual(200);
	});

	it("Test get updated product", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(200);
		expect(res.body).toMatchObject({ id: "1" });
		expect(res.body).toMatchObject({ name: "Uniforme Uni-FACEF" });
		expect(res.body).toMatchObject({ price: 69.9 });
	});

	it("Test delete product", async () => {
		const res = await request.delete("/products/1");

		expect(res.status).toBe(200);
	});

	it("Test get product deleted", async () => {
		const res = await request.get("/products/1");

		expect(res.status).toBe(404);
	});

	it("Test update product deleted", async () => {
		const res = await request.put("/products/1").send({
			name: "Uniforme Uni-FACEF",
			price: 69.9,
		});

		expect(res.status).toEqual(404);
	});

	it("Test delete product deleted", async () => {
		const res = await request.delete("/products/1");

		expect(res.status).toBe(404);
	});
});
