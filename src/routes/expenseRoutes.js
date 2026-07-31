const express = require('express');
const {expenseValidationRules,validateExpense} = require('../middleware/expenseValidator')
const {addExpense,getAllExpense,getFilterExpenses,getTotalExpense,getTotalExpenseByCategory,deleteExpenses} = require('../controllers/expenseController')

const Expense_routes = express.Router();
/**
 * @swagger
 * /api/add-expenses:
 *   post:
 *     summary: Add a new expense
 *     tags:
 *       - Expenses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Expense added successfully
 */

Expense_routes.post('/add-expenses',expenseValidationRules,validateExpense,addExpense);

/**
 * @swagger
 * /api/get-expenses:
 *   get:
 *     summary: Get all expenses
 *     tags:
 *       - Expenses
 *     responses:
 *       200:
 *         description: Returns all expenses
 */
Expense_routes.get('/get-expenses',getAllExpense);

/**
 * @swagger
 * /api/expenses/filter:
 *   get:
 *     summary: Filter expenses by category
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filtered expenses
 */
Expense_routes.get('/expenses/filter',getFilterExpenses);

/**
 * @swagger
 * /api/get-total-expense:
 *   get:
 *     summary: Get total expense
 *     tags:
 *       - Expenses
 *     responses:
 *       200:
 *         description: Total expense amount
 */
Expense_routes.get('/get-total-expense',getTotalExpense);

/**
 * @swagger
 * /api/get-total-expense/category:
 *   get:
 *     summary: Get total expenses by category
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Category name (e.g. Food, Travel, Shopping)
 *     responses:
 *       200:
 *         description: Total expenses for the specified category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 category:
 *                   type: string
 *                   example: Food
 *                 totalExpense:
 *                   type: number
 *                   example: 1500
 *       400:
 *         description: Category is required
 */
Expense_routes.get(
  "/get-total-expense/category",
  getTotalExpenseByCategory
);

/**
 * @swagger
 * /api/delete-expense/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense deleted successfully
 */
Expense_routes.delete('/delete-expense/:id',deleteExpenses)

module.exports= Expense_routes;