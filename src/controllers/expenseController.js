const {AddExpenses,getexpense,filterExpenses,totalExpenses,totalExpensesByCategory,deleteExpense} = require("../services/expenseService");

const addExpense = async (req, res, next) => {
  try {
    const expense = await AddExpenses(req.body);
    const items = Array.isArray(expense) ? expense : [expense];

    return res.status(200).json({
      message: Array.isArray(req.body) ? "expenses added successfully" : "expense added successfully",
      success: true,
      count: items.length,
      data: expense,
    });
  } catch (error) {
    next(error);
  }
};

const getAllExpense = async (req,res,next)=>{

  try{

    const getExpenses = await getexpense();

    return res.status(200).json({success:true,data:getExpenses,count:getExpenses.length})

  }catch(error){
    res.status(400).json({error:"unable to fetch expense"})
  }


}

const getFilterExpenses = async (req,res,next)=>{

  try{
    const {category} = req.query;

    if(!category){
      return res.status(400).json({message:"category is required"})
    }

    const filterData = await filterExpenses(category);

        return res.status(200).json({success:true,data:filterData,count:filterData.length})


  }catch(error){
     next(error);
  }
}

const getTotalExpense = async (req, res, next) => {
  try {
    const total = await totalExpenses();

    return res.status(200).json({success:true, totalExpense: total})
  } catch (error) {
    next(error);
  }
};

const getTotalExpenseByCategory = async (req, res, next) => {
  try {
    const { category } = req.query;

    const total = await totalExpensesByCategory(category);

    return res.status(200).json({
      success: true,
      category,
      totalExpense: total,
    });
  } catch (error) {
    next(error);
  }
};


const deleteExpenses = async (req,res,next)=>{

   try {
    const {id} = req.params;
    if(!id) {
      return res.status(400).json({message:"id is required"})
    }
    const removeExpense = await deleteExpense(id);

    return res.status(200).json({success:true, data:removeExpense , message:"Expense deleted"})
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addExpense,
  getAllExpense,
  getFilterExpenses,
  getTotalExpense,
  getTotalExpenseByCategory,
  deleteExpenses
};
