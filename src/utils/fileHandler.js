const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/expenses.json");

const normalizeExpenses = (value) => {
  if (Array.isArray(value)) return value;
  if (value === null || value === undefined || value === "") return [];
  return [value];
};

const readFile = async () => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8").catch((error) => {
      if (error.code === "ENOENT") {
        return "[]";
      }
      throw error;
    });

    const parsedData = fileContent ? JSON.parse(fileContent) : [];
    const normalizedExpenses = normalizeExpenses(parsedData);

    // Fix old data that may have been saved as one object instead of an array.
    if (!Array.isArray(parsedData)) {
      await writeFile(normalizedExpenses);
    }

    return normalizedExpenses;
  } catch (error) {
    throw new Error(`Unable to read expenses: ${error.message}`);
  }
};

const writeFile = async (expenses) => {
  try {
    const normalizedExpenses = normalizeExpenses(expenses);
    await fs.writeFile(filePath, JSON.stringify(normalizedExpenses, null, 2));
  } catch (error) {
    throw new Error(`Unable to write expenses: ${error.message}`);
  }
};

module.exports = {
  readFile,
  writeFile,
};