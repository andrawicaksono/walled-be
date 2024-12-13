const formatter = require("../utils/responseFormatter");

const createTransaction = (transactionService) => async (req, res, next) => {
  const data = req.body;
  const userId = req.user.id;

  const transactionInput = {
    userId: userId,
    type: data.type,
    fromTo: data.from_to,
    description: data.description,
    amount: data.amount,
  };

  try {
    const [newTransaction, err] = await transactionService.createTransaction(
      transactionInput
    );
    if (err) throw err;

    res.status(201).json({
      success: true,
      message: "Create transaction success",
      data: newTransaction,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUserTransactions =
  (transactionService) => async (req, res, next) => {
    const userId = req.user.id;

    try {
      const [transactions, err] =
        await transactionService.getAllUserTransactions(userId);

      if (err) throw err;

      res.status(200).json({
        success: true,
        message: "Get all user transactions success",
        data: transactions,
      });
    } catch (err) {
      next(err);
    }
  };

module.exports = (transactionService) => {
  return {
    createTransaction: createTransaction(transactionService),
    getAllUserTransactions: getAllUserTransactions(transactionService),
  };
};
