const { v4: uuidv4 } = require('uuid');
const { readFile, writeFile } = require('../utils/fileHandler');

const normalizeExpense = ({ title, amount, category, date }) => ({
  id: uuidv4(),
  title: String(title).trim(),
  amount: Number(amount),
  category: String(category).trim(),
  date,
});

const getInsertedExpenses = (originalInput, newExpenses) => {
  return Array.isArray(originalInput) ? newExpenses : newExpenses[0];
};


const AddExpenses = async (expenseData) => {
  const expensesList = Array.isArray(expenseData) ? expenseData : [expenseData];
  const existingExpenses = await readFile();

  const newExpenses = expensesList.map(normalizeExpense);

  existingExpenses.push(...newExpenses);
  await writeFile(existingExpenses);

  return getInsertedExpenses(expenseData, newExpenses);
};

const getexpense = async () =>{

  const allexpense = await readFile();

  return allexpense;
}

const filterExpenses = async (category)=>{

  const expenses = await readFile();

  const filteredExpense = expenses.filter((cat)=>{

    return cat.category === category 

  });

  return filteredExpense;
}

const totalExpenses = async () => {

  const expenses = await readFile();

  const totalExpense = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return totalExpense;
};

const totalExpensesByCategory = async (category) => {

  const expenses = await readFile();

  if(!category){
    throw new Error("category required")
  }


  const category_expense = expenses.filter((cat)=>{
    return cat.category === category;
  })

  const total = category_expense.reduce((acc,curr)=>{
    return acc + curr.amount
  },0)

  return total;
};

const deleteExpense = async (id) =>{

  const expense = await readFile();

  const existExpense = expense.find(item=> item.id === id);

  if(!existExpense){
    throw new Error("Expense not found");
  }

  const remove_expense = expense.filter((par)=>{
    return par.id !== id;
  })

  await writeFile(remove_expense);

  return existExpense;

}

module.exports = {AddExpenses,getexpense,filterExpenses,totalExpenses,deleteExpense,totalExpensesByCategory};