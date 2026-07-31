# Smart Expense Tracker API

A RESTful Expense Tracker API built using **Node.js** and **Express.js**. The API allows users to manage personal expenses using a local JSON file as storage.

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses
- Calculate total expenses by category
- Delete an expense
- Input validation using Express Validator
- File-based JSON storage
- API testing with Jest & Supertest
- Interactive API documentation using Swagger

---

# Tech Stack

- Node.js
- Express.js
- UUID
- Express Validator
- Jest
- Supertest
- Swagger UI
- swagger-jsdoc

---

# Project Structure

```text
smart-expense-tracker/
│
├── README.md
├── AI_NOTES.md
├── package.json
├── package-lock.json
├── .gitignore
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   └── expenseController.js
│   │
│   ├── data/
│   │   └── expenses.json
│   │
│   ├── middleware/
│   │   └── expenseValidator.js
│   │
│   ├── routes/
│   │   └── expenseRoutes.js
│   │
│   ├── services/
│   │   └── expenseService.js
│   │
│   └── utils/
│       └── fileHandler.js
│
└── tests/
    └── expense.test.js
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd smart-expense-tracker
```

Install dependencies

```bash
npm install
```

---

# Run the Server

```bash
npm start
```

The server will start on:

```
http://localhost:3000
```

---

# Run Tests

```bash
npm test
```

All API tests are written using **Jest** and **Supertest**.

---

# Swagger Documentation

After starting the server, open:

```
http://localhost:3000/api-docs
```

Swagger provides interactive API documentation where every endpoint can be tested directly from the browser.

---

# API Endpoints

## Add Expense

**POST**

```
/api/add-expenses
```

Request Body

```json
{
  "title": "Pizza",
  "amount": 500,
  "category": "Food",
  "date": "2026-07-31"
}
```

---

## Get All Expenses

**GET**

```
/api/get-expenses
```

---

## Filter Expenses

**GET**

```
/api/expenses/filter?category=Food
```

---

## Get Total Expenses

**GET**

```
/api/get-total-expense
```

---

## Get Total Expenses By Category

**GET**

```
/api/get-total-expense/category?category=Food
```

---

## Delete Expense

**DELETE**

```
/api/delete-expense/:id
```

Example

```
/api/delete-expense/8f97e4d5-1d57-4dd0-95f0-46b6a7b1d2f8
```

---

# Sample Response

```json
{
  "success": true,
  "data": {
    "id": "8f97e4d5-1d57-4dd0-95f0-46b6a7b1d2f8",
    "title": "Pizza",
    "amount": 500,
    "category": "Food",
    "date": "2026-07-31"
  }
}
```

---

# Validation

The API validates incoming requests using **Express Validator**.

Validation includes:

- Title is required.
- Amount must be a valid number.
- Category is required.
- Date is required.

---

# Bonus Feature

Implemented **Swagger (OpenAPI)** documentation for interactive API testing.

---

# Author

**Anubhav Dubey**