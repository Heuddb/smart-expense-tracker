const request = require("supertest");
const app = require("../src/app");

describe("Health Check", () => {
  test("GET / should return API status", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

//  Add expense test

describe("Add Expense API", () => {
  test("POST /api/add-expenses should create a new expense", async () => {
    const expense = {
      title: "Pizza",
      amount: 500,
      category: "Food",
      date: "2026-07-31",
    };

    const response = await request(app)
      .post("/api/add-expenses")
      .send(expense);

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe("Pizza");
    expect(response.body.data.amount).toBe(500);
    expect(response.body.data.category).toBe("Food");
  });
});

//  Get all expense test

describe("Get All Expenses API", () => {
  test("GET /api/get-expenses should return all expenses", async () => {
    const response = await request(app).get("/api/get-expenses");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});

//  filter api test

describe("Filter Expense API", () => {
  test("GET /api/expenses/filter should return filtered expenses", async () => {
    const response = await request(app).get(
      "/api/expenses/filter?category=Food"
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);

    response.body.data.forEach((expense) => {
      expect(expense.category).toBe("Food");
    });
  });
});

//  Get total expense

describe("Total Expense API", () => {
  test("GET /api/get-total-expense should return total amount", async () => {
    const response = await request(app).get("/api/get-total-expense");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(typeof response.body.totalExpense).toBe("number");
  });
});

// Get total expense by category

describe("Get Total Expense By Category API", () => {
  test("GET /api/get-total-expense/category should return total expense by category", async () => {
    const response = await request(app).get(
      "/api/get-total-expense/category?category=Food"
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.category).toBe("Food");
    expect(typeof response.body.totalExpense).toBe("number");
  });
});

// Delete api test

describe("Delete Expense API", () => {
  test("DELETE /api/delete-expense/:id should delete an expense", async () => {
    const created = await request(app)
      .post("/api/add-expenses")
      .send({
        title: "Delete Test",
        amount: 100,
        category: "Food",
        date: "2026-07-31",
      });

    const id = created.body.data.id;

    const response = await request(app).delete(`/api/delete-expense/${id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.id).toBe(id);
  });
});