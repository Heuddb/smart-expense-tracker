const { body, validationResult } = require("express-validator");


const expenseValidationRules = [
  body().custom((value) => {
    const items = Array.isArray(value) ? value : [value];

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        throw new Error(`Expense at index ${i} must be an object.`);
      }

      if (!String(item.title || '').trim()) {
        throw new Error(`Title is required for expense at index ${i}.`);
      }

      if (item.amount === undefined || item.amount === null || Number(item.amount) <= 0) {
        throw new Error(`Amount must be greater than 0 for expense at index ${i}.`);
      }

      if (!String(item.category || '').trim()) {
        throw new Error(`Category is required for expense at index ${i}.`);
      }

      if (!item.date || !/^\d{4}-\d{2}-\d{2}$/.test(String(item.date))) {
        throw new Error(`Date must be in YYYY-MM-DD format for expense at index ${i}.`);
      }
    }

    return true;
  }),
];

const validateExpense = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  expenseValidationRules,
  validateExpense,
};